import { isMacOS } from '../../functions/is-macos'
import { IKey, ISection } from './keys.interface'
import { keycapsMap } from './keys.map'

const charsToKeycodes = (str: string): string[] => str.split('').map(char => `Key${char}`)
const codesToKeycaps = (...codes: string[]): IKey[] => codes.filter(Boolean).map(code => keycapsMap.get(code) as IKey)

const isMac = isMacOS()

export const ansiKeyboard: ISection[] = [
	{
		id: 'functional',
		rows: [codesToKeycaps('Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', isMac ? 'Fingerprint' : '')],
	},
	{
		id: 'letters',
		rows: [
			codesToKeycaps(
				'Backquote',
				'Digit1',
				'Digit2',
				'Digit3',
				'Digit4',
				'Digit5',
				'Digit6',
				'Digit7',
				'Digit8',
				'Digit9',
				'Digit0',
				'Minus',
				'Equal',
				'Backspace'
			),
			codesToKeycaps('Tab', ...charsToKeycodes('QWERTYUIOP'), 'BracketLeft', 'BracketRight', 'Backslash'),
			codesToKeycaps('CapsLock', ...charsToKeycodes('ASDFGHJKL'), 'Semicolon', 'Quote', 'Enter'),
			codesToKeycaps('ShiftLeft', ...charsToKeycodes('ZXCVBNM'), 'Comma', 'Period', 'Slash', 'ShiftRight'),
			isMac
				? codesToKeycaps('ControlLeft', 'AltLeft', 'Win', 'Space', 'WinRight', 'AltRight', 'ControlRight')
				: codesToKeycaps('ControlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'Fn', 'ContextMenu', 'ControlRight'),
		],
	},
	{
		id: 'control1',
		rows: [isMac ? codesToKeycaps('F13', 'F14', 'F15') : codesToKeycaps('PrintScreen', 'ScrollLock', 'Pause')],
	},
	{
		id: 'control2',
		rows: [
			isMac ? codesToKeycaps('Fn', 'Home', 'PageUp') : codesToKeycaps('Insert', 'Home', 'PageUp'),
			codesToKeycaps('Delete', 'End', 'PageDown'),
			[], // gap
			{
				align: 'center',
				keys: codesToKeycaps('ArrowUp'),
			},
			codesToKeycaps('ArrowLeft', 'ArrowDown', 'ArrowRight'),
		],
	},
	{
		id: 'control3',
		rows: !isMac ? [] : [codesToKeycaps('F16', 'F17', 'F18', 'F19')]
	},
	{
		id: 'numpad',
		rows: isMac ? [
			codesToKeycaps('NumpadClear', 'NumpadEqual', 'NumpadDivide', 'NumpadMultiply'),
			codesToKeycaps('Numpad7', 'Numpad8', 'Numpad9', 'NumpadSubtract'),
			codesToKeycaps('Numpad4', 'Numpad5', 'Numpad6', 'NumpadAdd'),
			codesToKeycaps('Numpad1', 'Numpad2', 'Numpad3', 'NumpadEnter'),
			codesToKeycaps('Numpad0', 'NumpadDecimal'),
		] : [
			codesToKeycaps('NumLock', 'NumpadDivide', 'NumpadMultiply', 'NumpadSubtract'),
			codesToKeycaps('Numpad7', 'Numpad8', 'Numpad9', 'NumpadAdd'),
			codesToKeycaps('Numpad4', 'Numpad5', 'Numpad6'),
			codesToKeycaps('Numpad1', 'Numpad2', 'Numpad3', 'NumpadEnter'),
			codesToKeycaps('Numpad0', 'NumpadDecimal'),
		],
	},
]
