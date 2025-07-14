import type { Route } from "./+types/home";
import { NavBar } from "~/components/Navbar/Navbar";
import { Items } from "~/components/Items/ItemGrid";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "JOSE'S POKÉDEX" },
    { name: "description", content: "Pokedex with React" },
  ];
}

export default function Home() {
  return (
		<main>
			<NavBar />
			<Items />
		</main>
	);
}
