import { GiOwl as LogoIcon } from "react-icons/gi";
import { Link, useLocation } from "react-router";
import { SearchBar } from "./SearchBar";


const Logo = () => (
		<Link to="/" className="flex gap-2 items-center group">
			<LogoIcon className="h-6 w-6 stroke-2"/>
			<span className="text-xl font-heading font-medium group-hover:text-foreground group-hover:text-shadow-lg group-hover:text-shadow-muted">
				Potterdex
			</span>
		</Link>
	);


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
