import { Skeleton } from "~/components/ui/skeleton";

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