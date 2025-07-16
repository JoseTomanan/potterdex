
type ItemCardProps = {
	name: String;

}

export function ItemCard( item: ItemCardProps ) {
	return (
		<div className="card">
			<h2>{ item.name }</h2>
		</div>
	);
}