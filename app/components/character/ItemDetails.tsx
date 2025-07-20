import { IoPersonSharp } from "react-icons/io5";
import { dashIfNone, joinWithMiddot } from "~/lib/utils";
import type { Character } from "~/lib/types/character";


type ItemDetailsProps = Character;

export function ItemDetails(props: ItemDetailsProps) {
	const Bio = () => (
		<>
			<div className="flex justify-center align-middle bg-popover">
				{props.image ? (
					<img
						src={props.image}
						className="object-contain w-3/4" />
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
					{props.alias_names.length !== 0
						?
							props.alias_names.map((i) => (<> {i}<br/> </>))
						: <>None</>
					}
				</h6>
			</span>
		</>
	);

	const attributeNames = ["Blood status", "Marital status", "Nationality", "Skin color", "Wand", "Weight"];
	const attributeValues = [props.blood_status, props.marital_status, props.nationality, props.skin_color, props.wand, props.weight];

	const subtitle: string = joinWithMiddot([props.house, props.gender, props.species]);

	return (
		<section className="character-slug-page space-y-4">
			<p className="font-mono text-muted">
				slugname: {props.slug}
			</p>
			<h1 className="border-b">{props.name}</h1>

			<span className="text-lg text-muted-foreground">
				{subtitle ? 
						<>{subtitle} &middot; &nbsp;</>
				: <></>}
				{props.wiki ?
						<a href="props.wiki" target="_blank" className="highlight-link">
							Visit wiki
						</a>
				: <></>}
			</span>

			<div className="flex flex-row gap-x-6 mt-2">
				<div className={`flex flex-col gap-1 ${props.image ? "flex-1/3" : "flex-1/4"} px-4 py-2 bg-popover rounded`}>
					<Bio />
				</div>

				<div className="flex flex-col flex-2/3">
					{attributeNames.map((name, i) => (
						<p>
							<span className="font-semibold tracking-wide">{name}:&nbsp;</span>
							{dashIfNone(attributeValues[i])}
						</p>
					))}
				</div>
			</div>
		</section>
	);
}
