import clsx from 'clsx'
import React from 'react'
import parse from 'html-react-parser'
import type { IKey } from '../keyboard/keys.interface'

import './key.css'
import { Fingerprint } from 'react-bootstrap-icons'

interface IProps extends IKey {
	id: string
	mod?: string
	isPressed?: boolean
	isActive?: boolean
	isLabelHTML?: boolean
	className?: string
}

export const Key: React.FC<IProps> = ({
	label = '',
	id,
	offsetRight = null,
	widthRatio = null,
	heightRatio = null,
	isPressed = false,
	isLabelHTML = false,
	isActive = false,
	align = 'right',
	upperLabel = '',
	className,
}) => {
	const styles = {
		'--key-offset-ratio': offsetRight,
		'--key-width-ratio': widthRatio,
		'--key-height-ratio': heightRatio,
	} as React.CSSProperties
	return (
		<div
			id={`key_${id}`}
			style={styles}
			className={clsx(`key`, {
				key_pressed: isPressed,
				key_active: isActive,
				'items-start': align === 'left',
				'items-center': align === 'center',
				'items-end': align === 'right',
			}, className)}
		>
			{id === 'fingerprint' && <Fingerprint width="80%" height="80%" className="self-center justify-self-center m-auto text-gray-600" />}
			{upperLabel && <span className="inline-flex">{upperLabel}</span>}
			{label && <span className="inline-flex">{isLabelHTML ? parse(label) : label}</span>}
		</div>
	)
}
