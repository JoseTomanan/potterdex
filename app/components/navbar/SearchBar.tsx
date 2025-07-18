import { useState } from "react";
import {IoSearchOutline as SearchIcon } from "react-icons/io5";
import { useLocation } from "react-router";
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


export function SearchBar() {
	const {search, database, sort, order, setSearchState} = useSearch();

	const isInHome = useLocation().pathname === "/";
	const isInAbout = useLocation().pathname === "/about"

	return (
		<form className="flex gap-4">
			<div className={`relative flex flex-row rounded rounded-inherit outline ${isInHome ? `outline-muted-foreground` : `outline-input`} -outline-offset-1`}>
				<Input
					value={search}
					id="search"
					type="text"
					placeholder="Search..."
					disabled={isInAbout}
					onChange={(event) => setSearchState({ search: event.target.value })}
					className="border-none rounded active:outline-none w-48 lg:w-64"
					/>
				<SearchIcon className="grow size-4 m-auto text-muted-foreground absolute top-1/2 -translate-1/2 right-0.5 pointer-events-none"/>
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
				<SelectTrigger className={`rounded w-16 xl:w-28 ${isInHome ? `border-muted-foreground`: ""}`} >
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
