import { Link } from "react-router";
import { SearchBar } from "./SearchBar";

export function NavBar() {
	return (
		<nav className="flex flex-row items-center justify-center px-6 py-4 w-full bg-sidebar">
			<div className="">
				
				<SearchBar />
			</div>

			<span className="flex-1"/>
			
			<div className="flex gap-6 justify-end">
				<a className="hoverable-link" href="">PokéAPI</a>
				<Link to="/about" className="hoverable-link">About</Link>
			</div>
		</nav>
	);
}
