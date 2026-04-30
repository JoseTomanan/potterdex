import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { joinWithMiddot, getHouseTokens, houseStyleVars } from "~/lib/utils";
import type { Character } from "~/lib/types/CharacterItem";
import { Dialog, DialogTrigger } from "~/components/ui/dialog";
import { HousePlaceholder } from "./HousePlaceholder";
import ItemModal from "./ItemModal";


export function ItemCard(props: Character) {
	const [imgError, setImgError] = useState(false);
	const h = getHouseTokens(props.house);
	const sub = joinWithMiddot([
		props.nationality || null,
		props.species && props.species !== 'Human' ? props.species : null,
	]);

	return (
		<Dialog>
			<DialogTrigger asChild>
				<button type="button" className="char-card" style={houseStyleVars(h)}>
					<div className="card-img-wrap">
						{props.image && !imgError
							? <img src={props.image} alt={props.name} loading="lazy" className="card-img" onError={() => setImgError(true)} />
							: <HousePlaceholder house={props.house} />
						}
					</div>
					<div className="card-body">
						<div className="card-name">{props.name}</div>
						<div className="card-meta">
							<span className="house-badge">{props.house || 'No house'}</span>
						</div>
						{sub && <div className="card-sub">{sub}</div>}
					</div>
				</button>
			</DialogTrigger>
			<ItemModal {...props} />
		</Dialog>
	);
}


export function ItemSkeleton() {
	return (
		<div className="char-card">
			<Skeleton className="h-[220px] w-full rounded-none" />
			<div className="card-body gap-2">
				<Skeleton className="h-3 w-4/5" />
				<Skeleton className="h-3 w-1/3" />
			</div>
		</div>
	);
}
