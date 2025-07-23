
export type DatabaseType = "characters" | "potions" | "spells";

export type SortType = "name" | "house" | "nationality" | "species";

export type OrderType = "ascending" | "descending";

export type SearchState = {
	search: string;
  database: DatabaseType;
  sort: SortType;
  order: OrderType;
};