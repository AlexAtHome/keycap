import type { ChangeEventHandler, FC } from "react";
import { ToggleOff, ToggleOn } from "react-bootstrap-icons";

interface ToggleProps {
	value?: boolean
	onToggle?: ChangeEventHandler<HTMLInputElement>
}

export const Toggle: FC<ToggleProps> = ({ value = false, onToggle = () => { }, children }) => {
	return <label className="inline-flex items-center gap-4" >
		<input type="checkbox" className="sr-only" onChange={onToggle} />
		{value ? <ToggleOn size={32} /> : <ToggleOff size={32} />}
		<span>{children}</span>
	</label>
}