import { Link } from "react-router";
import { GiOwl as InsideLogo } from "react-icons/gi";

export function Logo() {
	return (
		<Link to="/" className="flex gap-2 items-center group">
			<InsideLogo className="h-6 w-6 stroke-2"/>
			<span className="text-xl font-medium group-hover:text-foreground group-hover:text-shadow-lg group-hover:text-shadow-muted">
				PotterDex
			</span>
		</Link>
	);
}