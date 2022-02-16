import { convertStringToKeys, IKey, ISection } from "./keys.interface"

const fKeycaps: [string, IKey][] = Array(12).fill('').map((_, index) => [`F${index+1}`, {
		code: `F${index + 1}`,
		label: `F${index + 1}`,
		offsetRight: [3,7].includes(index) ? .5 : 0,
	} as IKey])

export const keycapsMap = new Map<string, IKey>([
	['Escape', {
		code: 'Escape',
		label: 'Esc',
		offsetRight: 1.05,
	}],
	...fKeycaps,
	['Backquote',{
		code: 'Backquote',
		label: "` ~",
	}],
	['Digit1',{
		code: 'Digit1',
		label: '1 !',
	}],
	['Digit2', {
		code: 'Digit2',
		label: '2 @',
	}],
	['Digit3',{
		code: 'Digit3',
		label: '3 #',
	}],
	['Digit4',{
		code: 'Digit4',
		label: '4 $',
	}],
	['Digit5',{
		code: 'Digit5',
		label: '5 %',
	}],
	['Digit6',{
		code: 'Digit6',
		label: '6 ^',
	}],
	['Digit7',{
		code: 'Digit7',
		label: '7 &',
	}],
	['Digit8',{
		code: 'Digit8',
		label: '8 *',
	}],
	['Digit9',{
		code: 'Digit9',
		label: '9 (',
	}],
	['Digit0',{
		code: 'Digit0',
		label: '0 )',
	}],
	['Minus',{
		code: 'Minus',
		label: '- _'
	}],
	['Equal',{
		code: 'Equal',
		label: '=+'
	}],
	['Backspace',{
		code: 'Backspace',
		label: `&larr; Back`,
		isLabelHTML: true,
		widthRatio: 2
	}]
])

export const funcRow: IKey[] = [
	keycapsMap.get('Escape') as IKey,
	...[1,2,3,4,5,6,7,8,9,10,11,12].map<IKey>(key => keycapsMap.get(`F${key}`) as IKey)
]

export const numbers: IKey[] = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'].map(code => keycapsMap.get(code) as IKey)

export const topLetters: IKey[] = [
	{
		code: 'Tab',
		label: 'Tab&#8646;',
		isLabelHTML: true,
		widthRatio: 1.43,
	},
	...convertStringToKeys('QWERTYUIOP'),
	{
		code: 'BracketLeft',
		label: '[',
		shiftLabel: '{'
	},
	{
		code: 'BracketRight',
		label: ']',
		shiftLabel: '}'
	},
	{
		code: 'Backslash',
		label: '\\',
		shiftLabel: '|',
		widthRatio: 1.58,
	}
]

export const middleLetters: IKey[] = [
	{
		code: 'CapsLock',
		label: 'Caps Lock',
		widthRatio: 1.65
	},
	...convertStringToKeys('ASDFGHJKL'),
	{
		code: 'Semicolon',
		label: ';',
		shiftLabel: ':'
	},
	{
		code: 'Quote',
		label: `'`,
		shiftLabel: `"`
	},
	{
		code: 'Enter',
		label: 'Enter &#8626;',
		isLabelHTML: true,
		widthRatio: 2.38
	}
]

export const bottomLetters: IKey[] = [
	{
		code: 'ShiftLeft',
		label: '&#8657; Shift',
		isLabelHTML: true,
		widthRatio: 2.13
	},
	...convertStringToKeys('ZXCVBNM'),
	{
		code: 'Comma',
		label: ',',
		shiftLabel: '<'
	},
	{
		code: 'Period',
		label: '.',
		shiftLabel: '>'
	},
	{
		code: 'Slash',
		label: '/',
		shiftLabel: '?'
	},
	{
		code: 'ShiftRight',
		label: '&#8657; Shift',
		isLabelHTML: true,
		widthRatio: 2.92,
	}
]

export const spaceRow: IKey[] = [
	{
		code: 'ControlLeft',
		label: 'Ctrl',
		widthRatio: 1.2
	},
	{
		code: 'Win',
		label: 'Super',
		widthRatio: 1.2
	},
	{
		code: 'AltLeft',
		label: 'Alt',
		widthRatio: 1.2
	},
	{
		code: 'Space',
		label: '',
		widthRatio: 6.8
	},
	{
		code: 'AltRight',
		label: 'Alt',
		widthRatio: 1.2
	},
	{
		code: 'Fn',
		label: 'Fn',
		widthRatio: 1.2
	},
	{
		code: 'ContextMenu',
		label: 'Menu',
		widthRatio: 1.2
	},
	{
		code: 'ControlRight',
		label: 'Ctrl',
		widthRatio: 1.2
	},
]

export const controls: IKey[] = [
	{
		code: 'PrintScreen',
		label: "Print Screen"
	},
	{
		code: 'ScrollLock',
		label: 'Scroll Lock',
	},
	{
		code: 'Pause',
		label: 'Pause Break'
	}
]

export const ansiKeyboard: ISection[] = [
	{
		id: 'functional',
		rows: [
			{
				keys: funcRow,
			}
		]
	},
	{
		id: 'letters',
		rows: [
			numbers,
			topLetters,
			middleLetters,
			bottomLetters,
			spaceRow
		]
	},
	{
		id: 'control1',
		rows: [controls]
	},
	{
		id: 'control2',
		rows: [
			{
				keys: [
					{
						code: 'Insert',
						label: 'Insert'
					},
					{
						code: 'Home',
						label: 'Home'
					},
					{
						code: 'PageUp',
						label: 'Page Up',
					}
				]
			},
			{
				keys: [
					{
						code: 'Delete',
						label: 'Delete'
					},
					{
						code: 'End',
						label: 'End'
					},
					{
						code: 'PageDown',
						label: 'Page Down'
					}
				]
			},
			{
				keys: []
			},
			{
				align: 'center',
				keys: [
					{
						code: 'ArrowUp',
						label: '&uarr;',
						isLabelHTML: true
					}
				]
			},
			{
				keys: [
					{
						code: 'ArrowLeft',
						label: '&larr;',
						isLabelHTML: true
					},
					{
						code: 'ArrowDown',
						label: '&darr;',
						isLabelHTML: true
					},
					{
						code: 'ArrowRight',
						label: '&rarr;',
						isLabelHTML: true
					},
				]
			}
		]
	},
	{
		id: 'numpad',
		rows: [
			[
				{
					code: 'NumLock',
					label: 'Num Lock'
				},
				{
					code: 'NumpadDivide',
					label: '/'
				},
				{
					code: 'NumpadMultiply',
					label: '*'
				},
				{
					code: 'NumpadSubtract',
					label: '-'
				},
			],
			[
				...[7,8,9].map(key => ({
					code: `Numpad${key}`,
					label: `${key}`
				} as IKey)),
				{
					code: 'NumpadAdd',
					label: '+',
					heightRatio: 2.03
				}
			],
			[4,5,6].map(key => ({
				code: `Numpad${key}`,
				label: `${key}`
			} as IKey)),
			[
					...[1,2,3].map(key => ({
					code: `Numpad${key}`,
					label: `${key}`
				} as IKey)),
				{
					code: 'NumpadEnter',
					label: '&#8626;',
					isLabelHTML: true,
					heightRatio: 2.03
				}
			],
			[
				{
					code: 'Numpad0',
					label: '0',
					widthRatio: 2.03
				},
				{
					code: 'NumpadDecimal',
					label: '.'
				}
			]
		]
	}
]
