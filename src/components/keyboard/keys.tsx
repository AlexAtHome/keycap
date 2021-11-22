export interface IKey {
	code: string
	label: string
	shiftLabel?: string
	widthRatio?: number
	offsetRight?: number
}

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

export const numbersRow = ['` ~', '1 !', '2 @', '3 #', '4 $', '5 %', '6 ^', '7 &', '8 *', '9 (', '0 )', '- _', '=+']

export const topRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']']

export const middleRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"]

export const bottomRow = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
