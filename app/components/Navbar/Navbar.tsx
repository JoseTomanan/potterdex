import { SearchBar } from "./SearchBar";

export function NavBar() {
	return (
		<div>
			<div>
				
				<SearchBar />
			</div>
			<div className="">
				<a className="">PokéAPI</a>
				<a className="">About</a>
			</div>
		</div>
	);
}

const resources = [];