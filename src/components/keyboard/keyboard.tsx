import React, { useEffect, useState } from 'react'
import { addPressedKey, resetPressedKeys } from '../../reducers'
import { store } from '../../store'

import { KeyRow } from './key-row'
import './keyboard.css'
import { ansiKeyboard } from './keys.metadata'
import { ResetButton } from '../reset-button/reset-button'
import { addActiveKey, removeActiveKey } from '../../reducers/active-keys'
import { appendKeysHistory } from '../../reducers/keys-history'

export const Keyboard = () => {
	const [isShiftPressed, setIsShiftPressed] = useState(false);
	const keyUpListener = (event: KeyboardEvent) => {
		!isShiftPressed && setIsShiftPressed(event.key === 'Shift')
		store.dispatch(removeActiveKey(event.code))
		store.dispatch(appendKeysHistory(event.code))
	}
	const keyDownListener = (event: KeyboardEvent) => {
		isShiftPressed && setIsShiftPressed(event.key === 'Shift')
		store.dispatch(addPressedKey(event.code))
		store.dispatch(addActiveKey(event.code))
	}
	useEffect(() => {
		window.addEventListener('keyup', keyUpListener)
		window.addEventListener('keydown', keyDownListener)
		return () => {
			window.removeEventListener('keyup', keyUpListener)
			window.removeEventListener('keydown', keyDownListener)
		}
	}, [])

	return <div className='Keyboard'>
		<ResetButton onClick={() => store.dispatch(resetPressedKeys())} />
		<div className='wrap'>
			{ansiKeyboard.map((section, i) => (
				<section className='keyset' key={i} id={section.id} style={{ marginBottom: section.marginBottom }}>
					{section.rows.map((row, j) => (
						<KeyRow row={row} key={j} isShiftPressed={isShiftPressed} />
					))}
				</section>
			))}
		</div>
	</div>
}

