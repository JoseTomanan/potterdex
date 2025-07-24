import axios from "axios";

import { useEffect, useState, } from "react";
import type { Route } from "./+types/_main";
import type { Character } from "~/lib/types/character";

import { ItemGrid } from "~/components/character/ItemGrid";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "~/components/ui/pagination"
import { useSearchContext } from "~/lib/context/SearchContext";
import { ITEMS_PER_PAGE } from "~/lib/constants";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "POTTERDEX | Home" },
    { name: "description", content: "Pokedex for Harry Potter" },
  ];
}


const fetchCharacters = (url: string, setCharacters: Function, setIsLoading: Function) => (
		axios.get(url)
				.then(res => {
						const actualCharacters = res.data.data.map((item: { attributes: any; }) => item.attributes);
						setCharacters(actualCharacters);
				})
				.catch(error => {
						console.log(error);
				})
				.finally(() => {
						setIsLoading(false);
				})
	);


export default function Home() {
	const { search, database, sort, order } = useSearchContext();

	const [page, setPage] = useState(1);
	const [characters, setCharacters] = useState<Character[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const url = `https://api.potterdb.com/v1/characters` + 
			`?page[size]=20` +
			`&page[number]=${page}` +
			`&sort=${(order == "descending") ? '-' : ''}${sort}` +
			((search != '')
					? (`&filter[name_cont]=${search}`)
					: ('') );

	const isEndOfPage = () => characters.length < ITEMS_PER_PAGE;

	useEffect(() => {
		setIsLoading(true);
		fetchCharacters(url, setCharacters, setIsLoading);
	}, [page]);

	useEffect(() => {
		setIsLoading(true);
		setPage(1);
		fetchCharacters(url, setCharacters, setIsLoading);
	}, [search, database, sort, order]);

	const PaginationSection = () => (
			<Pagination className="bg-transparent border-none w-fit">
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
								size="icon"
								onClick={(e) => {
									e.preventDefault();
									setPage(page-1);
								}}
								className={`${page != 1 ? "" : "invisible"}`}
								/>
					</PaginationItem>

					<PaginationItem>
						<PaginationEllipsis className={`${page > 2 ? "" : "invisible"}`} />
					</PaginationItem>

					<PaginationItem>
						<PaginationLink
								onClick={(e) => {
									e.preventDefault();
									setPage(page-1);
								}}
								className={`${page > 1 ? "" : "invisible"}`}
								>
							{page-1}
						</PaginationLink>
					</PaginationItem>

					<PaginationItem>
						<PaginationLink isActive href="#">{page}</PaginationLink>
					</PaginationItem>
					
					<PaginationItem>
						<PaginationLink
							onClick={(e) => {
								e.preventDefault();
								setPage(page+1);
							}}
							className={`${isEndOfPage() ? "invisible" : ""}`}>
							{page+1}
						</PaginationLink>
					</PaginationItem>
					
					<PaginationItem>
						<PaginationEllipsis className={`${isEndOfPage() ? "invisible" : ""}`} />
					</PaginationItem>
					
					<PaginationItem>
						<PaginationNext
									onClick={(e) => {
										e.preventDefault();
										setPage(page+1);
									}}
									size="icon"
									className={`${isEndOfPage() ? "invisible" : ""}`} />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
	);

	
  return (
		<main className="container">
			<div className="pt-2 pb-10">
				<PaginationSection />
			</div>
			<div className="w-full">
				<ItemGrid items={characters} isLoading={isLoading} />
			</div>
		</main>
	);
}
