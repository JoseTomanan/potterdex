import { createContext, useContext, useState } from "react";


export type DatabaseType = "characters" | "potions" | "spells";

export type SortType = "name" | "house" | "nationality" | "species";

export type OrderType = "ascending" | "descending";


type SearchState = {
	search: string;
  database: DatabaseType;
  sort: SortType;
  order: OrderType;
};

type SearchContextType = SearchState & {
	setSearchState: (partial: Partial<SearchState>) => void;
};


const SearchContext = createContext<SearchContextType | null>(null);


export function SearchProvider({ children }: { children: React.ReactNode }) {
	const [state, setState] = useState<SearchState>({
		search: "",
		database: "characters",
		sort: "name",
		order: "ascending",
	});

	const setSearchState = (partial: Partial<SearchState>) => {
		setState((prev) => ({...prev, ...partial}));
	};

	return (
		<SearchContext.Provider value={{...state, setSearchState}}>
			{children}
		</SearchContext.Provider>
	);
}


export function useSearch() {
	const context = useContext(SearchContext);

	if (!context)
		throw new Error("useSearch must be used within SearchProvider");
	
	return context;
}
