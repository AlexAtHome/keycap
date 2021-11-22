export interface IKey {
	code: string
	label: string
	shiftLabel?: string
	widthRatio?: number
	offsetRight?: number
}

const convertStringToKeys = (letters: string): IKey[] => letters.split('').map(char => ({
	code: `Key${char}`,
	label: char.toLowerCase(),
	shiftLabel: char
} as IKey))

export const funcRow: IKey[] = [
	{
		code: 'Esc',
		label: 'Esc',
		offsetRight: 1.05,
	},
	...Array(12).fill('').map((_, index) => ({
		code: `F${index + 1}`,
		label: `F${index + 1}`,
		offsetRight: [3,7].includes(index) ? .5 : 0,
	}))
]

export const numbers: IKey[] = [
	{
		code: 'Backquote',
		label: "` ~",
	},
	{
		code: 'Digit1',
		label: '1 !',
	},
	{
		code: 'Digit2',
		label: '2 @',
	},
	{
		code: 'Digit3',
		label: '3 #',
	},
	{
		code: 'Digit4',
		label: '4 $',
	},
	{
		code: 'Digit5',
		label: '5 %',
	},
	{
		code: 'Digit6',
		label: '6 ^',
	},
	{
		code: 'Digit7',
		label: '7 &',
	},
	{
		code: 'Digit8',
		label: '8 *',
	},
	{
		code: 'Digit9',
		label: '9 (',
	},
	{
		code: 'Digit0',
		label: '0 )',
	},
	{
		code: 'Minus',
		label: '- _'
	},
	{
		code: 'Equal',
		label: '=+'
	},
	{
		code: 'Backspace',
		label: `&larr; Back`,
		widthRatio: 2
	}
]

export const topLetters: IKey[] = [
	{
		code: 'Tab',
		label: 'Tab&#8646;',
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
		widthRatio: 2.38
	}
]

export const bottomLetters: IKey[] = [
	{
		code: 'ShiftLeft',
		label: '&#8657; Shift',
		widthRatio: 2.13
	},
	...convertStringToKeys('ZXCVBNM'),
	{
		code: 'Comma',
		label: ',',
		shiftLabel: '<'
	},
	{
		code: 'Period.',
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
		code: 'CtrlRight',
		label: 'Ctrl',
		widthRatio: 1.2
	},
]

export const ansiSet: IKey[][] = [
	numbers,
	topLetters,
	middleLetters,
	bottomLetters,
	spaceRow
]
