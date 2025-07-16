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
			setIsLoading(false);
			setItems([
				createItem({ id: '1', name: 'Eddie Alvarez', nationality: 'American'}),
				createItem({ id: '2', name: 'Jairzinho Rozenstruik', nationality: 'Surinamese'}),
				createItem({ id: '3', name: 'Khamzat Chimaev', nationality: 'Chechnyan'}),
				createItem({ id: '4', name: 'Rafael Fiziev', nationality: 'Azerbaijani'}),
				createItem({ id: '5', name: 'Dustin Poirier', nationality: 'American'}),
				createItem({ id: '6', name: 'Charles Oliveira', nationality: 'Brazilian' }),
				createItem({ id: '7', name: 'Islam Makhachev', nationality: 'Russian' }),
				createItem({ id: '8', name: 'Ilia Topuria', nationality: 'Georgian' }),
				createItem({ id: '9', name: 'Leon Edwards', nationality: 'Jamaican-British' }),
				createItem({ id: '10', name: 'Brandon Moreno', nationality: 'Mexican' }),
				createItem({ id: '11', name: 'Julianna Peña', nationality: 'American' }),
				createItem({ id: '12', name: 'Tai Tuivasa', nationality: 'Australian' }),
				createItem({ id: '13', name: 'Ciryl Gane', nationality: 'French' }),
				createItem({ id: '14', name: 'Valentina Shevchenko', nationality: 'Kyrgyzstani' }),
				createItem({ id: '15', name: 'Paddy Pimblett', nationality: 'English' }),
				createItem({ id: '16', name: 'Yair Rodríguez', nationality: 'Mexican' }),
				createItem({ id: '17', name: 'Derrick Lewis', nationality: 'Jamaican' }),
				createItem({ id: '18', name: 'Marvin Vettori', nationality: 'Italian' }),
				createItem({ id: '19', name: 'Song Yadong', nationality: 'Chinese' }),
				createItem({ id: '20', name: 'Alex Pereira', nationality: 'Brazilian' }),
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
