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


export function meta({}: Route.MetaArgs) {
  return [
    { title: "POTTERDEX | Database" },
    { name: "description", content: "Pokedex for Harry Potter" },
  ];
}


export default function Home() {
	const [page, setPage] = useState(1);
	const [characters, setCharacters] = useState<Character[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		axios.get(`https://api.potterdb.com/v1/characters?page[size]=20&page[number]=${page}`)
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
	}, [page]);

  return (
		<main className="w-screen px-1 md:px-2">
			<Pagination className="bg-transparent border-none w-fit">
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious onClick={(e) => {
							e.preventDefault();
							setIsLoading(true);
							setPage(page-1);
						}}/>
					</PaginationItem>
					{(page > 2) ? (
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
					) : <></>}
					{(page > 1) ? (
						<PaginationItem>
							<PaginationLink
								onClick={(e) => {
								e.preventDefault();
								setIsLoading(true);
								setPage(page-1);
								}}>
								{page-1}
							</PaginationLink>
						</PaginationItem>
					) : <></>}
					<PaginationItem>
						<PaginationLink isActive href="#">{page}</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink onClick={(e) => {
							e.preventDefault();
							setIsLoading(true);
							setPage(page+1);
						}}>{page+1}</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext onClick={(e) => {
							e.preventDefault();
							setIsLoading(true);
							setPage(page+1);
						}} />
					</PaginationItem>
				</PaginationContent>
			</Pagination>

			<ItemGrid items={characters} isLoading={isLoading} />
		</main>
	);
}
