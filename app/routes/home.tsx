import type { Route } from "./+types/home";
import { ItemGrid } from "~/components/ItemGrid";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "JOSE'S POKÉDEX" },
    { name: "description", content: "Pokedex with React" },
  ];
}

export default function Home() {
  return (
		<>
			<ItemGrid />
		</>
	);
}
