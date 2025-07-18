import {
	Link,
	useLocation,
} from "react-router";

import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";

export function NavBar() {
	const isNotFixed = (useLocation().pathname === "/about");

	return (
		<nav className={`flex flex-row items-center justify-center w-full ${isNotFixed ? "relative" : "fixed"}`}>
			<div className="flex items-center gap-6">
				<Logo />
				<SearchBar />
			</div>
			<span className="flex-1"/>
			<div className="flex gap-8 justify-end">
				<a href="https://potterdb.com/" target="_blank">PotterDB</a>
				<Link to="/about">About</Link>
			</div>
		</nav>
	);
}
