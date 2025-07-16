import {
	useEffect,
	useState,
} from "react";
import type { Route } from "./+types/home";
import {
	createCharacter as createItem,
	type Character as Item,
} from "~/lib/types/character";

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
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulated loading for now
		setTimeout(() => {
			setIsLoading(false);
			setItems([
				createItem({ id: '1', name: 'Eddie Alvarez', nationality: 'Transylvanian', house: 'Ravenclaw' }),
				createItem({ id: '2', name: 'Jairzinho Rozenstruik', nationality: 'Moroccan', house: 'Gryffindor' }),
				createItem({ id: '3', name: 'Khamzat Chimaev', nationality: 'Bulgarian', house: 'Slytherin' }),
				createItem({ id: '4', name: 'Rafael Fiziev', nationality: 'Scottish', house: 'Hufflepuff' }),
				createItem({ id: '5', name: 'Dustin Poirier', nationality: 'Welsh', house: 'Slytherin' }),
				createItem({ id: '6', name: 'Charles Oliveira', nationality: 'Greek', house: 'Gryffindor' }),
				createItem({ id: '7', name: 'Islam Makhachev', nationality: 'Romanian', house: 'Ravenclaw' }),
				createItem({ id: '8', name: 'Ilia Topuria', nationality: 'Irish', house: 'Gryffindor' }),
				createItem({ id: '9', name: 'Leon Edwards', nationality: 'Austrian', house: 'Hufflepuff' }),
				createItem({ id: '10', name: 'Brandon Moreno', nationality: 'Norwegian', house: 'Ravenclaw' }),
				createItem({ id: '11', name: 'Julianna Peña', nationality: 'Hungarian', house: 'Gryffindor' }),
				createItem({ id: '12', name: 'Tai Tuivasa', nationality: 'Slovenian', house: 'Slytherin' }),
				createItem({ id: '13', name: 'Ciryl Gane', nationality: 'Danish', house: 'Ravenclaw' }),
				createItem({ id: '14', name: 'Valentina Shevchenko', nationality: 'Estonian', house: 'Slytherin' }),
				createItem({ id: '15', name: 'Paddy Pimblett', nationality: 'Moldovan', house: 'Hufflepuff' }),
				createItem({ id: '16', name: 'Yair Rodríguez', nationality: 'Latvian', house: 'Gryffindor' }),
				createItem({ id: '17', name: 'Jan Błachowicz', nationality: 'Croatian', house: 'Ravenclaw' }),
				createItem({ id: '18', name: 'Marvin Vettori', nationality: 'Slovakian', house: 'Hufflepuff' }),
				createItem({ id: '19', name: 'Zhang Weili', nationality: 'Czech', house: 'Gryffindor' }),
				createItem({ id: '20', name: 'Alex Pereira', nationality: 'Ukrainian', house: 'Slytherin' }),
			]);
		}, 1500);
	}, []);

  return (
		<main className="container">
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

			<ItemGrid items={items} isLoading={isLoading} />
		</main>
	);
}
