import { GoPerson, GoPersonFill } from "react-icons/go";
import { Skeleton } from "../ui/skeleton";

type ItemCardProps = {
	name: string;
	house: string;
	nationality: string;
	gender: string;
	image: string;
}

export function ItemCard( item: ItemCardProps ) {
	return (
		<div className="card gap-y-2">
			<span className="bg-primary-foreground h-[125px] flex justify-center">
				{item.image ? (
					<img src={item.image}/>
				) : (
					<GoPersonFill className="h-[125px] w-[125px] fill-muted" />
				)}
			</span>
			<div>
				<h3>{ item.name }</h3>
				<h5>{ item.house }</h5>
				<span className="flex flex-row gap-x-1">
					<h5>{ item.gender }</h5>
					<span>&middot;</span>
					<h5>{ item.nationality }</h5>
				</span>
			</div>
		</div>
	);
}

export function ItemSkeleton() {
	return (
		<div className="card gap-y-3">
			<Skeleton className="bg-muted h-[125px] w-[280px] rounded" />
			<div className="space-y-2">
				<Skeleton className="bg-muted h-4 w-[240px]" />
				<Skeleton className="bg-muted h-4 w-[200px]" />
				<Skeleton className="bg-muted h-4 w-[100px]" />
			</div>
		</div>
	);
}