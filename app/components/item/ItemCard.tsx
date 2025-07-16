import {
	IoPersonSharp,
	IoMale,
	IoFemale,
	IoMaleFemale,
	IoTransgender,
} from "react-icons/io5";
import { MdQuestionMark } from "react-icons/md";
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
							? <MdQuestionMark />
							: <IoMaleFemale />
				)
			);

	const houseRelatedStyle = item.house == "Gryffindor"
			?
				`text-chart-2 text-shadow-chart-2`
			: item.house == "Slytherin"
				?
					`text-chart-4 text-shadow-chart-4`
				: item.house == "Ravenclaw"
					? 
						`text-chart-1 text-shadow-foreground`
					:
						`text-chart-3 text-shadow-chart-3`

	return (
		<div className="card gap-y-2">
			<span className="bg-muted h-[125px] flex justify-center">
				{item.image ? (
					<img src={item.image} className="bg-popover w-full object-contain"/>
				) : (
					<IoPersonSharp className="size-full fill-card" />
				)}
			</span>
			<div>
				<span className="flex items-baseline-last gap-2">
					<h3>{item.name}</h3>
					{genderIcon}
				</span>
				<h5 className={`text-shadow-sm/5 ${houseRelatedStyle}`} >
					{item.house}
				</h5>
				<span className="flex flex-row gap-x-1 items-baseline font-light">
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