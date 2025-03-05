import { Controller } from "react-bootstrap-icons"
import { GamepadController } from "../../functions/use-gamepad"
import { Button } from "../button/button"

export const VibrateButton = () => {
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
