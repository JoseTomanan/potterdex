import axios from "axios";
import { useEffect, useRef, useState } from "react";
import type { Route } from "./+types/_main";
import type { Character } from "~/lib/types/CharacterItem";

import { ItemGrid } from "~/components/character/ItemGrid";
import { ItemSkeleton } from "~/components/character/ItemCard";
import { HouseFilter } from "~/components/character/HouseFilter";
import { useSearchContext } from "~/lib/context/SearchContext";
import { ITEMS_PER_PAGE, API_BASE_URL } from "~/lib/constants";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "POTTERDEX | Home" },
    { name: "description", content: "Pokedex for Harry Potter" },
  ];
}


export default function Home() {
	const { search, database, sort, order, houseFilter } = useSearchContext();

	const [page, setPage] = useState(1);
	const [characters, setCharacters] = useState<Character[]>([]);
	const [isInitialLoading, setIsInitialLoading] = useState(true);
	const [isLoadingMore, setIsLoadingMore] = useState(false);
	const [hasMore, setHasMore] = useState(true);
	const sentinelRef = useRef<HTMLDivElement | null>(null);

	const buildUrl = (pg: number) =>
		`${API_BASE_URL}/characters` +
		`?page[size]=${ITEMS_PER_PAGE}` +
		`&page[number]=${pg}` +
		`&sort=${order === 'descending' ? '-' : ''}${sort}` +
		(search ? `&filter[name_cont]=${encodeURIComponent(search)}` : '') +
		(houseFilter ? `&filter[house_eq]=${encodeURIComponent(houseFilter)}` : '');

	const load = (pg: number, replace: boolean) => {
		axios.get(buildUrl(pg))
			.then(res => {
				const data: Character[] = res.data.data.map(
					(item: { attributes: Character }) => item.attributes
				);
				setHasMore(data.length === ITEMS_PER_PAGE);
				if (replace) {
					setCharacters(data);
				} else {
					setCharacters(prev => [...prev, ...data]);
				}
			})
			.catch(error => {
				console.error(error);
			})
			.finally(() => {
				setIsInitialLoading(false);
				setIsLoadingMore(false);
			});
	};

	// Reset and reload from page 1 when filters/search/sort change
	useEffect(() => {
		setPage(1);
		setCharacters([]);
		setHasMore(true);
		setIsInitialLoading(true);
		load(1, true);
	}, [search, database, sort, order, houseFilter]);

	// Append subsequent pages (page 1 is handled by the filter effect above)
	useEffect(() => {
		if (page === 1) return;
		setIsLoadingMore(true);
		load(page, false);
	}, [page]);

	// Trigger next page load when sentinel scrolls into view
	useEffect(() => {
		const node = sentinelRef.current;
		if (!node || !hasMore || isInitialLoading || isLoadingMore) return;
		const observer = new IntersectionObserver(
			(entries) => { if (entries[0].isIntersecting) setPage(p => p + 1); },
			{ rootMargin: "200px" }
		);
		observer.observe(node);
		return () => observer.disconnect();
	}, [hasMore, isInitialLoading, isLoadingMore]);

	return (
		<main className="container">
			<div className="controls-row">
				<HouseFilter />
			</div>
			<div className="w-full">
				<ItemGrid items={characters} isLoading={isInitialLoading} />
				{isLoadingMore && (
					<div className="card-grid mt-4">
						{Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
							<ItemSkeleton key={i} />
						))}
					</div>
				)}
				{hasMore && !isInitialLoading && (
					<div ref={sentinelRef} aria-hidden className="h-1" />
				)}
				{!hasMore && characters.length > 0 && (
					<p className="text-center text-muted-foreground py-6">
						You've reached the end.
					</p>
				)}
			</div>
		</main>
	);
}
