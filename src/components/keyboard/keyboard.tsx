import { type FC, useEffect, useState } from 'react'
import { addPressedKey } from '../../reducers'
import { store } from '../../store'

import { KeyRow } from './key-row'
import './keyboard.css'
import { ansiKeyboard } from './keys.metadata'
import { addActiveKey, removeActiveKey } from '../../reducers/active-keys'
import { appendKeysHistory } from '../../reducers/keys-history'
import type { ISection } from './keys.interface'

export const Keyboard = () => {
	const [isShiftPressed, setIsShiftPressed] = useState(false);

	const keyUpListener = (event: KeyboardEvent) => {
		event.preventDefault()
		if (isShiftPressed && event.key === 'Shift') {
			setIsShiftPressed(false)
		}
		store.dispatch(removeActiveKey(event.code))
		store.dispatch(appendKeysHistory(event.code))
	}

	const keyDownListener = (event: KeyboardEvent) => {
		event.preventDefault()
		if (!isShiftPressed && event.key === 'Shift') {
			setIsShiftPressed(true)
		}
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
	}, [isShiftPressed])

	return <div className='Keyboard'>
		<div className='wrap'>
			{ansiKeyboard.map((section, i) => <Keyset section={section} isShiftPressed={isShiftPressed} key={i} />)}
		</div>
	</div>
}

type KeysetProps = { section: ISection, isShiftPressed: boolean };

const Keyset: FC<KeysetProps> = ({ section, isShiftPressed }: KeysetProps) => (
	<section className='keyset' id={section.id} style={{ marginBottom: section.marginBottom }}>
		{section.rows.map((row, j) => (
			<KeyRow row={row} key={j} isShiftPressed={isShiftPressed} />
		))}
	</section>
)
