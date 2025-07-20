import {
	IoPersonSharp,
	IoMale,
	IoFemale,
	IoMaleFemale,
} from "react-icons/io5";
import { MdQuestionMark } from "react-icons/md";
import { Skeleton } from "../ui/skeleton";
import { Link } from "react-router";
import { joinWithMiddot } from "~/lib/utils";


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


const willTruncate = (e: HTMLElement) => {
	return e.scrollWidth > e.clientWidth;
};


export function ItemCard( item: ItemCardProps ) {
	const GenderIcon = () => (
			item.gender == "Male"
			? <IoMale />
			: item.gender == "Female"
					? <IoFemale />
					: item.gender == "" || item.gender == "Unknown"
							? <MdQuestionMark />
							: <IoMaleFemale />
		);


	const houseRelatedStyle = (item.house == "Gryffindor")
			? "text-chart-2 text-shadow-chart-2"
			: item.house == "Slytherin"
				? "text-chart-4 text-shadow-chart-4"
				: item.house == "Ravenclaw"
					? "text-chart-1 text-shadow-chart-1"
					: item.house == "Hufflepuff"
						? "text-chart-3 text-shadow-chart-3"
						: "text-muted-foreground text-shadow-muted-foreground font-light";

	
	const nonHouseSubtitle = joinWithMiddot([item.nationality, item.species, item.blood_status]);

	// TODO: use willTruncate() in conjunction with this
	const ResultingSubtitle = () => (
		true
			?
				<h5 className="items-baseline" >
					<span className={`text-shadow-xs/20 ${houseRelatedStyle}`}>
						{item.house ? item.house : "No house"}
					</span>
					{nonHouseSubtitle ?
						<span className="font-light tracking-tight text-muted-foreground">
							&nbsp; &middot; {nonHouseSubtitle}
						</span>
					: <></>}
				</h5>
			:
				<>
					<h6 className={`flex items-center text-shadow-xs/20 ${houseRelatedStyle}`} >
						{item.house ? item.house : "No house"}
					</h6>
					<h6 className="flex flex-row items-baseline font-light tracking-tight text-muted-foreground">
						{nonHouseSubtitle}
					</h6>
				</>
	);


	return (
		<div className="card gap-y-2 group hover:bg-muted">
			<span className="h-70 flex justify-center align-middle">
				{item.image ? (
					<img src={item.image} className="w-full bg-popover object-cover rounded shadow-inner"/>
				) : (
					<IoPersonSharp className="size-full fill-popover rounded" />
				)}
			</span>
			<div className="px-3 pb-3">
				<h3 className="text-foreground/80 decoration-1 underline-offset-2 flex items-center gap-1.5">
					<GenderIcon />
					<Link to={`/character/${item.slug}`} className="truncate w-full hover:underline">{item.name}</Link>
				</h3>
				<ResultingSubtitle />
			</div>
		</div>
	);
}


export function ItemSkeleton() {
	return (
		<div className="card gap-y-3 p-2">
			<Skeleton className="bg-muted h-70 w-full rounded" />
			<div className="space-y-2">
				<span className="flex space-x-2">
					<Skeleton className="bg-muted size-5 rounded-full"/>
					<Skeleton className="bg-muted h-5 w-70" />
				</span>
				<Skeleton className="bg-muted h-4 w-25" />
				<Skeleton className="bg-muted h-4 w-40" />
			</div>
		</div>
	);
}