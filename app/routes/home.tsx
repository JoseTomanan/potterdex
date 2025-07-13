import type { Route } from "./+types/home";
import { Welcome } from "~/components/Welcome/welcome";
import { NavBar } from "~/components/Navbar/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "JOSE'S POKÉDEX" },
    { name: "description", content: "Pokedex with React" },
  ];
}

export default function Home() {
  return <>
		<NavBar />
		<Welcome />
	</>
}
