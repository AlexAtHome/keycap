import { useSelector } from "react-redux"
import type { RootState } from "../../store"
import clsx from "clsx"
import { ProgressBar } from "../progress-bar/progress-bar"

export const GenericGamepadLayout = () => {
	return <div className="flex flex-col gap-4">
		<GenericButtonLayout />
		<GenericAxisLayout />
		<div>
			<h3 className="font-bold text-2xl mb-2">Button press history</h3>
			<GenericButtonHistory />
		</div>
	</div>
}

export const GenericButtonLayout = () => {
	const gamepad = useSelector((state: RootState) => state.controller)
	return <ul className="flex gap-2 flex-wrap">
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
}

export const GenericAxisLayout = () => {
	const gamepad = useSelector((state: RootState) => state.controller)
	return <ul className="flex gap-4 flex-wrap">
		{gamepad.axes.map((axis, i) => <li className="inline-flex" key={i}>
			<div className={clsx("rounded-lg p-2 inline-flex flex-col gap-1 items-start")}>
				<span id={`axis-${i}`}>Axis {i}</span>
				<ProgressBar min={-1} max={1} value={axis} ariaLabelledby={`axis-${i}`} />
				<small className="text-xs" role="presentation">{axis}</small>
			</div>
		</li>)}
	</ul>
}

export const GenericButtonHistory = () => {
	const history = useSelector((state: RootState) => state.controllerHistory)
	return <ul className="flex gap-4 flex-wrap">
		{history.map((button, i) => <li key={i} className="border rounded-sm px-4 py-1">Button {button}</li>)}
	</ul>
}
