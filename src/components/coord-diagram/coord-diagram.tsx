import clsx from "clsx"
import type { FC } from "react"

export const CoordDiagram: FC<{ x: number, y: number, className?: string }> = ({ x, y, className }) => {
	const horizontal = x * 50 + 50
	const vertical = y * 50 + 50
	return <div className="flex flex-col p-2">
		<div className={clsx("rounded-full w-24 h-24 bg-zinc-700 relative", className)}>
			<div className="rounded-full w-4 h-4 bg-green-400 absolute left-[50%] right-[50%]" style={{
				width: '16px',
				height: '16px',
				left: `calc(${horizontal}% - 8px)`,
				top: `calc(${vertical}% - 8px)`
			}}></div>
		</div>
	</div>
}