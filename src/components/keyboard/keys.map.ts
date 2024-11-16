import { isMacOS } from '../../functions/is-macos'
import { IKey, convertStringToKeys } from './keys.interface'

const isMac = isMacOS()

const fKeycaps: [string, IKey][] = Array(19)
	.fill('')
	.map((_, index) => [
		`F${index + 1}`,
		{
			code: `F${index + 1}`,
			label: `F${index + 1}`,
			offsetRight: isMac ? 0 : [3, 7].includes(index) ? 0.5 : 0,
		} as IKey,
	])

export const keycapsMap = new Map<string, IKey>([
	[
		'Escape',
		{
			code: 'Escape',
			label: isMac ? 'esc' : 'Esc',
			offsetRight: isMac ? 0 : 1.05,
			widthRatio: isMac ? 2 : 1,
			align: isMac ? 'left' : 'right'
		},
	],
	...fKeycaps,
	[
		'Backquote',
		{
			code: 'Backquote',
			shiftLabel: '~',
			label: '`',
		},
	],
	[
		'Fingerprint',
		{
			code: 'fingerprint',
			label: ``
		}
	],
	[
		'Digit1',
		{
			code: 'Digit1',
			shiftLabel: '!',
			label: '1',
		},
	],
	[
		'Digit2',
		{
			code: 'Digit2',
			shiftLabel: '@',
			label: '2',
		},
	],
	[
		'Digit3',
		{
			code: 'Digit3',
			shiftLabel: '#',
			label: '3',
		},
	],
	[
		'Digit4',
		{
			code: 'Digit4',
			shiftLabel: '$',
			label: '4',
		},
	],
	[
		'Digit5',
		{
			code: 'Digit5',
			shiftLabel: '%',
			label: '5',
		},
	],
	[
		'Digit6',
		{
			code: 'Digit6',
			shiftLabel: '^',
			label: '6',
		},
	],
	[
		'Digit7',
		{
			code: 'Digit7',
			shiftLabel: '&',
			label: '7',
		},
	],
	[
		'Digit8',
		{
			code: 'Digit8',
			shiftLabel: '*',
			label: '8',
		},
	],
	[
		'Digit9',
		{
			code: 'Digit9',
			shiftLabel: '(',
			label: '9',
		},
	],
	[
		'Digit0',
		{
			code: 'Digit0',
			shiftLabel: ')',
			label: '0',
		},
	],
	[
		'Minus',
		{
			code: 'Minus',
			shiftLabel: '_',
			label: '-',
		},
	],
	[
		'Equal',
		{
			code: 'Equal',
			shiftLabel: '+',
			label: '=',
		},
	],
	[
		'Backspace',
		{
			code: 'Backspace',
			label: isMac ? '⌫' : `&larr; Back`,
			isLabelHTML: true,
			widthRatio: 2,
			align: 'right'
		},
	],
	[
		'Tab',
		{
			code: 'Tab',
			label: isMac ? '⇥' : 'Tab&#8646;',
			isLabelHTML: true,
			widthRatio: 1.43,
			align: 'left'
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
			label: isMac ? '⇪' : 'Caps Lock',
			widthRatio: 1.65,
			align: 'left'
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
			label: isMac ? '↩︎' : 'Enter &#8626;',
			isLabelHTML: true,
			widthRatio: 2.38,
		},
	],
	[
		'ShiftLeft',
		{
			code: 'ShiftLeft',
			label: isMac ? '⇧' : '&#8657; Shift',
			isLabelHTML: true,
			widthRatio: 2.13,
			align: 'left'
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
			label: isMac ? '⇧' : '&#8657; Shift',
			isLabelHTML: true,
			widthRatio: 2.92,
			align: 'right'
		},
	],
	[
		'ControlLeft',
		{
			code: 'ControlLeft',
			upperLabel: isMac ? '⌃' : '',
			label: isMac ? 'control' : 'Ctrl',
			widthRatio: isMac ? 1.5 : 1.2,
			align: isMac ? 'left' : 'right',
		},
	],
	[
		'Win',
		{
			code: 'MetaLeft',
			upperLabel: isMac ? '⌘' : '',
			label: isMac ? 'command' : 'Win',
			widthRatio: isMac ? 1.4 : 1.2,
			align: isMac ? 'left' : 'right',
		},
	],
	[
		'WinRight',
		{
			code: 'MetaRight',
			upperLabel: isMac ? '⌘' : '',
			label: isMac ? 'command' : 'Win',
			widthRatio: isMac ? 1.4 : 1.2,
			align: isMac ? 'right' : 'left',
		}
	],
	[
		'AltLeft',
		{
			code: 'AltLeft',
			upperLabel: isMac ? '⌥' : '',
			label: isMac ? 'option' : 'Alt',
			widthRatio: isMac ? 1.3 : 1.2,
			align: isMac ? 'left' : 'right',
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
			upperLabel: isMac ? '⌥' : '',
			label: isMac ? 'option' : 'Alt',
			widthRatio: isMac ? 1.3 : 1.2,
			align: 'right'
		},
	],
	[
		'Fn',
		{
			code: 'Fn',
			label: isMac ? 'fn' : 'Fn',
			widthRatio: isMac ? 1 : 1.2,
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
			upperLabel: isMac ? '⌃' : '',
			label: isMac ? 'control' : 'Ctrl',
			widthRatio: isMac ? 1.5 : 1.2,
			align: 'right'
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
			label: isMac ? '⌦' : 'Delete',
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
			heightRatio: isMac ? 1 : 2.03,
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
		'NumpadClear',
		{
			code: 'NumpadClear',
			label: 'clear',
		},
	],
	[
		'NumpadEqual',
		{
			code: 'NumpadEqual',
			label: '=',
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
