import clsx from "clsx"
import useGamepad, { GamepadController } from "../functions/use-gamepad"
import { RootState } from "../store"
import { useSelector } from "react-redux"
import { Button } from "../components/button/button"
import { ArrowClockwise, Controller, ExclamationTriangle } from "react-bootstrap-icons"
import { ProgressBar } from "../components/progress-bar/progress-bar"

const GenericGamepadLayout = () => {
	useGamepad()
	const gamepad = useSelector((state: RootState) => state.controller)
	if (gamepad.id === 'none') {
		return <section>
			<h2 className="font-bold text-4xl mb-2">Controller not found</h2>
			<p>Make sure it's connected to your device and press any button.</p>
		</section>
	}

	return <section className="flex flex-col gap-4">
		<h2 className="font-bold text-4xl mb-2">{gamepad.name}</h2>
		{!gamepad.isConnected && <div className="rounded-lg p-2 bg-yellow-600 text-black">
			<h3 className="font-bold text-2xl mb-2 inline-flex gap-2 items-baseline"><ExclamationTriangle aria-hidden={true} /> Looks like the gamepad has been disconnected!</h3>
			<p>Make sure it is properly connected to the computer via cable or Bluetooth, then try to press any button.</p>
		</div>}

		<div className="flex gap-2">
			<GamepadResetButton />
			{gamepad.hasVibration && <VibrateButton />}
		</div>

		<ul className="flex gap-2 flex-wrap">
			{gamepad.buttons.map((value, i) => <li className="inline-flex" key={i}>
				<div className={clsx("rounded-lg p-2 inline-flex flex-col gap-1 items-start", {
					'bg-green-400': gamepad.pressedButtons[i],
					'bg-blue-500': gamepad.touchedButtons[i],
					'text-black': gamepad.pressedButtons[i] || gamepad.touchedButtons[i]
				})}>
					<span id={`button-${i}`}>Button {i}</span>
					<ProgressBar max={1} value={value} ariaLabelledby={`button-${i}`} />
					<small className="text-xs" role="presentation">{value * 10 % 10 !== 0 ? value.toFixed(6) : 0}</small>
				</div>
			</li>)}
		</ul>

		<ul className="flex gap-4 flex-wrap">
			{gamepad.axes.map((axis, i) => <li className="inline-flex" key={i}>
				<div className={clsx("rounded-lg p-2 inline-flex flex-col gap-1 items-start")}>
					<span id={`axis-${i}`}>Axis {i}</span>
					<ProgressBar min={-1} max={1} value={axis} ariaLabelledby={`axis-${i}`} />
					<small className="text-xs" role="presentation">{axis}</small>
				</div>
			</li>)}
		</ul>

	</section>
}

export default GenericGamepadLayout

const GamepadResetButton = () => {
	const isConnected = useSelector((state: RootState) => state.controller.isConnected)
	const hasTouchedKeys = useSelector((state: RootState) => state.controller.touchedButtons.some(Boolean))
	const reset = () => {
		GamepadController.resetTouched()
	}

	return <Button disabled={!hasTouchedKeys || !isConnected} onClick={reset}>
		Reset
		<ArrowClockwise size="1.5em" role="presentation" />
	</Button>
}

const VibrateButton = () => {
	const test = async () => {
		const actuator = GamepadController.controller?.vibrationActuator
		if (!actuator) {
			return
		}
		await actuator.playEffect("dual-rumble", {
			duration: 700,
			strongMagnitude: 1,
			weakMagnitude: 0.1,
		})
		await actuator.playEffect("trigger-rumble", {
			duration: 500,
			startDelay: 300,
			leftTrigger: 1,
			rightTrigger: 0,
			strongMagnitude: 1,
			weakMagnitude: 0.1,
		})
		await actuator.playEffect("trigger-rumble", {
			duration: 500,
			startDelay: 300,
			leftTrigger: 0,
			rightTrigger: 1,
			strongMagnitude: 1,
			weakMagnitude: 0.1,
		})
	}
	return <Button onClick={test} className="text-red-300">
		Test vibration
		<Controller size="1.5em" role="presentation" />
	</Button>
}
