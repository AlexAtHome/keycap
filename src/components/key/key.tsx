import clsx from 'clsx'
import React from 'react'
import parse from 'html-react-parser'
import './key.css'


interface IProps {
	label?: string
	id: string
	mod?: string
	offsetRight?: number | null
	widthRatio?: number | null
	heightRatio?: number | null
	isPressed?: boolean
	isActive?: boolean
	isLabelHTML?: boolean
	className?: string
}

export const Key: React.FC<IProps> = ({ label = '', id, offsetRight = null, widthRatio = null, heightRatio = null, isPressed = false, isLabelHTML = false, isActive = false, className }) => {
	const styles = {
		'--key-offset-ratio': offsetRight,
		'--key-width-ratio': widthRatio,
		'--key-height-ratio': heightRatio,
	} as React.CSSProperties
	return <div id={`key_${id}`} style={styles} className={clsx(`key`, { 'key_pressed': isPressed, 'key_active': isActive }, className)}>
		{isLabelHTML ? parse(label) : label}
	</div>
}
