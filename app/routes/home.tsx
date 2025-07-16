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
	const [isStillLoading, setIsStillLoading] = useState(true);

	useEffect(() => {
		// Simulated loading for now
		setTimeout(() => {
			setIsStillLoading(false);
			setItems([
				createItem({ id: '1', name: 'Eddie Alvarez', nationality: 'Transylvanian', house: 'Ravenclaw', gender: "Male" }),
				createItem({ id: '2', name: 'Rose Namajunas', nationality: 'Moroccan', house: 'Gryffindor' , gender: "Female"}),
				createItem({ id: '3', name: 'Jessica Andrade', nationality: 'Bulgarian', house: 'Slytherin' }),
				createItem({ id: '4', name: 'Rafael Fiziev', nationality: 'Scottish', house: 'Hufflepuff' }),
				createItem({ id: '5', name: 'Dustin Poirier', nationality: 'Welsh', house: 'Slytherin' }),
				createItem({ id: '6', name: 'Charles Oliveira', nationality: 'Greek', house: 'Gryffindor' }),
				createItem({ id: '7', name: 'Islam Makhachev', nationality: 'Romanian', house: 'Ravenclaw' }),
				createItem({ id: '8', name: 'Justin Gaethje', nationality: 'Irish', house: 'Gryffindor' }),
				createItem({ id: '9', name: 'Mickey Gall', nationality: 'Austrian', house: 'Hufflepuff' }),
				createItem({ id: '10', name: 'Brandon Moreno', nationality: 'Norwegian', house: 'Ravenclaw' }),
				createItem({ id: '11', name: 'Gregor Gillespie', nationality: 'Hungarian', house: 'Gryffindor' }),
				createItem({ id: '12', name: 'Tai Tuivasa', nationality: 'Slovenian', house: 'Slytherin' }),
				createItem({ id: '13', name: 'Ciryl Gane', nationality: 'Danish', house: 'Ravenclaw' }),
				createItem({ id: '14', name: 'Valentina Shevchenko', nationality: 'Estonian', house: 'Slytherin', gender: "Female" }),
				createItem({ id: '15', name: 'Michael Chandler', nationality: 'Moldovan', house: 'Hufflepuff', gender: "Male" }),
				createItem({ id: '16', name: 'Carlos Condit', nationality: 'Latvian', house: 'Gryffindor' }),
				createItem({ id: '17', name: 'Michael Bisping', nationality: 'Croatian', house: 'Ravenclaw' }),
				createItem({ id: '18', name: 'Marvin Vettori', nationality: 'Slovakian', house: 'Hufflepuff' }),
				createItem({ id: '19', name: 'Zhang Weili', nationality: 'Czech', house: 'Gryffindor' }),
				createItem({ id: '20', name: 'Bobby Green', nationality: 'Ukrainian', house: 'Slytherin' }),
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

			<ItemGrid items={items} isStillLoading={isStillLoading} />
		</main>
	);
}
