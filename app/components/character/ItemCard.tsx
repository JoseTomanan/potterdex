import {
	IoPersonSharp,
	IoMale,
	IoFemale,
	IoMaleFemale,
} from "react-icons/io5";
import { MdQuestionMark } from "react-icons/md";
import { Skeleton } from "../ui/skeleton";
import { joinWithMiddot, getHouseRelatedStyle } from "~/lib/utils";
import type { Character } from "~/lib/types/CharacterItem";
import { Dialog, DialogTrigger } from "~/components/ui/dialog";
import ItemModal from "./ItemModal";


const getGenderIcon = (gender: String) => (
			gender == "Male"
			? <IoMale />
			: gender == "Female"
					? <IoFemale />
					: gender == "" || gender == "Unknown"
							? <MdQuestionMark />
							: <IoMaleFemale />
		);


export function ItemCard( props: Character ) {
	const GenderIcon = () => getGenderIcon(props.gender);

	const houseRelatedStyle = getHouseRelatedStyle(props.house);	
	const nonHouseSubtitle = joinWithMiddot([props.nationality, props.species, props.blood_status]);


	return (
		<div className="card gap-y-2 group hover:bg-muted">
			<span className="h-70 flex justify-start align-top">
				{props.image ? (
					<img src={props.image} className="size-full bg-popover object-cover rounded shadow-inner"/>
				) : (
					<IoPersonSharp className="size-full fill-popover rounded" />
				)}
			</span>
			<div className="px-3 pb-3">
				<Dialog>
					<DialogTrigger asChild>
						<button className="flex items-center gap-1.5 w-full">
							<GenderIcon />
							<h3 className="text-left text-foreground/80 underline-offset-2 decoration-1 truncate hover:underline w-full cursor-pointer">
								{props.name}
							</h3>
						</button>
					</DialogTrigger>
					<ItemModal {...props}/>
				</Dialog>
				<h5 className="propss-baseline" >
					<span className={`text-shadow-xs/20 ${houseRelatedStyle}`}>
						{props.house ? props.house : "No house"}
					</span>
					{nonHouseSubtitle && (
						<span className="font-light tracking-tight text-muted-foreground">
							&nbsp; &middot; {nonHouseSubtitle}
						</span>
					)}
				</h5>
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