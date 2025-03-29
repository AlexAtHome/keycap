import { Controller } from "react-bootstrap-icons"
import { GamepadController } from "../../functions/use-gamepad"
import { Button } from "../button/button"

export const VibrateButton = () => {
	return <Button onClick={GamepadController.vibrate} className="text-red-300">
		Test vibration
		<Controller size="1.5em" role="presentation" />
	</Button>
}