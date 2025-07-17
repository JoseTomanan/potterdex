import {
	useEffect,
	useState,
} from "react";
import type { Route } from "./+types/_main";
import {
	createCharacter as createItem,
	type Character as Item,
} from "~/lib/types/character";
import testdata from "~/lib/testdata.json";

import { ItemGrid } from "~/components/item/ItemGrid";
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
	const [items, setItems] = useState<Item[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		// Simulated loading for now
		setTimeout(() => {
			setIsLoading(false);
			setItems(testdata.map(item => createItem(item)));
		}, 1500);
	}, []);

  return (
		<main className="w-screen px-1 md:px-2">
			<Pagination className="bg-transparent border-none w-fit">
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" />
					</PaginationItem>
					{(page > 1) ? (
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
					) : <></>}
					{(page > 2) ? (
						<PaginationItem>
							<PaginationLink href="#">
								{page-1}
							</PaginationLink>
						</PaginationItem>
					) : <></>}
					<PaginationItem>
						<PaginationLink href="#">{page}</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">{page+1}</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="#" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>

			<ItemGrid items={items} isLoading={isLoading} />
		</main>
	);
}
