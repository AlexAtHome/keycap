import React from 'react'
import clsx from 'clsx'
import { Key } from '../key/key'
import { Row } from './keys.interface'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'

interface IKeyRowProps {
	row: Row
	isShiftPressed: boolean
}

export const KeyRow: React.FC<IKeyRowProps> = ({ row, isShiftPressed }) => {
	const isDto = !Array.isArray(row)
	const keys = isDto ? row.keys : row
	const alignClasses = {
		row_left: isDto && row.align === 'left',
		row_center: isDto && row.align === 'center',
		row_right: isDto && row.align === 'right',
	}
	const [pressedKeys, activeKeys] = useSelector((state: RootState) => [state.pressedKeys, state.activeKeys])

	return (
		<div className={clsx(['row', alignClasses])} id={isDto ? row?.id : undefined}>
			{keys.map((key, i) => (
				<Key
					id={key.code.toLowerCase()}
					key={i}
					isLabelHTML={key.isLabelHTML}
					label={isShiftPressed ? key.shiftLabel ?? key.label : key.label}
					offsetRight={key.offsetRight}
					widthRatio={key.widthRatio}
					heightRatio={key.heightRatio}
					isPressed={pressedKeys.includes(key.code)}
					isActive={activeKeys.includes(key.code)}
				/>
			))}
		</div>
	)
}
