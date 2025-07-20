import { GiOwl as LogoIcon } from "react-icons/gi";
import { Link, useLocation } from "react-router";
import { SearchBar } from "./SearchBar";


const Logo = () => (
		<Link to="/" className="flex gap-2 items-center group">
			<LogoIcon className="h-6 w-6 stroke-2"/>
			<span className="text-xl font-heading font-bold tracking-tighter">
				Potterdex
			</span>
		</Link>
	);


export function NavBar() {
	return (
		<nav className="flex flex-row justify-center w-full fixed flex-wrap">
			<div className="flex items-center gap-6">
				<Logo />
				<SearchBar />
			</div>
			<span className="flex-1"/>
			<div className="flex gap-8 items-center">
				<a href="https://potterdb.com/" target="_blank">PotterDB</a>
				<Link to="/about">About</Link>
			</div>
		</nav>
	);
}
