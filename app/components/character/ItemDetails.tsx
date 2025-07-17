import type { Character } from "~/lib/types/character";


type ItemDetailsProps = Character;

export function ItemDetails(props: ItemDetailsProps) {
	return (
		<section>
			<h6 className="font-mono text-muted-foreground">
				(PROPER FORMATTING TO FOLLOW)
			</h6>
			<h6>
				SLUG: <span className="font-mono">{props.slug}</span>
			</h6>
			<div className="flex flex-col">
				<h1>{props.name}</h1>
				<span className="flex flex-row">
					{props.born}
					{props.died ? props.died : <></>}
					{props.marital_status}
				</span>
				<h6>{props.gender}</h6>
				<h6>{props.nationality}</h6>
				<h6>{props.skin_color}</h6>
				{props.species}
				{props.wand}
				{props.weight ? props.weight : <></>}
				{props.house}
				{props.alias_names}
				{props.blood_status}
			</div>
			<div>
				{props.image ? props.image : <></>}
				{props.wiki ? (
					<a href="props.wiki" target="_blank" className="hoverable-link">
						Visit wiki
					</a>
				) : <></>}
			</div>
		</section>
	);
}