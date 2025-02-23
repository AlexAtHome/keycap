import { useEffect } from "react"
import { connectController, disconnectController, pressControllerKey, resetTouchedControllerKeys } from "../reducers"
import { store } from "../store"

export class GamepadController {
	static id?: string
	static get controller(): Gamepad | null {
		return navigator.getGamepads().find(gamepad => gamepad?.id === this.id) ?? null
	}
	static isConnected = false
	static axesStatus: string[]

	static values: number[]
	static pressed: boolean[]
	static touched: boolean[]
	static axes: number[];

	private static animationFrame = -1

	static connect(event: GamepadEvent): void {
		if (this.isConnected) {
			return
		}
		this.id = event.gamepad.id
		this.isConnected = true
		store.dispatch(connectController({
			id: event.gamepad.id,
			buttons: event.gamepad.buttons.map((button) => button.value),
			pressedButtons: event.gamepad.buttons.map((button) => button.pressed),
			touchedButtons: event.gamepad.buttons.map((button) => button.touched),
			axes: event.gamepad.axes.map(Number),
		}))
		this.startLoop()
	}

	static disconnect(_event: GamepadEvent): void {
		this.isConnected = false
		delete this.id
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
		const c = this.controller ?? {} as Gamepad

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

export default function useGamepad(): void {
	function connect(event: GamepadEvent) {
		GamepadController.connect(event)
	}
	useEffect(() => {
		if (GamepadController.id) {
			GamepadController.startLoop()
		}
		addEventListener('gamepadconnected', connect)
		addEventListener('gamepaddisconnected', GamepadController.disconnect)
		return () => {
			removeEventListener('gamepadconnected', connect)
			removeEventListener('gamepaddisconnected', GamepadController.disconnect)
			GamepadController.stopLoop()
		}
	}, [])
}
