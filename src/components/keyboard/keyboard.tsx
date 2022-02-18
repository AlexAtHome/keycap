import React from 'react'
import { addPressedKey, resetPressedKeys } from '../../reducers'
import { store } from '../../store'

import { KeyRow } from './key-row'
import './keyboard.css'
import { ansiKeyboard } from './keys.metadata'
import { ResetButton } from '../reset-button/reset-button'
import { addActiveKey, removeActiveKey } from '../../reducers/active-keys'
import { appendKeysHistory } from '../../reducers/keys-history'

interface IKeyboardState {
  isShiftPressed: boolean
  canReset: boolean
}

export class Keyboard extends React.Component<unknown, IKeyboardState> {
  constructor(props: unknown) {
    super(props)
    this.state = {
      isShiftPressed: false,
      canReset: false
    }
  }

  componentDidMount(): void {
    window.addEventListener('keydown', this._keyDownListener.bind(this))
    window.addEventListener('keyup', this._keyUpListener.bind(this))
    store.subscribe(() => {
      const canReset = store.getState().pressedKeys.length > 0;
      if (canReset && !this.state.canReset) {
        this.setState({
          canReset: true
        })
      }
      if (!canReset && this.state.canReset) {
        this.setState({
          canReset: false
        })
      }
    })
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
    store.dispatch(addPressedKey(event.code))
    store.dispatch(addActiveKey(event.code))
  }

  private _keyUpListener(event: KeyboardEvent): void {
    if (this.state.isShiftPressed && event.key === 'Shift') {
      this.setState({
        isShiftPressed: false,
      })
    }
    store.dispatch(removeActiveKey(event.code))
    store.dispatch(appendKeysHistory(event.code))
  }

  private _reset(): void {
    store.dispatch(resetPressedKeys())
  }

  render(): JSX.Element {
    return (
      <div className='Keyboard'>
        <ResetButton onClick={() => this._reset()} />
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
