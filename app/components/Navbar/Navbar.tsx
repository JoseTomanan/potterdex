import { Link } from "react-router";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";

export function NavBar() {
	return (
		<nav className="flex flex-row items-center justify-center px-6 py-4 w-full">
			<div className="flex items-center gap-8">
				<Logo />
				<SearchBar />
			</div>
			<span className="flex-1"/>
			<div className="flex gap-6 justify-end">
				<a href="https://potterdb.com/" target="_blank">PotterDB</a>
				<Link to="/about">About</Link>
			</div>
		</nav>
	);
}
