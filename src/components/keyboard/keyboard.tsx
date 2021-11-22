import React from 'react'

import { Key } from '../key/key'
import './keyboard.css'
import { bottomRow, funcRow, middleRow, numbersRow, topRow } from './keys'

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
		if (!this.state.isShiftPressed && event.key === 'Shift') {
			this.setState({
				isShiftPressed: true,
			})
		}
	}

	private _keyUpListener(event: KeyboardEvent): void {
		if (this.state.isShiftPressed && event.key === 'Shift') {
			this.setState({
				isShiftPressed: false,
			})
		}
		console.log(event.code)
	}

	render() {
		return (
			<div className='Keyboard'>
				<div className='wrap'>
					<section className='keyset' id='functional'>
						<div className='row'>
							{/* <Key id='esc' mod='esc' label='Esc' /> */}
							{funcRow.map((key, i) => (
								<Key
									id={key.code.toLowerCase()}
									key={i}
									label={this.state.isShiftPressed ? key.shiftLabel ?? key.label : key.label}
									offsetRight={key.offsetRight}
								/>
							))}
						</div>
					</section>

					<section className='keyset' id='letters'>
						<div className='row'>
							{numbersRow.map((label, key) => (
								<Key
									id={label.toLowerCase()}
									key={key}
									label={this.state.isShiftPressed ? label.toUpperCase() : label}
								/>
							))}
							<Key id='backspace' mod='backspace' label='&larr; Back' />
						</div>
						<div className='row'>
							<Key id='tab' mod='tab' label='Tab&#8646;' />
							{topRow.map((label, key) => (
								<Key
									id={label.toLowerCase()}
									key={key}
									label={this.state.isShiftPressed ? label.toUpperCase() : label}
								/>
							))}
							<Key id='backslash' mod='slash' label='\' />
						</div>
						<div className='row'>
							<Key id='caps_lock' mod='caps' label='Caps Lock' />
							{middleRow.map((label, key) => (
								<Key
									id={label.toLowerCase()}
									key={key}
									label={this.state.isShiftPressed ? label.toUpperCase() : label}
								/>
							))}
							<Key id='enter' mod='enter' label='Enter &#8626;' />
						</div>
						<div className='row'>
							<Key id='shift_left' mod='shift_left' label='&#8657; Shift' />
							{bottomRow.map((label, key) => (
								<Key
									id={label.toLowerCase()}
									key={key}
									label={this.state.isShiftPressed ? label.toUpperCase() : label}
								/>
							))}
							<Key id='shift_right' mod='shift_right' label='&#8657; Shift' />
						</div>
						<div className='row'>
							<Key mod='bottom' id='ctrl' label='Ctrl' />
							<Key mod='bottom' id='win' label='Win' />
							<Key mod='bottom' id='alt' label='Alt' />
							<Key mod='space' id='space' />
							<Key mod='bottom' id='alt' label='Alt' />
							<Key mod='bottom' id='fn' label='Fn' />
							<Key mod='bottom' id='menu' label='Menu' />
							<Key mod='bottom' id='ctrl' label='Ctrl' />
						</div>
					</section>

					<section className='keyset' id='stuff1'>
						<div className='row'>
							<Key id='print_screen' label='PrtSc' />
							<Key id='pause' label='Pause' />
							<Key id='scroll_lock' label='ScrLk' />
						</div>
					</section>
					<section className='keyset' id='stuff2'>
						<div className='row'>
							<Key id='insert' label='Ins' />
							<Key id='home' label='Home' />
							<Key id='page_up' label='Page up' />
						</div>
						<div className='row'>
							<Key id='delete' label='Delete' />
							<Key id='end' label='End' />
							<Key id='page down' label='Page down' />
						</div>
						<div className='row' />
						<div className='row row_center'>
							<Key id='arrow_up' label='&uarr;' />
						</div>
						<div className='row'>
							<Key id='arrow_left' label='&larr;' />
							<Key id='arrow_down' label='&darr;' />
							<Key id='arrow_right' label='&rarr;' />
						</div>
					</section>
				</div>
			</div>
		)
	}
}
