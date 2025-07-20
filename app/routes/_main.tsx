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
import { useSearch } from "~/lib/context/SearchContext";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "POTTERDEX | Home" },
    { name: "description", content: "Pokedex for Harry Potter" },
  ];
}


export default function Home() {
	const { search, database, sort, order } = useSearch();

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

	const fetchCharacters = () => axios.get(url)
				.then(res => {
						const actualCharacters = res.data.data.map((item: { attributes: any; }) => item.attributes);
						setCharacters(actualCharacters);
				})
				.catch(error => {
						console.log(error);
				})
				.finally(() => {
						setIsLoading(false);
				});

	useEffect(() => {
		setIsLoading(true);
		fetchCharacters();
	}, [page]);

	useEffect(() => {
		setIsLoading(true);
		setPage(1);
		fetchCharacters();
	}, [search, database, sort, order]);


	// segregated for visual clarity
	const PaginationSection = () => (
			<Pagination className="bg-transparent border-none w-fit pt-2 pb-12">
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
						<PaginationLink onClick={(e) => {
							e.preventDefault();
							setPage(page+1);
						}}>{page+1}</PaginationLink>
					</PaginationItem>
					
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					
					<PaginationItem>
						<PaginationNext
							size="icon"
							onClick={(e) => {
							e.preventDefault();
							setPage(page+1);
						}} />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
	);

	
  return (
		<main className="container">
			<PaginationSection />
			<div className="w-full">
				<ItemGrid items={characters} isLoading={isLoading} />
			</div>
		</main>
	);
}
