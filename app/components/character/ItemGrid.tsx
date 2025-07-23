import type { Character as Item } from "~/lib/types/character";
import { ItemCard, ItemSkeleton, } from "./ItemCard";
import { ITEMS_PER_PAGE } from "~/lib/constants";


type ItemGridProps = {
	items: Item[];
	isLoading: boolean;
}

export function ItemGrid( props: ItemGridProps ) {
	if (props.isLoading) {
		return (
			<div className="card-grid">
				{Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
						<ItemSkeleton key={i} />
				))}
			</div>
		);
	}

	return (
		<div className="card-grid">
			{props.items.length > 0
				?
					props.items.map(({}, i) => (
						<ItemCard {...props.items[i]} key={i} />
					))
				:
					<h6>No more results found.</h6>
			}
		</div>
	);
}
