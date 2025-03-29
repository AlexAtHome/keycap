import type { ChangeEventHandler, FC, PropsWithChildren } from "react";
import { ToggleOff, ToggleOn } from "react-bootstrap-icons";

type ToggleProps = PropsWithChildren<{
	value?: boolean
	onToggle?: ChangeEventHandler<HTMLInputElement>
}>

export const Toggle: FC<ToggleProps> = ({ value = false, onToggle = () => { }, children }) => {
	return <label className="inline-flex items-center gap-4 dark:text-white" >
		<input type="checkbox" className="sr-only" onChange={onToggle} />
		{value ? <ToggleOn size={32} className="dark:fill-white" /> : <ToggleOff size={32} className="dark:fill-white" />}
		<span>{children}</span>
	</label>
}