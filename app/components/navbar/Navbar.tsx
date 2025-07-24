import { GiOwl as LogoIcon } from "react-icons/gi";
import { Link, useLocation } from "react-router";
import { SearchBar } from "./SearchBar";
import { useSearchContext } from "~/lib/context/SearchContext";


const isInMain = () => useLocation().pathname === "/";


const Logo = ({clearSearch}: {clearSearch: () => void}) => (
		<Link to="/" className="flex gap-2 items-center group"
					onClick={() => {
						if (isInMain()) {
							clearSearch();
						}
					}}>
			<LogoIcon className="h-6 w-6 stroke-2"/>
			<span className="text-xl font-heading font-bold tracking-tighter
						hidden md:block">
				Potterdex
			</span>
		</Link>
	);


export function NavBar() {
	const { setSearchState } = useSearchContext();
	const clearSearch = () => setSearchState({search: ""});

	return (
		<nav className="flex flex-row justify-between w-full fixed flex-wrap">
			<div className="flex items-center gap-6">
				<Logo clearSearch={clearSearch} />
				<SearchBar />
			</div>
			<div className="flex gap-8 items-center">
				<a href="https://potterdb.com/" target="_blank">PotterDB</a>
				<Link to="/about">About</Link>
			</div>
		</nav>
	);
}
