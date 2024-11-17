import type { FC } from "react";
import clsx from "clsx";
import useGamepad, { GamepadController } from "../functions/use-gamepad";
import { useParams } from "react-router-dom";
import { RootState, store } from "../store";
import { useSelector } from "react-redux";
import { resetPressedKeys, resetTouchedControllerKeys } from "../reducers";
import { Button } from "../components/button/button";
import { ArrowClockwise } from "react-bootstrap-icons";

const DevicePage = () => {
	const params = useParams()
	const index = params.index ? +params.index : 0;
	return <section>
		{<GenericGamepadLayout index={index} />}
	</section>
}

interface GamepadLayoutParams {
	index: number;
}

const GenericGamepadLayout: FC<GamepadLayoutParams> = () => {
	useGamepad()
	const gamepad = useSelector((state: RootState) => state.controller);
	if (!gamepad.isConnected) {
		return <div>
			<h2 className="font-bold text-4xl mb-2">Controller not found</h2>
			<p>Make sure it's connected to your device and press any button.</p>
		</div>
	}

	return <div className="flex flex-col gap-4">
		<h2 className="font-bold text-4xl mb-2">{gamepad.name}</h2>

		<div className="flex gap-2">
			<GamepadResetButton />
		</div>

		<ul className="flex gap-4 flex-wrap">
			{gamepad.buttons.map((button, i) => <li className="inline-flex" key={i}>
				<div className={clsx("rounded-lg p-2 inline-flex flex-col gap-1 items-start", {
					'bg-green-400': gamepad.pressedButtons[i],
					'bg-blue-300': gamepad.touchedButtons[i],
					'text-black': gamepad.pressedButtons[i] || gamepad.touchedButtons[i]
				})}>
					<small>Button {i}</small>
					<span>{button}</span>
				</div>
			</li>)}
		</ul>

		{/*<ul>
			{gamepad.axes.map((axis, i) => <li key={i}>
				<span>Axis {i}</span>
				<progress value={axis} max={1}></progress>
			</li>)}
		</ul> */}
	</div >
}

export default DevicePage

const GamepadResetButton = () => {
	const hasTouchedKeys = useSelector((state: RootState) => state.controller.touchedButtons.some(Boolean))
	const reset = () => {
		GamepadController.resetTouched()
	}

	return <Button disabled={!hasTouchedKeys} onClick={reset}>
		Reset
		<ArrowClockwise size="1.5em" role="presentation" />
	</Button>
}
