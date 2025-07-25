import { IoPersonSharp } from "react-icons/io5";
import { dashIfNone, joinWithMiddot } from "~/lib/utils";
import type { Character } from "~/lib/types/CharacterItem";
import { Skeleton } from "../ui/skeleton";
import { FiArrowUpRight } from "react-icons/fi";


const attributeNames = ["Blood status", "Marital status", "Nationality", "Skin color", "Wand", "Weight"];

const Bio = (props: Character) => (
		<>
			<div className="flex justify-center align-middle bg-popover">
				{props.image ? (
					<img src={props.image}
								className="object-contain size-1/2 lg:size-full" />
				) : (
					<IoPersonSharp className="fill-muted size-2/5 lg:size-full" />
				)}
			</div>
			<hr />
			{props.born && (
					<span className="flex space-x-1 items-baseline">
						<h6><b>Born: </b></h6>
						<h6>{props.born}</h6>
					</span>
			)}
			{props.died && (
					<span className="flex space-x-1 items-baseline">
						<h6><b>Died: </b></h6>
						<h6>{props.died}</h6>
					</span>
				)}
			<span className="flex space-x-1 items-baseline">
				<h6><b>Alias: </b></h6>
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

export function ItemDetails(props: Character) {
	const attributeValues = [props.blood_status, props.marital_status, props.nationality, props.skin_color, props.wand, props.weight];
	const subtitle: string = joinWithMiddot([props.house, props.gender, props.species]);

	return (
		<>
			<h1 className="border-b">{props.name}</h1>
			<span className="text-lg text-muted-foreground">
				{subtitle && (
						<>{subtitle} &middot; &nbsp;</>
				)}
				{props.wiki && (
					<a href={props.wiki} target="_blank" className="highlight-link space-x-1">
						<span>Visit wiki</span>
						<FiArrowUpRight className="inline align-baseline"/>
					</a>
				)}
			</span>
			<div className="flex flex-col lg:flex-row gap-6 mt-2">
				<div className={`flex flex-col gap-1 ${props.image ? "flex-2/3" : "flex-1/2"} px-4 py-2 bg-popover rounded`}>
					<Bio {...props} />
				</div>
				<div className="flex flex-col flex-2/3">
					{attributeNames.map((name, i) => (
						<p key={i}>
							<span className="font-semibold tracking-wide">{name}:&nbsp;</span>
							{dashIfNone(attributeValues[i])}
						</p>
					))}
				</div>
			</div>
		</>
	);
}

export function ItemDetailsSkeleton() {
	return (
		<div className="space-y-6">
			<Skeleton className="w-80 h-4 pb-2" />
			<Skeleton className="w-4/5 h-10" />
			<div className="space-y-2">
				<Skeleton className="w-80 h-5" />
				<Skeleton className="w-80 h-4" />
				<Skeleton className="w-60 h-4" />
				<Skeleton className="w-50 h-4" />
			</div>
		</div>
	);
}