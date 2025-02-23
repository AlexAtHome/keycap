import clsx from "clsx";
import { FC } from "react"

type ButtonProps = {
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	disabled?: boolean
	className?: string;
}

export const Button: FC<ButtonProps> = ({ onClick, disabled, className, children }) => {
	return (
		<button type='button' className={clsx('inline-flex flex-row gap-4 items-center justify-items-center dark:bg-zinc-700 dark:hover:bg-zinc-600 bg-zinc-200 hover:bg-zinc-300 py-1 px-4 rounded-lg dark:text-gray-300 text-gray-800 leading-8 text-center cursor-pointer disabled:cursor-not-allowed disabled:pointer-events-none dark:disabled:bg-zinc-900 disabled:bg-zinc-50 disabled:text-zinc-300 dark:disabled:text-zinc-600', className)} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	)
}
