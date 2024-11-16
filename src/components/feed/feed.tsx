import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { Key } from '../key/key'

export const KeyFeed: React.FC = () => {
	// TODO: There's gotta be another store for *all* key presses
	const keysHistory = useSelector((state: RootState) => state.keysHistory)

	return (
		<section className='flex gap-4 flex-row flex-wrap mt-8 mb-0'>
			{keysHistory.map((key, index) => {
				return (
					<Key
						className='flex-shrink'
						id={key.code}
						label={key.label}
						heightRatio={key.heightRatio}
						isLabelHTML={key.isLabelHTML}
						widthRatio={key.widthRatio}
						key={index}
					/>
				)
			})}
		</section>
	)
}
