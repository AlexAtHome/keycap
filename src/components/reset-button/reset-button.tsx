import React from 'react'
import { ArrowClockwise } from 'react-bootstrap-icons'
import './reset-button.css'

interface IResetButtonProps {
	onClick?: () => void
}

export const ResetButton: React.FC<IResetButtonProps> = ({ onClick }) => {
	return (
		<button type='button' className='reset-button' onClick={() => onClick?.()}>
			<ArrowClockwise />
		</button>
	)
}
