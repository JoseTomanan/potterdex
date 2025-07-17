import type { Character } from "~/lib/types/character";


type ItemDetailsProps = Character;

export function ItemDetails(props: ItemDetailsProps) {
	return (
		<section className="container">
			{props.slug}
			<div>
				<span>
					{props.name}
					{props.born}
					{props.died ? props.died : <></>}
				</span>
				{props.gender}
				{props.nationality}
				{props.skin_color}
				{props.species}
				{props.wand}
				{props.weight ? props.weight : <></>}
				{props.house}
				{props.alias_names}
				{props.blood_status}
			</div>
			<div>
				{props.image ? props.image : <></>}
				{props.wiki ? props.wiki : <></>}
			</div>
		</section>
	);
}