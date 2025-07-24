import { createContext, useContext, useState } from "react";
import type { SearchState } from "~/lib/types/SearchState";


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


export function useSearchContext() {
	const context = useContext(SearchContext);
	if (!context)
		throw new Error("useSearch must be used within SearchProvider");
	return context;
}
