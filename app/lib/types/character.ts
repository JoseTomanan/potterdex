export type Character = {
	id: string;
	name: string;
	alias_names: string[];
	gender: string,
	nationality: string;
	skin_color: string;
	house: string;
	weight?: number;
	born: string;
	died?: string;
	wand: string[];
	wiki?: string;
	image: string;
}

export function createCharacter(overrides: Partial<Character> = {}): Character {
	return {
		id: '',
    name: '',
    alias_names: [],
		gender: 'Unknown',
    nationality: '',
    skin_color: '',
    house: '',
    born: '',
    wand: [],
		image: '',
    ...overrides,
	};
}