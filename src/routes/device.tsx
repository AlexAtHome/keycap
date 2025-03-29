import useGamepad, { GamepadController } from "../functions/use-gamepad"
import { RootState } from "../store"
import { useSelector } from "react-redux"
import { GenericGamepadLayout } from "../components/gamepad/generic"
import { ExclamationTriangle } from "react-bootstrap-icons"
import { GamepadResetButton } from "../components/gamepad-reset-button/gamepad-reset-button"
import { VibrateButton } from "../components/vibrate-button/vibrate-button"
import { XboxGamepadLayout } from "../components/gamepad/xbox-series"
import { Toggle } from "../components/toggle/toggle"
import { useState } from "react"

const GamepadPageLayout = () => {
	useGamepad()
	const gamepad = useSelector((state: RootState) => state.controller)
	const [isAdvancedView, setAdvancedView] = useState(false)
	if (gamepad.id === 'none') {
		return <section>
			<h2 className="font-bold text-4xl mb-2">Please connect a controller</h2>
			<p>Make sure it's connected to your device and press any button.</p>
		</section>
	}
	return <section className="flex flex-col gap-4">
		<h2 className="font-bold text-4xl mb-2">{gamepad.name}</h2>
		{!gamepad.isConnected && <div className="rounded-lg p-2 bg-yellow-600 text-black">
			<h3 className="font-bold text-2xl mb-2 inline-flex gap-2 items-baseline">
				<ExclamationTriangle aria-hidden={true} />
				Looks like the gamepad has been disconnected!
			</h3>
			<p>Make sure it is properly connected to the computer via cable or Bluetooth, then try to press any button.</p>
		</div>}

		<div className="flex items-center gap-2">
			<GamepadResetButton />
			{gamepad.hasVibration && <VibrateButton />}
			{GamepadController.isXbox && <Toggle value={isAdvancedView} onToggle={() => setAdvancedView(v => !v)}>Advanced view</Toggle>}
		</div>

		{isAdvancedView &&
			<dl className="details">
				<dt>HID</dt>
				<dd>{GamepadController.hid}</dd>
				<dt>Vibration</dt>
				<dd>{gamepad.hasVibration ? 'Available' : 'No'}</dd>
			</dl>
		}

		{GamepadController.isXbox && !isAdvancedView ? <XboxGamepadLayout /> : <GenericGamepadLayout />}
	</section>
}

export default GamepadPageLayout

