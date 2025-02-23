import { FC } from "react";

type ProgressBarProps = {
	min?: number;
	max?: number;
	value: number;
	ariaLabel?: string;
	ariaLabelledby?: string;
}

export const ProgressBar: FC<ProgressBarProps> = ({ value, min = 0, max = 100, ariaLabel, ariaLabelledby }) => {
	const amplitude = Math.abs(min) + Math.abs(max)
	const centerMarkPlacement = min < 0 ? Math.abs(min / amplitude) * 100 : 0
	const left = value >= 0 ? centerMarkPlacement : (Math.abs(min) - Math.abs(value)) / amplitude * 100
	const right = value <= 0 ? 100 - centerMarkPlacement : (Math.abs(max) - Math.abs(value)) / amplitude * 100
	return <div role="progressbar" aria-valuenow={value} aria-valuemin={min} aria-valuemax={max} className="h-4 w-full bg-zinc-700 relative min-w-40" aria-labelledby={ariaLabelledby} aria-label={ariaLabel}>
		<span role="presentation" className="top-0 bottom-0 absolute inline-flex bg-green-400" style={{ left: `${left}%`, right: `${right}%` }}></span>
	</div>
}
