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
		<div className="grid grid-cols-5 auto-rows-auto gap-4 w-12/12">
			<div className="col-start-1 col-span-1 row-start-1 row-span-1 inline-flex flex-col w-20 justify-self-start">
				<GamepadButton i={4}>LB</GamepadButton>
				<LeftTrigger />
			</div>
			<div className="col-start-5 col-span-1 row-start-1 row-span-1 inline-flex flex-col w-20 justify-self-end">
				<GamepadButton i={5}>RB</GamepadButton>
				<RightTrigger />
			</div>

			<div className="col-start-2 col-span-1 row-start-1 row-span-1 w-32">
				<LeftStick />
			</div>
			<div className="col-start-4 col-span-1 row-start-2 row-span-1">
				<RightStick />
			</div>

			<ul className="grid grid-cols-3 grid-rows-3 gap-2 col-start-3 col-span-1 w-40 justify-self-center row-start-1 row-span-1">
				<li className="inline-grid col-start-1 col-end-2 row-start-2 row-end-3">
					<GamepadButton isRound={true} i={8}>View</GamepadButton>
				</li>
				{!isXboxElite && <li className="inline-grid col-start-2 col-end-3 row-start-3 row-end-4">
					<GamepadButton isRound={true} i={17}>
						<Download />
					</GamepadButton>
				</li>}
				<li className="inline-grid col-start-3 col-end-4 row-start-2 row-end-3">
					<GamepadButton isRound={true} i={9}>
						<List />
					</GamepadButton>
				</li>
			</ul>
			<ul className="grid grid-cols-3 grid-rows-3 gap-2 col-start-4 col-span-1 row-start-1 row-span-1 w-40 justify-self-end">
				<li className="inline-grid col-start-2 col-end-3 row-start-1 row-end-2">
					<GamepadButton isRound={true} i={2}>
						<strong>Y</strong>
					</GamepadButton>
				</li>
				<li className="inline-grid col-start-2 col-span-1 row-start-3 row-span-1">
					<GamepadButton isRound={true} i={0}>
						<strong>A</strong>
					</GamepadButton>
				</li>
				<li className="inline-grid col-start-1 col-span-1 row-start-2 row-span-1">
					<GamepadButton isRound={true} i={3}>
						<strong>X</strong>
					</GamepadButton>
				</li>
				<li className="inline-grid col-start-3 col-span-1 row-start-2 row-span-1">
					<GamepadButton isRound={true} i={1}>
						<strong>B</strong>
					</GamepadButton>
				</li>
			</ul>

			<div className="flex justify-around gap-2 col-start-2 col-span-1 row-start-2 row-span-1">
				<ul className="grid grid-cols-3 flex-shrink-0 w-40">
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
				<li>The Share button on Xbox Series controllers is not recognized in Chromium based browsers, but recognized in Firefox.</li>
				<li>Back buttons on Xbox Elite Controllers are not recognoized in Chromium based browsers, but recognized in Firefox.</li>
				<li>To be able to test out the back buttons on a Xbox Elite Controller, switch off the profile.</li>
				<li>The Xbox button is not recognized by any browser, but pressing on it increases the timestamp value.</li>
			</ol>
		</div>
	</div>
}

const GamepadButton: FC<{ i: number, isRound?: boolean }> = ({ i, isRound = false, children }) => {
	const gamepad = useSelector((state: RootState) => state.controller)
	const cls = 'p-2 whitespace-nowrap min-w-min inline-flex items-center justify-center flex-col gap-1 border'
	return <div className={clsx(cls, {
		'border-zinc-700': !gamepad.pressedButtons[i] && !gamepad.touchedButtons[i],
		'bg-green-400 border-green-400': gamepad.pressedButtons[i],
		'bg-blue-500 border-blue-500': gamepad.touchedButtons[i],
		'text-black': gamepad.pressedButtons[i] || gamepad.touchedButtons[i],
		'rounded-full': isRound,
		'rounded-lg': !isRound
	})}>{children}</div>
}

const LeftTrigger = () => {
	const value = useSelector(({ controller }: RootState) => {
		return typeof controller.axes[4] === 'undefined' ? controller.buttons[6] : ((controller.axes[4] + 1) / 2)
	})
	return <div className={clsx("rounded-lg p-2 inline-flex flex-col gap-1 items-start")}>
		<ProgressBar max={1} min={0} value={value} ariaLabelledby="LT" isVertical={true} isReversed={true} />
	</div>
}

const RightTrigger = () => {
	const value = useSelector(({ controller }: RootState) => {
		return typeof controller.axes[5] === 'undefined' ? controller.buttons[7] : ((controller.axes[5] + 1) / 2)
	})
	return <div className={clsx("rounded-lg p-2 inline-flex flex-col gap-1 items-start")}>
		<ProgressBar max={1} min={0} value={value} ariaLabelledby="RT" isVertical={true} isReversed={true} />
	</div>
}

const LeftStick = () => {
	const gamepad = useSelector((state: RootState) => state.controller)
	const x = gamepad.axes[0]
	const y = gamepad.axes[1]
	return <div className="inline-flex flex-col">
		<CoordDiagram className={clsx({
			'outline outline-offset-4': gamepad.touchedButtons[10],
			'outline-green-400': gamepad.pressedButtons[10],
			'outline-blue-500': gamepad.touchedButtons[10] && !gamepad.pressedButtons[10],
		})} x={x} y={y} />
	</div>
}

const RightStick = () => {
	const gamepad = useSelector((state: RootState) => state.controller)
	const x = gamepad.axes[2]
	const y = gamepad.axes[3]
	return <div className="inline-flex flex-col">
		<CoordDiagram className={clsx({
			'outline outline-offset-4': gamepad.touchedButtons[11],
			'outline-green-400': gamepad.pressedButtons[11],
			'outline-blue-500': gamepad.touchedButtons[11] && !gamepad.pressedButtons[11],
		})} x={x} y={y} />
	</div>
}