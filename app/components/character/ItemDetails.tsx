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
			<h1>{props.name}</h1>
			<div className="flex flex-row">
				<div className="flex flex-col">
					<span className="flex flex-row">
						<h6>Born: {props.born}</h6>
						{props.died ? (
								<h6>Died: {props.died}</h6>
						) : <></>}
					</span>
					<h6>{props.marital_status}</h6>
					<h6>{props.gender}</h6>
					<h6>{props.nationality}</h6>
					<h6>{props.skin_color}</h6>
					<h6>{props.species}</h6>
					<h6>{props.wand}</h6>
					{props.weight ? (
							<h6>props.weight</h6>
					) : <></>}
					<h6>{props.house}</h6>
					<h6>{props.alias_names}</h6>
					<h6>{props.blood_status}</h6>
				</div>
				<div>
					{props.image ? (
							<img src={props.image} />
					) : <></>}
					{props.wiki ? (
							<a href="props.wiki" target="_blank" className="hoverable-link">
								Visit wiki
							</a>
					) : <></>}
				</div>
			</div>
		</section>
	);
}