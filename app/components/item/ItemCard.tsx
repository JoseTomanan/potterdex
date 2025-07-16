
type ItemCardProps = {
	name: string;
	house: string;
	nationality: string;
}

export function ItemCard( item: ItemCardProps ) {
	return (
		<div className="card">
			<h3>{ item.name }</h3>
			<div className="flex flex-row gap-x-1">
				<h5>{ item.house }</h5>
				<span> &middot; </span>
				<h5>{ item.nationality }</h5>
			</div>
		</div>
	);
}