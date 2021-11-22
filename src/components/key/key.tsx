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
	isPressed?: boolean
	isLabelHTML?: boolean
}

export const Key: React.FC<IProps> = ({ label = '', id, offsetRight = null, widthRatio = null, isPressed = false, isLabelHTML = false }) => {
	const styles = {
		'--key-offset-ratio': offsetRight,
		'--key-width-ratio': widthRatio
	} as React.CSSProperties
	return <div id={`key_${id}`} style={styles} className={clsx(`key`, { 'key_pressed': isPressed })}>
		{isLabelHTML ? parse(label) : label}
	</div>
}
