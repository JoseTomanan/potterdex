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
import { useSearch } from "~/lib/context/SearchContext";
import type { DatabaseType, SortType, OrderType } from "~/lib/context/SearchContext";


type SearchBarProps = {
	disabled: boolean,
};

export function SearchBar({ disabled }: SearchBarProps) {
	const {search, database, sort, order, setSearchState} = useSearch();

	return (
		<form className="flex gap-4">
			<div className="flex flex-row rounded rounded-inherit outline outline-muted-foreground -outline-offset-1">
				<Input
					value={search}
					id="search"
					type="text"
					placeholder="Search..."
					disabled={disabled}
					onChange={(event) => setSearchState({ search: event.target.value })}
					className="border-none rounded-l active:outline-none w-48 lg:w-64"
					/>
				<FaSearch className="grow w-7 h-full font-light pr-3 m-auto text-muted-foreground bg-input/30"/>
			</div>

			{/*
			<Select
				value={database}
				onValueChange={(i: DatabaseType) => setSearchState({ database: i })}>
				<SelectTrigger className="rounded w-32 xl:w-40">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Database</SelectLabel>
						<SelectItem value="characters">Characters</SelectItem>
						<SelectItem value="potions" disabled>Potions</SelectItem>
						<SelectItem value="spells" disabled>Spells</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
			*/}

			<Select
				value={sort}
				onValueChange={(i: SortType) => setSearchState({ sort: i })}>
				<SelectTrigger className="rounded w-16 xl:w-28 border-muted-foreground" >
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Filter</SelectLabel>
						<SelectItem value="name">Name</SelectItem>
						<SelectItem value="house">House</SelectItem>
						<SelectItem value="nationality">Nationality</SelectItem>
						<SelectItem value="species">Species</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>

			<Select
				value={order}
				onValueChange={(i: OrderType) => setSearchState({ order: i })}>
				<SelectTrigger className="rounded w-24 lg:w-32">
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
