import { Link } from "react-router";
import { GiOwl as InsideLogo } from "react-icons/gi";

export function Logo() {
	return (
		<Link to="/" className="flex gap-2 items-center">
			<span className="px-1">
				<InsideLogo className="h-5 w-5 stroke-2"/>
			</span>
			<span className="text-xl font-medium">PotterDex</span>
		</Link>
	);
}