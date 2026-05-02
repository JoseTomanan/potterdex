import { GiOwl as LogoIcon } from "react-icons/gi";
import { Link, useLocation } from "react-router";
import { SearchBar } from "./SearchBar";
import { useSearchContext } from "~/lib/context/SearchContext";


const Logo = ({onClick}: {onClick: () => void}) => (
		<Link to="/" className="flex gap-2 items-center group"
					onClick={onClick}>
			<LogoIcon className="h-6 w-6 stroke-2"/>
			<span className="text-xl font-heading font-bold tracking-tighter
						hidden md:block">
				Potterdex
			</span>
		</Link>
	);


export function NavBar() {
	const { setSearchState } = useSearchContext();

	const tryClearSearch = (useLocation().pathname === "/")
				? () => setSearchState({search: ""})
				: () => null;

	return (
		<nav className="flex flex-wrap md:flex-nowrap flex-row items-center justify-between w-full fixed gap-y-2">
			<Logo onClick={tryClearSearch} />
			<SearchBar />
			<div className="flex gap-4 md:gap-8 items-center ml-auto md:ml-0 order-first md:order-last">
				<a href="https://potterdb.com/" target="_blank">PotterDB</a>
				<Link to="/about">About</Link>
			</div>
		</nav>
	);
}
