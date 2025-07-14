import { Link } from "react-router";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";

export function NavBar() {
	return (
		<nav className="flex flex-row items-center justify-center px-6 py-4 w-full">
			<div className="">
				<Logo />
				<SearchBar />
			</div>
			<span className="flex-1"/>
			<div className="flex gap-6 justify-end">
				<a href="https://pokeapi.co/">PokéAPI</a>
				<Link to="/about">About</Link>
			</div>
		</nav>
	);
}
