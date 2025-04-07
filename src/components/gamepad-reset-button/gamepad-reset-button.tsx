import { useSelector } from "react-redux"
import type { RootState } from "../../store"
import { GamepadController } from "../../functions/use-gamepad"
import { Button } from "../button/button"
import { ArrowClockwise } from "react-bootstrap-icons"

export const GamepadResetButton = () => {
	const isConnected = useSelector((state: RootState) => state.controller.isConnected)
	const hasTouchedKeys = useSelector((state: RootState) => state.controller.touchedButtons.some(Boolean))
	const reset = () => {
		GamepadController.resetTouched()
		GamepadController.resetHistory()
	}

	return <Button disabled={!hasTouchedKeys || !isConnected} onClick={reset}>
		Reset
		<ArrowClockwise size="1.5em" role="presentation" />
	</Button>
}