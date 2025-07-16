import {
	IoPersonSharp,
	IoMale,
	IoFemale,
	IoMaleFemale,
	IoTransgender,
} from "react-icons/io5";
import { Skeleton } from "../ui/skeleton";


type ItemCardProps = {
	name: string;
	house: string;
	nationality: string;
	gender: string;
	species: string;
	image: string;
}

export function ItemCard( item: ItemCardProps ) {
	const genderIcon = (item.gender == "Male")
			? (
				<IoMale />
			) : (
				item.gender == "Female"
					? <IoFemale />
					: (
						(item.gender == "" || item.gender == "Unknown")
							? <b className="h-5 items-baseline">?</b>
							: <IoMaleFemale />
				)
			);

	return (
		<div className="card gap-y-2">
			<span className="bg-primary-foreground h-[125px] flex justify-center">
				{item.image ? (
					<img src={item.image}/>
				) : (
					<IoPersonSharp className="size-full fill-muted" />
				)}
			</span>
			<div>
				<span className="flex items-baseline-last gap-2">
					<h3>{item.name}</h3>
					{genderIcon}
				</span>
				<h5>{ item.house }</h5>
				<span className="flex flex-row gap-x-1 items-baseline">
					<h5>{ item.nationality }</h5>
					<span>&middot;</span>
					<h5>{ item.species }</h5>
				</span>
			</div>
		</div>
	);
}


export function ItemSkeleton() {
	return (
		<div className="card gap-y-3">
			<Skeleton className="bg-muted h-[125px] w-full rounded" />
			<div className="space-y-2.5">
				<span className="flex space-x-2">
					<Skeleton className="bg-muted h-5 w-[160px]" />
					<Skeleton className="bg-muted size-5 rounded-full"/>
				</span>
				<Skeleton className="bg-muted h-4 w-[100px]" />
				<Skeleton className="bg-muted h-4 w-[120px]" />
			</div>
		</div>
	);
}