import { IoPersonSharp } from "react-icons/io5";
import type { Character } from "~/lib/types/character";


type ItemDetailsProps = Character;

export function ItemDetails(props: ItemDetailsProps) {
	return (
		<section className="rounded bg-card border border-border px-2 py-4">
			<p className="font-mono text-muted">
				<b>slugname</b>: {props.slug}
			</p>
			<h1>{props.name}</h1>

			<span className="text-lg text-muted-foreground">
				<span>{props.house} &middot; {props.gender} &middot; {props.species} &middot; </span>
				{props.wiki ? (
					<a href="props.wiki" target="_blank" className="highlight-link">
						Visit wiki
					</a>
				) : <></>}
			</span>

			<div className="flex flex-row gap-x-4">
				<div className="flex flex-col gap-1 flex-1/3 px-2 py-1 bg-popover border">
					<div className="flex justify-center align-middle bg-popover">
						{props.image ? (
							<img
								src={props.image}
								className="h-fit object-contain" />
						) : (
							<IoPersonSharp className="fill-muted size-full" />
						)}
					</div>
					<hr></hr>
					{props.born ? (
							<span className="flex space-x-1 items-baseline">
								<h5>Born: </h5>
								<h6>{props.born}</h6>
							</span>
					) : <></>}
					{props.died ? (
							<span className="flex space-x-1 items-baseline">
								<h5>Died: </h5>
								<h6>{props.died}</h6>
							</span>
						) : <></>}
					<span className="flex space-x-1 items-baseline">
						<h5>Aliases: </h5>
						<h6>{props.alias_names.map((i) => (<>{i}<br/></>))}</h6>
					</span>
				</div>

				<div className="flex flex-col flex-2/3">
					<p>Blood status: {props.blood_status}</p>
					<p>Marital status: {props.marital_status}</p>
					<p>Nationality: {props.nationality}</p>
					<p>Skin color: {props.skin_color}</p>
					<p>Wand: {props.wand}</p>
					{props.weight ? (
							<p>Weight: {props.weight}</p>
					) : <></>}
				</div>
			</div>
		</section>
	);
}