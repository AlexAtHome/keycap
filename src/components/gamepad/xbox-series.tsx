import type { FC } from "react";
import { useSelector } from "react-redux"
import clsx from "clsx"
import { ProgressBar } from "../progress-bar/progress-bar";
import { CoordDiagram } from "../coord-diagram/coord-diagram";
import type { RootState } from "../../store"
import { CaretDownFill, CaretLeftFill, CaretRightFill, CaretUpFill, Download, List } from "react-bootstrap-icons";

export const XboxGamepadLayout = () => {
	const isXboxElite = useSelector((state: RootState) => state.controller.buttons.length > 18)
	return <div className="flex flex-col gap-4">
		<div className="grid grid-cols-3 auto-rows-auto gap-4 w-6/12">
			<div className="col-start-1 col-end-2 row-start-1 row-end-2 inline-flex flex-col w-20 justify-self-start">
				<LeftTrigger />
				<GamepadButton i={4}>LB</GamepadButton>
			</div>
			<div className="col-start-3 col-end-3 row-start-1 row-end-2 inline-flex flex-col w-20 justify-self-end">
				<RightTrigger />
				<GamepadButton i={5}>RB</GamepadButton>
			</div>

			<div className="col-start-1 col-end-2 row-start-2 row-end-3 w-32">
				<LeftStick />
			</div>
			<ul className="grid grid-cols-3 grid-rows-3 gap-2 col-start-2 col-end-3 w-40 justify-self-center row-start-2 row-end-3">
				<li className="inline-grid col-start-1 col-end-2 row-start-2 row-end-3">
					<GamepadButton i={8}>View</GamepadButton>
				</li>
				{!isXboxElite && <li className="inline-grid col-start-2 col-end-3 row-start-3 row-end-4">
					<GamepadButton i={17}>
						<Download />
					</GamepadButton>
				</li>}
				<li className="inline-grid col-start-3 col-end-4 row-start-2 row-end-3">
					<GamepadButton i={9}>
						<List />
					</GamepadButton>
				</li>
			</ul>
			<ul className="grid grid-cols-3 grid-rows-3 gap-2 col-start-3 col-end-4 row-start-2 row-end-3 w-40 justify-self-end">
				<li className="inline-grid col-start-2 col-end-3 row-start-1 row-end-2">
					<GamepadButton i={2}>Y</GamepadButton>
				</li>
				<li className="inline-grid col-start-2 col-end-3 row-start-3 row-end-4">
					<GamepadButton i={0}>A</GamepadButton>
				</li>
				<li className="inline-grid col-start-1 col-end-2 row-start-2 row-end-3">
					<GamepadButton i={3}>X</GamepadButton>
				</li>
				<li className="inline-grid col-start-3 col-end-4 row-start-2 row-end-3">
					<GamepadButton i={1}>B</GamepadButton>
				</li>
			</ul>

			<div className="flex justify-around gap-2 col-start-1 col-end-4 row-start-3 row-end-4">
				<ul className="grid grid-cols-3 flex-shrink-0 gap-2 w-40">
					<li className="inline-grid col-start-2 col-end-3 row-start-1 row-end-2">
						<GamepadButton i={12}>
							<CaretUpFill />
						</GamepadButton>
					</li>
					<li className="inline-grid col-start-2 col-end-3 row-start-3 row-end-4">
						<GamepadButton i={13}>
							<CaretDownFill />
						</GamepadButton>
					</li>
					<li className="inline-grid col-start-1 col-end-2 row-start-2 row-end-3">
						<GamepadButton i={14}>
							<CaretLeftFill />
						</GamepadButton>
					</li>
					<li className="inline-grid col-start-3 col-end-4 row-start-2 row-end-3">
						<GamepadButton i={15}>
							<CaretRightFill />
						</GamepadButton>
					</li>
				</ul>
				<div className="col-start-4 col-end-5 row-start-3 row-end-4">
					<RightStick />
				</div>
			</div>
		</div>

		{isXboxElite && <ul className="grid grid-cols-2 grid-rows-2 w-24 gap-2">
			<li className="inline-grid col-start-2 col-end-3 row-start-1 row-end-2">
				<GamepadButton i={17}>P1</GamepadButton>
			</li>
			<li className="inline-grid col-start-2 col-end-3 row-start-2 row-end-3">
				<GamepadButton i={18}>P2</GamepadButton>
			</li>
			<li className="inline-grid col-start-1 col-end-2 row-start-1 row-end-2">
				<GamepadButton i={19}>P3</GamepadButton>
			</li>
			<li className="inline-grid col-start-1 col-end-2 row-start-2 row-end-2">
				<GamepadButton i={20}>P4</GamepadButton>
			</li>
		</ul>}

		<hr className="my-10 border-zinc-700" />

		<div>
			<h3 className="font-bold text-2xl mb-2">Caveats:</h3>
			<ol className="pl-6 list-decimal">
				<li>Back buttons on Xbox Elite Controller are not recognoized in Chromium based browsers.</li>
			</ol>
		</div>
	</div>
}

const GamepadButton: FC<{ i: number }> = ({ i, children }) => {
	const gamepad = useSelector((state: RootState) => state.controller)
	return <div className={clsx("rounded-lg p-2 whitespace-nowrap min-w-min inline-flex items-center justify-center flex-col gap-1 border", {
		'border-zinc-700': !gamepad.pressedButtons[i] && !gamepad.touchedButtons[i],
		'bg-green-400 border-green-400': gamepad.pressedButtons[i],
		'bg-blue-500 border-blue-500': gamepad.touchedButtons[i],
		'text-black': gamepad.pressedButtons[i] || gamepad.touchedButtons[i]
	})}>{children}</div>
}

const LeftTrigger = () => {
	const gamepad = useSelector((state: RootState) => state.controller)
	const value = typeof gamepad.axes[4] === 'undefined' ? gamepad.buttons[6] : (gamepad.axes[4] + 1) / 2
	return <div className={clsx("rounded-lg p-2 inline-flex flex-col gap-1 items-start")}>
		<ProgressBar max={1} value={value} ariaLabelledby="LT" isVertical={true} />
		<span id="LT">LT</span>
	</div>
}

const RightTrigger = () => {
	const gamepad = useSelector((state: RootState) => state.controller)
	const value = typeof gamepad.axes[5] === 'undefined' ? gamepad.buttons[7] : (gamepad.axes[5] + 1) / 2
	return <div className={clsx("rounded-lg p-2 inline-flex flex-col gap-1 items-start")}>
		<ProgressBar max={1} min={0} value={value} ariaLabelledby="RT" isVertical={true} />
		<span id="RT">RT</span>
	</div>
}

const LeftStick = () => {
	const gamepad = useSelector((state: RootState) => state.controller)
	const x = gamepad.axes[0]
	const y = gamepad.axes[1]
	return <div className="inline-flex flex-col">
		<CoordDiagram x={x} y={y} />
		<GamepadButton i={10}>LS</GamepadButton>
	</div>
}

const RightStick = () => {
	const gamepad = useSelector((state: RootState) => state.controller)
	const x = gamepad.axes[2]
	const y = gamepad.axes[3]
	return <div className="inline-flex flex-col">
		<CoordDiagram x={x} y={y} />
		<GamepadButton i={11}>RS</GamepadButton>
	</div>
}
