import { createBrowserRouter } from "react-router";
import type { Character as Item } from "~/lib/types/character";
import {
	ItemCard, ItemSkeleton
} from "./ItemCard";


type ItemGridProps = {
	items: Item[];
	isStillLoading: boolean;
}

export function ItemGrid( props: ItemGridProps ) {
	const contents = props.isStillLoading
		? (
			Array.from({ length: 20 }).map((_, i) => (
				<ItemSkeleton key={i} />
			))
		) : (
			props.items.map(({}, i) => (
				<ItemCard {...props.items[i]} />
			))
		);

	return (
		<div className="card-grid">
			{contents}
		</div>
	);
}
