export interface IKey {
	code: string
	label: string
	shiftLabel?: string
	widthRatio?: number
	offsetRight?: number
}

export interface IRowDTO {
	id?: string
	/** Default is `left` */
	align?: 'left' | 'center' | 'right'
	/** Set as empty string to create an empty space */
	keys: IKey[];
}

export type Row = IKey[] | IRowDTO;

export interface ISection {
	id: 'functional' | 'letters' | 'control1' | 'control2' | 'numpad';
	marginBottom?: number;
	rows: Row[];
}

export const convertStringToKeys = (letters: string): IKey[] => letters.split('').map(char => ({
	code: `Key${char}`,
	label: char.toLowerCase(),
	shiftLabel: char
} as IKey))

