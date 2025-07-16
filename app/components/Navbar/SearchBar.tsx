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
import {
	Tooltip,
	TooltipTrigger,
	TooltipContent,
} from "~/components/ui/tooltip";


type SearchBarProps = {
	disabled: boolean,
};

export function SearchBar({ disabled }: SearchBarProps) {
	const [database, setDatabase] = useState("character");
	const [category, setCategory] = useState("name");
	const [order, setOrder] = useState("ascending");

	return (
		<form className="flex gap-4">
			<div className="flex outline -outline-offset-1 outline-input rounded">
				<Button
					variant="ghost" size="icon"
					className="rounded rounded-inherit rounded-r-none" disabled={disabled}>
					<FaSearch />
				</Button>
				<Input
					id="search" type="text" placeholder="Search..."
					disabled={disabled}
					className="border-none rounded rounded-inherit rounded-l-none active:outline-none w-48 lg:w-64"
					/>
			</div>

			<Select value={database} onValueChange={setDatabase}>
				<SelectTrigger className="rounded w-32 xl:w-40">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Database</SelectLabel>
						<SelectItem value="character">Characters</SelectItem>
						<SelectItem value="potion" disabled>Potions</SelectItem>
						<SelectItem value="spell" disabled>Spells</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>

			<Select value={category} onValueChange={setCategory}>
				<SelectTrigger className="rounded w-24 xl:w-32">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Sort by</SelectLabel>
						<SelectItem value="name">Name</SelectItem>
						<SelectItem value="house" disabled>House</SelectItem>
						<SelectItem value="nationality" disabled>Nationality</SelectItem>
						<SelectItem value="species" disabled>Species</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>

			<Select value={order} onValueChange={setOrder}>
				<SelectTrigger className="rounded w-24 lg:w-32">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Order</SelectLabel>
						<SelectItem value="ascending">Ascending</SelectItem>
						<SelectItem value="descending" disabled>Descending</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</form>
	);
}
