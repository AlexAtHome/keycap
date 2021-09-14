import React, { useState } from 'react'
import useEventListener from "@use-it/event-listener";

import { Key } from '../key/key'
import './keyboard.css'
import { bottomRow, fRow, middleRow, numbersRow, topRow } from './keys'

export const Keyboard: React.FC = () => {
  const [isShiftPressed, setShiftPressed] = useState(false);
  useEventListener('keydown', (event: KeyboardEvent) => {
    setShiftPressed(event.key === 'Shift');
  })
  useEventListener('keyup', (event: KeyboardEvent) => {
    setShiftPressed(event.key === 'Shift' && isShiftPressed ? false : true);
  })

  return <div className="Keyboard">
    <div className="wrap">
      <section className="keyset" id="functional">
        <div className="row">
          <Key id="esc" mod="esc" label="Esc" />
          {fRow.map((label, key) => <Key id={label.toLowerCase()} mod="f" key={key} label={isShiftPressed ? label.toUpperCase() : label} />)}
        </div>
      </section>

      <section className="keyset" id="letters">
        <div className="row">
          {numbersRow.map((label, key) => <Key id={label.toLowerCase()} key={key} label={isShiftPressed ? label.toUpperCase() : label} />)}
          <Key id="backspace" mod="backspace" label="&larr; Back" />
        </div>
        <div className="row">
          <Key id="tab" mod="tab" label="Tab&#8646;" />
          {topRow.map((label, key) => <Key id={label.toLowerCase()} key={key} label={isShiftPressed ? label.toUpperCase() : label} />)}
          <Key id="backslash" mod="slash" label="\" />
        </div>
        <div className="row">
          <Key id="caps_lock" mod="caps" label="Caps Lock" />
          {middleRow.map((label, key) => <Key id={label.toLowerCase()} key={key} label={isShiftPressed ? label.toUpperCase() : label} />)}
          <Key id="enter" mod="enter" label="Enter &#8626;" />
        </div>
        <div className="row">
          <Key id="shift_left" mod="shift_left" label="&#8657; Shift" />
          {bottomRow.map((label, key) => <Key id={label.toLowerCase()} key={key} label={isShiftPressed ? label.toUpperCase() : label} />)}
          <Key id="shift_right" mod="shift_right" label="&#8657; Shift" />
        </div>
        <div className="row">
          <Key mod="bottom" id="ctrl" label="Ctrl" />
          <Key mod="bottom" id="win" label="Win" />
          <Key mod="bottom" id="alt" label="Alt" />
          <Key mod="space" id="space" />
          <Key mod="bottom" id="alt" label="Alt" />
          <Key mod="bottom" id="fn" label="Fn" />
          <Key mod="bottom" id="menu" label="Menu" />
          <Key mod="bottom" id="ctrl" label="Ctrl" />
        </div>
      </section>

      <section className="keyset" id="stuff1">
        <div className="row">
          <Key id="print_screen" label="PrtSc" />
          <Key id="pause" label="Pause" />
          <Key id="scroll_lock" label="ScrLk" />
        </div>
      </section>
      <section className="keyset" id="stuff2">
        <div className="row">
          <Key id="insert" label="Ins" />
          <Key id="home" label="Home" />
          <Key id="page_up" label="Page up" />
        </div>
        <div className="row">
          <Key id="delete" label="Delete" />
          <Key id="end" label="End" />
          <Key id="page down" label="Page down" />
        </div>
        <div className="row" />
        <div className="row row_center">
          <Key id="arrow_up" label="&uarr;" />
        </div>
        <div className="row">
          <Key id="arrow_left" label="&larr;" />
          <Key id="arrow_down" label="&darr;" />
          <Key id="arrow_right" label="&rarr;" />
        </div>
      </section>
    </div>
  </div>
}