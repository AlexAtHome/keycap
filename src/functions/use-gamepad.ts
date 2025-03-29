import { useEffect, useState } from "react"
import { connectController, disconnectController, pressControllerKey, resetTouchedControllerKeys, unvibrateController, vibrateController } from "../reducers"
import { store } from "../store"

export enum GamepadHID {
	XboxOneController = '045e-028e',
	XboxSeriesController = '045e-0b12'
}

export class GamepadController {
	static id?: string
	static hid?: string
	static controller: Gamepad | null
	static isConnected = false
	static isXbox: boolean
	static axesStatus: string[]

	static values: number[]
	static pressed: boolean[]
	static touched: boolean[]
	static axes: number[]

	private static animationFrame = -1

	static connect(event: GamepadEvent): void {
		if (GamepadController.isConnected) {
			return
		}
		this.id = event.gamepad.id
		this.hid = this.getHID()
		this.isXbox = [GamepadHID.XboxSeriesController, GamepadHID.XboxOneController].includes(this.hid as GamepadHID)
		this.isConnected = true
		store.dispatch(connectController({
			id: event.gamepad.id,
			isVibrating: false,
			buttons: event.gamepad.buttons.map((button) => button.value),
			pressedButtons: event.gamepad.buttons.map((button) => button.pressed),
			touchedButtons: event.gamepad.buttons.map((button) => button.touched),
			axes: event.gamepad.axes.map(Number),
			hasVibration: !!event.gamepad.vibrationActuator
		}))
		this.startLoop()
	}

	static async vibrate() {
		const actuator = GamepadController.controller?.vibrationActuator
		if (!actuator) {
			return
		}

		store.dispatch(vibrateController())
		await actuator.playEffect("dual-rumble", {
			duration: 700,
			strongMagnitude: 1,
			weakMagnitude: 0.1,
		})
		await actuator.playEffect("trigger-rumble", {
			duration: 500,
			startDelay: 0,
			leftTrigger: 1,
			rightTrigger: 1,
			strongMagnitude: 1,
			weakMagnitude: 0.1,
		})
		store.dispatch(unvibrateController())
	}

	private static getHID(): GamepadHID {
		const id = this.id!
		const hidPattern = /^\w{4}-\w{4}/
		if (hidPattern.test(id)) {
			return id.slice(0, 9) as GamepadHID
		}
		const vendorMatch = id.match(/Vendor: \w{4}/)
		const productMatch = id.match(/Product: \w{4}/)
		if (vendorMatch !== null && productMatch !== null) {
			return `${vendorMatch[0].slice(7)}-${productMatch[0].slice(9)}`.trim() as GamepadHID
		}
		return '' as GamepadHID
	}

	static disconnect(_event: GamepadEvent): void {
		GamepadController.isConnected = false
		delete this.id
		delete this.hid
		store.dispatch(disconnectController())
		cancelAnimationFrame(this.animationFrame)
	}

	private static loop(): number {
		GamepadController.update()
		return GamepadController.animationFrame = requestAnimationFrame(GamepadController.loop)
	}

	static startLoop(): void {
		GamepadController.animationFrame = requestAnimationFrame(GamepadController.loop)
	}

	static stopLoop(): void {
		cancelAnimationFrame(this.animationFrame)
	}

	static resetTouched(): void {
		this.touched = this.touched.map(_ => false)
		store.dispatch(resetTouchedControllerKeys())
	}

	/** Executed on every frame inside the game loop, to update the actual status of the gamepad object regularly */
	private static update(): void {
		const c = this.controller = navigator.getGamepads().find(gamepad => gamepad?.id === this.id) ?? null ?? {} as Gamepad

		let hasValueChanges = false
		let hasPressedChanges = false
		let hasTouchedChanges = false
		let hasAxesChanges = false

		if (c.buttons) {
			this.values ??= c.buttons.map(button => button.value)
			this.pressed ??= c.buttons.map(button => button.pressed)
			this.touched ??= c.buttons.map(button => button.touched)

			for (let b = 0; b < c.buttons.length; b++) {
				const button = c.buttons[b]
				hasValueChanges ||= this.values[b] !== button.value
				this.values[b] = Number(button.value)
				hasPressedChanges ||= this.pressed[b] !== button.pressed
				this.pressed[b] = Boolean(button.pressed)
				hasTouchedChanges ||= !this.touched[b] && this.touched[b] !== button.touched
				this.touched[b] ||= Boolean(button.touched)
			}
		}

		if (c.axes) {
			this.axes ??= c.axes.map(Number)
			for (let a = 0; a < c.axes.length; a++) {
				hasAxesChanges ||= this.axes[a] !== c.axes[a]
				this.axes[a] = Number(c.axes[a])
			}
		}

		if (hasValueChanges || hasPressedChanges || hasTouchedChanges || hasAxesChanges) {
			store.dispatch(pressControllerKey({
				buttons: hasValueChanges ? this.values : undefined,
				pressed: hasPressedChanges ? this.pressed : undefined,
				touched: hasTouchedChanges ? this.touched : undefined,
				axes: hasAxesChanges ? this.axes : undefined,
			}))
		}
	}
}

export default function useGamepad(): boolean {
	const [isListening, setIsListening] = useState(false)
	function connect(event: GamepadEvent) {
		if (!isListening) {
			GamepadController.connect(event)
			setIsListening(true)
		}
	}
	function disconnect(event: GamepadEvent) {
		if (isListening) {
			GamepadController.disconnect(event)
			setIsListening(false)
		}
	}
	useEffect(() => {
		if (GamepadController.id) {
			GamepadController.startLoop()
			setIsListening(true)
		}
		addEventListener('gamepadconnected', connect)
		addEventListener('gamepaddisconnected', disconnect)
		return () => {
			removeEventListener('gamepadconnected', connect)
			removeEventListener('gamepaddisconnected', disconnect)
			GamepadController.stopLoop()
		}
	}, [isListening])

	return isListening
}