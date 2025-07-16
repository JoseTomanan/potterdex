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
			setItems([
				createItem({ id: '1', name: 'Eddie Alvarez', nationality: 'American'}),
				createItem({ id: '2', name: 'Jairzinho Rozenstruik', nationality: 'Surinamese'}),
				createItem({ id: '3', name: 'Khamzat Chimaev', nationality: 'Chechnyan'}),
				createItem({ id: '4', name: 'Rafael Fiziev', nationality: 'Azerbaijani'}),
				createItem({ id: '5', name: 'Dustin Poirier', nationality: 'American'}),
			]);
		}, 1500);
	}, []);

  return (
		<main>
			{/* TODO: PAGINATION */}

			<ItemGrid items={items} isLoading={isLoading} />
		</main>
	);
}
