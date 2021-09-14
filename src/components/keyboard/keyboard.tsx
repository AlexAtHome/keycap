import React from 'react'
import './keyboard.css'

const fRow = Array(12).fill('').map((_, index) => `F${index + 1}`)

const numbersRow = [
  '` ~',
  '1 !',
  '2 @',
  '3 #',
  '4 $',
  '5 %',
  '6 ^',
  '7 &',
  '8 *',
  '9 (',
  '0 )',
  '- _',
  '=+',
];

const topRow = [
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  '[',
  ']',
]

const middleRow = [
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  ';',
  '\'',
]

const bottomRow = [
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  ',',
  '.',
  '/',
]

export const Keyboard: React.FC = () => <div className="Keyboard">
  <div className="wrap">
    <section className="keyset" id="functional">
      <div className="row">
        <div className="key key_esc">Esc</div>
        {fRow.map((label, key) => <div key={key} className="key key_f">{label}</div>)}
      </div>
    </section>

    <section className="keyset" id="letters">
      <div className="row">
        {numbersRow.map((label, key) => <div key={key} className="key">{label}</div>)}
        <div className="key key_backspace key_label_small">&larr; Back</div>
      </div>
      <div className="row">
        <div className="key key_tab key_label_small">Tab&#8646;</div>
        {topRow.map((label, key) => <div key={key} className="key">{label}</div>)}
        <div className="key key_slash key_label_small">\</div>
      </div>
      <div className="row">
        <div className="key key_caps key_label_small">Caps Lock</div>
        {middleRow.map((label, key) => <div key={key} className="key">{label}</div>)}
        <div className="key key_enter key_label_small">Enter &#8626;</div>
      </div>
      <div className="row">
        <div className="key key_shift_left key_label_small">&#8657; Shift</div>
        {bottomRow.map((label, key) => <div key={key} className="key">{label}</div>)}
        <div className="key key_shift_right key_label_small">&#8657; Shift</div>
      </div>
      <div className="row">
        <div className="key key_bottom">Ctrl</div>
        <div className="key key_bottom">Win</div>
        <div className="key key_bottom">Alt</div>
        <div className="key key_space"></div>
        <div className="key key_bottom">Alt</div>
        <div className="key key_bottom">Fn</div>
        <div className="key key_bottom">Menu</div>
        <div className="key key_bottom">Ctrl</div>
      </div>
    </section>

    <section className="keyset" id="stuff1">
      <div className="row">
        <div className="key key_label_small">PrtSc</div>
        <div className="key key_label_small">Pause</div>
        <div className="key key_label_small">ScrLk</div>
      </div>
    </section>
    <section className="keyset" id="stuff2">
      <div className="row">
        <div className="key key_label_small">Ins</div>
        <div className="key key_label_small">Home</div>
        <div className="key key_label_small">Page up</div>
      </div>
      <div className="row">
        <div className="key key_label_small">Delete</div>
        <div className="key key_label_small">End</div>
        <div className="key key_label_small">Page down</div>
      </div>
      <div className="row" />
      <div className="row row_center">
        <div className="key">&uarr;</div>
      </div>
      <div className="row">
        <div className="key">&larr;</div>
        <div className="key">&darr;</div>
        <div className="key">&rarr;</div>
      </div>
    </section>
  </div>
</div>