import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectItem,
} from "~/components/ui/select";

export function SearchBar() {
	const [value, setValue] = useState("character");
	const [order, setOrder] = useState("ascending");

	return (
		<form className="flex gap-4">
			<div className="flex outline -outline-offset-1 outline-input rounded">
				<Button
					variant="ghost" size="icon"
					className="rounded rounded-inherit rounded-r-none">
					<FaSearch />
				</Button>
				<Input
					id="search" type="text" placeholder="Search..."
					className="border-none rounded rounded-inherit rounded-l-none active:outline-none w-64" />
			</div>

			<Select value={value} onValueChange={setValue}>
				<SelectTrigger className="rounded w-40">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Database</SelectLabel>
						<SelectItem value="character">Characters</SelectItem>
						<SelectItem value="potion">Potions</SelectItem>
						<SelectItem value="spell">Spells</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>

			<Select value={order} onValueChange={setOrder}>
				<SelectTrigger className="rounded w-32">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Order</SelectLabel>
						<SelectItem value="ascending">Ascending</SelectItem>
						<SelectItem value="descending">Descending</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</form>
	);
}
