import React from 'react'
import { addPressedKey } from '../../reducers'
import { store } from '../../store'

import { KeyRow } from './key-row'
import './keyboard.css'
import { ansiKeyboard } from './keys.metadata'

interface IKeyboardState {
	isShiftPressed: boolean
}

export class Keyboard extends React.Component<unknown, IKeyboardState> {
	constructor(props: unknown) {
		super(props)
		this.state = {
			isShiftPressed: false,
		}
	}

	componentDidMount(): void {
		window.addEventListener('keydown', this._keyDownListener.bind(this))
		window.addEventListener('keyup', this._keyUpListener.bind(this))
	}

	componentWillUnmount(): void {
		window.removeEventListener('keydown', this._keyDownListener.bind(this))
		window.removeEventListener('keyup', this._keyUpListener.bind(this))
	}

	private _keyDownListener(event: KeyboardEvent): void {
		event.preventDefault()
		if (!this.state.isShiftPressed && event.key === 'Shift') {
			this.setState({
				isShiftPressed: true,
			})
		}
		console.log(event.code);
		store.dispatch(addPressedKey(event.code))
	}

	private _keyUpListener(event: KeyboardEvent): void {
		if (this.state.isShiftPressed && event.key === 'Shift') {
			this.setState({
				isShiftPressed: false,
			})
		}
	}

	render(): JSX.Element {
		return (
			<div className='Keyboard'>
				<div className='wrap'>
					{ansiKeyboard.map((section, i) =>
						<section className='keyset' key={i} id={section.id} style={{ marginBottom: section.marginBottom }}>
							{section.rows.map((row, j) =>
								<KeyRow row={row} key={j} isShiftPressed={this.state.isShiftPressed} />
							)}
						</section>
					)}
				</div>
			</div>
		)
	}
}
function dispatch(arg0: { payload: string; type: "add" }) {
	throw new Error('Function not implemented.')
}

