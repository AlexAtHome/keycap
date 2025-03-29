import clsx from "clsx";
import { FC } from "react";

type ProgressBarProps = {
	min?: number;
	max?: number;
	value: number;
	isVertical?: boolean;
	isReversed?: boolean;
	ariaLabel?: string;
	ariaLabelledby?: string;
}

export const ProgressBar: FC<ProgressBarProps> = ({ value, min = 0, max = 100, ariaLabel, ariaLabelledby, isVertical, isReversed }) => {
	const amplitude = Math.abs(min) + Math.abs(max)
	const centerMarkPlacement = min < 0 ? Math.abs(min / amplitude) * 100 : 0
	const start = value >= 0 ? centerMarkPlacement : (Math.abs(min) - Math.abs(value)) / amplitude * 100
	const end = value <= 0 ? 100 - centerMarkPlacement : (Math.abs(max) - Math.abs(value)) / amplitude * 100
	const verticalStyle = isReversed ? { bottom: `${end}%`, top: `${start}%` } : { bottom: `${start}%`, top: `${end}%` };
	const horizontalStyle = isReversed ? { left: `${start}%`, right: `${end}%` } : { left: `${start}%`, right: `${end}%` };
	return <div
		role="progressbar"
		aria-valuenow={value}
		aria-valuemin={min}
		aria-valuemax={max}
		className={clsx("bg-zinc-700 relative", {
			"h-4 min-w-40 w-full": !isVertical,
			"w-4 min-h-20": isVertical
		})}
		aria-labelledby={ariaLabelledby}
		aria-label={ariaLabel}
	>
		<span
			role="presentation"
			className={clsx("absolute inline-flex bg-green-400", {
				'top-0 bottom-0': !isVertical,
				'left-0 right-0': isVertical
			})}
			style={isVertical ? verticalStyle : horizontalStyle}
		></span>
	</div>
}