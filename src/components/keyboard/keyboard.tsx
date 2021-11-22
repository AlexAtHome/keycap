import React from 'react'

import { Key } from '../key/key'
import './keyboard.css'
import { ansiSet, funcRow } from './keys'

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
		console.log(event.code)
	}

	private _keyUpListener(event: KeyboardEvent): void {
		if (this.state.isShiftPressed && event.key === 'Shift') {
			this.setState({
				isShiftPressed: false,
			})
		}
	}

	render() {
		return (
			<div className='Keyboard'>
				<div className='wrap'>
					<section className='keyset' id='functional'>
						<div className='row'>
							{funcRow.map((key, i) => (
								<Key
									id={key.code.toLowerCase()}
									key={i}
									label={this.state.isShiftPressed ? key.shiftLabel ?? key.label : key.label}
									offsetRight={key.offsetRight}
									widthRatio={key.widthRatio}
								/>
							))}
						</div>
					</section>

					<section className='keyset' id='letters'>
						{ansiSet.map((row, key) => (
							<div className='row' key={key}>
								{row.map((key, i) => (
									<Key
										id={key.code}
										key={i}
										label={this.state.isShiftPressed ? key.shiftLabel ?? key.label : key.label}
										offsetRight={key.offsetRight}
										widthRatio={key.widthRatio}
									/>
								))}
							</div>
						))}
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
