export interface IKey {
	code: string
	label: string
	shiftLabel?: string
	widthScale?: number
}

export const fRow: IKey[] = Array(12)
	.fill('')
	.map((_, index) => ({
		code: `F${index + 1}`,
		label: `F${index + 1}`
	}))

export const numbersRow = ['` ~', '1 !', '2 @', '3 #', '4 $', '5 %', '6 ^', '7 &', '8 *', '9 (', '0 )', '- _', '=+']

export const topRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']']

export const middleRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"]

export const bottomRow = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
