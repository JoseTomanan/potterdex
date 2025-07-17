import {
	IoPersonSharp,
	IoMale,
	IoFemale,
	IoMaleFemale,
} from "react-icons/io5";
import { MdQuestionMark } from "react-icons/md";
import { Skeleton } from "../ui/skeleton";
import { Link } from "react-router";


type ItemCardProps = {
	slug: string;
	name: string;
	house: string;
	nationality: string;
	gender: string;
	species: string;
	blood_status: string;
	image: string;
}

export function ItemCard( item: ItemCardProps ) {
	const genderIcon = (item.gender == "Male")
			? <IoMale />
			:
				item.gender == "Female"
					? <IoFemale />
					:
						item.gender == "" || item.gender == "Unknown"
							? <MdQuestionMark />
							: <IoMaleFemale />;

	const houseRelatedStyle = (item.house == "Gryffindor")
			? "text-chart-2 text-shadow-chart-2"
			:
				item.house == "Slytherin"
				? "text-chart-4 text-shadow-chart-4"
				:
					item.house == "Ravenclaw"
					? "text-chart-1 text-shadow-chart-1"
					: "text-chart-3 text-shadow-chart-3";

	return (
		<div className="card gap-y-2 group hover:bg-popover hover:border-input hover:drop-shadow-muted hover:drop-shadow-sm">
			<span className="bg-card h-[125px] flex justify-center">
				{item.image ? (
					<img src={item.image} className="bg-popover group-hover:bg-muted w-full object-contain"/>
				) : (
					<IoPersonSharp className="size-full fill-muted group-hover:bg-popover" />
				)}
			</span>
			<div>
				<span className="flex items-baseline-last gap-2">
					<h3 className="decoration-1 underline-offset-2 hover:underline ">
						<Link to={`/character/${item.slug}`}>{ item.name }</Link>
					</h3>
					{genderIcon}
				</span>
				<h5 className={`text-shadow-xs/20 ${houseRelatedStyle}`} >
					{item.house}
				</h5>
				<h5 className="flex flex-row gap-x-1 items-baseline font-light tracking-tight text-muted-foreground">
					{ item.nationality } &middot; { item.species } &middot; { item.blood_status }
				</h5>
			</div>
		</div>
	);
}


export function ItemSkeleton() {
	return (
		<div className="card gap-y-3 pb-3">
			<Skeleton className="bg-muted h-[125px] w-full rounded" />
			<div className="space-y-2">
				<span className="flex space-x-2">
					<Skeleton className="bg-muted h-5 w-[160px]" />
					<Skeleton className="bg-muted size-5 rounded-full"/>
				</span>
				<Skeleton className="bg-muted h-4 w-[80px]" />
				<Skeleton className="bg-muted h-4 w-[160px]" />
			</div>
		</div>
	);
}