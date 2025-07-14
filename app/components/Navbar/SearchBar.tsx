import { FaSearch } from "react-icons/fa";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export function SearchBar() {
	return (
		<form className="flex">
			<Input placeholder="Search..." type="text" className="rounded rounded-r-none"/>
			<Button
				className="rounded rounded-l-none"
				variant="default" size="icon">
				<FaSearch />
			</Button>
		</form>

		// TODO: add filters
	);
}
