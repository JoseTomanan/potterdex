export type Character = {
	slug: string;
	animagus?: string;
	boggart?: string;
	eye_color: string;
	hair_color: string;
	family_members: string[];
	marital_status: string;
	name: string;
	alias_names: string[];
	gender: string,
	nationality: string;
	species: string;
	skin_color: string;
	blood_status: string;
	house: string;
	height?: number;
	patronus: string;
	romances: string[];
	titles?: string[];
	weight?: number;
	born: string;
	died?: string;
	wand: string[];
	wiki?: string;
	image: string;
}

export function createCharacter(overrides: Partial<Character> = {}): Character {
	return {
		slug: '',
		animagus: '',
		boggart: '',
		eye_color: '',
		hair_color: '',
		family_members: [],
		marital_status: '',
    name: '',
    alias_names: [],
		gender: 'Unknown',
    nationality: '',
		species: 'Human',
    skin_color: '',
		blood_status: '',
    house: '',
		patronus: '',
		romances: [],
		titles: [],
    born: '',
    wand: [],
		image: '',
    ...overrides,
	};
}