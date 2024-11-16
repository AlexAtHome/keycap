import { IKey, convertStringToKeys } from './keys.interface'

const fKeycaps: [string, IKey][] = Array(12)
	.fill('')
	.map((_, index) => [
		`F${index + 1}`,
		{
			code: `F${index + 1}`,
			label: `F${index + 1}`,
			offsetRight: [3, 7].includes(index) ? 0.5 : 0,
		} as IKey,
	])

export const keycapsMap = new Map<string, IKey>([
	[
		'Escape',
		{
			code: 'Escape',
			label: 'Esc',
			offsetRight: 1.05,
		},
	],
	...fKeycaps,
	[
		'Backquote',
		{
			code: 'Backquote',
			label: '` ~',
		},
	],
	[
		'Digit1',
		{
			code: 'Digit1',
			label: '1 !',
		},
	],
	[
		'Digit2',
		{
			code: 'Digit2',
			label: '2 @',
		},
	],
	[
		'Digit3',
		{
			code: 'Digit3',
			label: '3 #',
		},
	],
	[
		'Digit4',
		{
			code: 'Digit4',
			label: '4 $',
		},
	],
	[
		'Digit5',
		{
			code: 'Digit5',
			label: '5 %',
		},
	],
	[
		'Digit6',
		{
			code: 'Digit6',
			label: '6 ^',
		},
	],
	[
		'Digit7',
		{
			code: 'Digit7',
			label: '7 &',
		},
	],
	[
		'Digit8',
		{
			code: 'Digit8',
			label: '8 *',
		},
	],
	[
		'Digit9',
		{
			code: 'Digit9',
			label: '9 (',
		},
	],
	[
		'Digit0',
		{
			code: 'Digit0',
			label: '0 )',
		},
	],
	[
		'Minus',
		{
			code: 'Minus',
			label: '- _',
		},
	],
	[
		'Equal',
		{
			code: 'Equal',
			label: '=+',
		},
	],
	[
		'Backspace',
		{
			code: 'Backspace',
			label: `&larr; Back`,
			isLabelHTML: true,
			widthRatio: 2,
		},
	],
	[
		'Tab',
		{
			code: 'Tab',
			label: 'Tab&#8646;',
			isLabelHTML: true,
			widthRatio: 1.43,
		},
	],
	[
		'BracketLeft',
		{
			code: 'BracketLeft',
			label: '[',
			shiftLabel: '{',
		},
	],
	[
		'BracketRight',
		{
			code: 'BracketRight',
			label: ']',
			shiftLabel: '}',
		},
	],
	[
		'Backslash',
		{
			code: 'Backslash',
			label: '\\',
			shiftLabel: '|',
			widthRatio: 1.58,
		},
	],
	[
		'CapsLock',
		{
			code: 'CapsLock',
			label: 'Caps Lock',
			widthRatio: 1.65,
		},
	],
	[
		'Semicolon',
		{
			code: 'Semicolon',
			label: ';',
			shiftLabel: ':',
		},
	],
	[
		'Quote',
		{
			code: 'Quote',
			label: `'`,
			shiftLabel: `"`,
		},
	],
	[
		'Enter',
		{
			code: 'Enter',
			label: 'Enter &#8626;',
			isLabelHTML: true,
			widthRatio: 2.38,
		},
	],
	[
		'ShiftLeft',
		{
			code: 'ShiftLeft',
			label: '&#8657; Shift',
			isLabelHTML: true,
			widthRatio: 2.13,
		},
	],
	[
		'Comma',
		{
			code: 'Comma',
			label: ',',
			shiftLabel: '<',
		},
	],
	[
		'Period',
		{
			code: 'Period',
			label: '.',
			shiftLabel: '>',
		},
	],
	[
		'Slash',
		{
			code: 'Slash',
			label: '/',
			shiftLabel: '?',
		},
	],
	[
		'ShiftRight',
		{
			code: 'ShiftRight',
			label: '&#8657; Shift',
			isLabelHTML: true,
			widthRatio: 2.92,
		},
	],
	[
		'ControlLeft',
		{
			code: 'ControlLeft',
			label: 'Ctrl',
			widthRatio: 1.2,
		},
	],
	[
		'Win',
		{
			code: 'MetaLeft',
			label: 'Win',
			widthRatio: 1.2,
		},
	],
	[
		'AltLeft',
		{
			code: 'AltLeft',
			label: 'Alt',
			widthRatio: 1.2,
		},
	],
	[
		'Space',
		{
			code: 'Space',
			label: '',
			widthRatio: 6.8,
		},
	],
	[
		'AltRight',
		{
			code: 'AltRight',
			label: 'Alt',
			widthRatio: 1.2,
		},
	],
	[
		'Fn',
		{
			code: 'Fn',
			label: 'Fn',
			widthRatio: 1.2,
		},
	],
	[
		'ContextMenu',
		{
			code: 'ContextMenu',
			label: 'Menu',
			widthRatio: 1.2,
		},
	],
	[
		'ControlRight',
		{
			code: 'ControlRight',
			label: 'Ctrl',
			widthRatio: 1.2,
		},
	],
	[
		'PrintScreen',
		{
			code: 'PrintScreen',
			label: 'Print Screen',
		},
	],
	[
		'ScrollLock',
		{
			code: 'ScrollLock',
			label: 'Scroll Lock',
		},
	],
	[
		'Pause',
		{
			code: 'Pause',
			label: 'Pause Break',
		},
	],
	[
		'Insert',
		{
			code: 'Insert',
			label: 'Insert',
		},
	],
	[
		'Home',
		{
			code: 'Home',
			label: 'Home',
		},
	],
	[
		'PageUp',
		{
			code: 'PageUp',
			label: 'Page Up',
		},
	],
	[
		'Delete',
		{
			code: 'Delete',
			label: 'Delete',
		},
	],
	[
		'End',
		{
			code: 'End',
			label: 'End',
		},
	],
	[
		'PageDown',
		{
			code: 'PageDown',
			label: 'Page Down',
		},
	],
	[
		'ArrowUp',
		{
			code: 'ArrowUp',
			label: '&uarr;',
			isLabelHTML: true,
		},
	],
	[
		'ArrowLeft',
		{
			code: 'ArrowLeft',
			label: '&larr;',
			isLabelHTML: true,
		},
	],
	[
		'ArrowDown',
		{
			code: 'ArrowDown',
			label: '&darr;',
			isLabelHTML: true,
		},
	],
	[
		'ArrowRight',
		{
			code: 'ArrowRight',
			label: '&rarr;',
			isLabelHTML: true,
		},
	],
	[
		'NumLock',
		{
			code: 'NumLock',
			label: 'Num Lock',
		},
	],
	[
		'NumpadDivide',
		{
			code: 'NumpadDivide',
			label: '/',
		},
	],
	[
		'NumpadMultiply',
		{
			code: 'NumpadMultiply',
			label: '*',
		},
	],
	[
		'NumpadSubtract',
		{
			code: 'NumpadSubtract',
			label: '-',
		},
	],
	...[1, 2, 3, 4, 5, 6, 7, 8, 9].map(
		key =>
			[
				`Numpad${key}`,
				{
					code: `Numpad${key}`,
					label: `${key}`,
				},
			] as [string, IKey]
	),
	[
		'NumpadAdd',
		{
			code: 'NumpadAdd',
			label: '+',
			heightRatio: 2.03,
		},
	],
	[
		'NumpadEnter',
		{
			code: 'NumpadEnter',
			label: '&#8626;',
			isLabelHTML: true,
			heightRatio: 2.03,
		},
	],
	[
		'Numpad0',
		{
			code: 'Numpad0',
			label: '0',
			widthRatio: 2.03,
		},
	],
	[
		'NumpadDecimal',
		{
			code: 'NumpadDecimal',
			label: '.',
		},
	],
	...convertStringToKeys('QWERTYUIOPASDFGHJKLZXCVBNM'),
])
