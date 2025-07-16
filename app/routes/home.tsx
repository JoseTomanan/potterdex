import type { Route } from "./+types/home";
import { ItemGrid } from "~/components/item/ItemGrid";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "POKÉDEX | Search" },
    { name: "description", content: "Pokedex with React" },
  ];
}

export default function Home() {
  return (
		<main>
			<ItemGrid />
		</main>
	);
}
