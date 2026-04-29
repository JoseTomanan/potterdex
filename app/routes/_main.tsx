import axios from "axios";

import { useEffect, useState } from "react";
import type { Route } from "./+types/_main";
import type { Character } from "~/lib/types/CharacterItem";

import { ItemGrid } from "~/components/character/ItemGrid";
import { HouseFilter } from "~/components/character/HouseFilter";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "~/components/ui/pagination";
import { useSearchContext } from "~/lib/context/SearchContext";
import { ITEMS_PER_PAGE, API_BASE_URL } from "~/lib/constants";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "POTTERDEX | Home" },
    { name: "description", content: "Pokedex for Harry Potter" },
  ];
}


const fetchCharacters = (url: string, setCharacters: Function, setIsLoading: Function) => (
	axios.get(url)
		.then(res => {
			const actualCharacters = res.data.data.map((item: { attributes: any }) => item.attributes);
			setCharacters(actualCharacters);
		})
		.catch(error => {
			console.error(error);
		})
		.finally(() => {
			setIsLoading(false);
		})
);


export default function Home() {
	const { search, database, sort, order, houseFilter } = useSearchContext();

	const [page, setPage] = useState(1);
	const [characters, setCharacters] = useState<Character[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const buildUrl = (pg: number) =>
		`${API_BASE_URL}/characters` +
		`?page[size]=${ITEMS_PER_PAGE}` +
		`&page[number]=${pg}` +
		`&sort=${order === 'descending' ? '-' : ''}${sort}` +
		(search ? `&filter[name_cont]=${encodeURIComponent(search)}` : '') +
		(houseFilter ? `&filter[house_eq]=${encodeURIComponent(houseFilter)}` : '');

	const isEndOfPage = () => characters.length < ITEMS_PER_PAGE;

	useEffect(() => {
		setIsLoading(true);
		fetchCharacters(buildUrl(page), setCharacters, setIsLoading);
	}, [page]);

	useEffect(() => {
		setIsLoading(true);
		setPage(1);
		fetchCharacters(buildUrl(1), setCharacters, setIsLoading);
	}, [search, database, sort, order, houseFilter]);

	const PaginationSection = () => (
		<Pagination className="bg-transparent border-none w-fit">
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						size="icon"
						onClick={(e) => { e.preventDefault(); setPage(p => p - 1); }}
						className={page !== 1 ? "" : "invisible"}
					/>
				</PaginationItem>

				<PaginationItem>
					<PaginationEllipsis className={page > 2 ? "" : "invisible"} />
				</PaginationItem>

				<PaginationItem>
					<PaginationLink
						onClick={(e) => { e.preventDefault(); setPage(p => p - 1); }}
						className={page > 1 ? "" : "invisible"}
					>
						{page - 1}
					</PaginationLink>
				</PaginationItem>

				<PaginationItem>
					<PaginationLink isActive href="#">{page}</PaginationLink>
				</PaginationItem>

				<PaginationItem>
					<PaginationLink
						onClick={(e) => { e.preventDefault(); setPage(p => p + 1); }}
						className={isEndOfPage() ? "invisible" : ""}
					>
						{page + 1}
					</PaginationLink>
				</PaginationItem>

				<PaginationItem>
					<PaginationEllipsis className={isEndOfPage() ? "invisible" : ""} />
				</PaginationItem>

				<PaginationItem>
					<PaginationNext
						onClick={(e) => { e.preventDefault(); setPage(p => p + 1); }}
						size="icon"
						className={isEndOfPage() ? "invisible" : ""}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);

	return (
		<main className="container">
			<div className="controls-row">
				<HouseFilter />
				<PaginationSection />
			</div>
			<div className="w-full">
				<ItemGrid items={characters} isLoading={isLoading} />
			</div>
		</main>
	);
}
