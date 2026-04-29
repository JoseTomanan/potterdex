export const ITEMS_PER_PAGE = 20;
export const API_BASE_URL = "https://api.potterdb.com/v1";

export const HOUSE_NAMES = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'] as const;
export type HouseName = typeof HOUSE_NAMES[number];