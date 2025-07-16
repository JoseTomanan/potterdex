import {
	useEffect,
	useState,
} from "react";
import type { Route } from "./+types/home";
import {
	createCharacter as createItem,
	type Character as Item,
} from "~/lib/types/character";
import { testPopulator } from "~/lib/test_populator";

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
	const [items, setItems] = useState<Item[]>([]);
	const [isStillLoading, setIsStillLoading] = useState(true);

	useEffect(() => {
		// Simulated loading for now
		setTimeout(() => {
			setIsStillLoading(false);
			setItems(testPopulator.map(item => createItem(item)));
		}, 1500);
	}, []);

  return (
		<main className="w-screen px-1 md:px-2">
			<Pagination className="bg-transparent border-none w-fit">
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">1</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">2</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="#" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>

			<ItemGrid items={items} isStillLoading={isStillLoading} />
		</main>
	);
}
