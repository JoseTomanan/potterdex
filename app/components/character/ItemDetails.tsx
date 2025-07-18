import { IoPersonSharp } from "react-icons/io5";
import { dashIfNone } from "~/lib/utils";
import type { Character } from "~/lib/types/character";

import styles from "./ItemDetails.module.css";


type ItemDetailsProps = Character;

export function ItemDetails(props: ItemDetailsProps) {
	const Bio = (
		<>
			<div className="flex justify-center align-middle bg-popover">
				{props.image ? (
					<img
						src={props.image}
						className="h-fit object-contain" />
				) : (
					<IoPersonSharp className="fill-muted size-full" />
				)}
			</div>
			<hr />
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
				<h6>
					{props.alias_names.map((i) => (<>
						{i} <br/>
					</> ))}
				</h6>
			</span>
		</>
	);

	return (
		<section className="rounded bg-card border border-border px-8 py-4">
			<p className="font-mono text-muted">
				slugname: {props.slug}
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

			<div className="flex flex-row gap-x-6 mt-2">
				<div className={`flex flex-col gap-1 ${props.image ? "flex-1/3" : "flex-1/4"} px-4 py-2 bg-popover rounded`}>
					{Bio}
				</div>

				<div className="flex flex-col flex-2/3">
					<p>
						<b>Blood status: </b> {dashIfNone(props.blood_status)}
					</p>
					<p>
						<b>Marital status: </b> {dashIfNone(props.marital_status)}
					</p>
					<p>
						<b>Nationality: </b> {dashIfNone(props.nationality)}
					</p>
					<p>
						<b>Skin color: </b> {dashIfNone(props.skin_color)}
					</p>
					<p>
						<b>Wand:</b> {dashIfNone(props.wand)}
					</p>
					{props.weight ? (
							<p><b>Weight: </b> {props.weight}</p>
					) : <></>}
				</div>
			</div>
		</section>
	);
}
