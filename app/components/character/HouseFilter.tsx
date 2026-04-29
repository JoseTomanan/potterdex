import { HOUSE_NAMES } from "~/lib/constants";
import { getHouseTokens } from "~/lib/utils";
import { useSearchContext } from "~/lib/context/SearchContext";

export function HouseFilter() {
	const { houseFilter, setSearchState } = useSearchContext();

	const pills = [
		{ label: 'All', value: null as string | null, color: '#8a8480', dim: 'rgba(138,132,128,0.12)' },
		...HOUSE_NAMES.map(h => {
			const t = getHouseTokens(h);
			return { label: h, value: h as string | null, color: t.color, dim: t.dim };
		}),
	];

	return (
		<div className="house-filters">
			{pills.map(p => (
				<button
					key={p.label}
					type="button"
					className={`house-pill${houseFilter === p.value ? ' active' : ''}`}
					style={{ '--pill-color': p.color, '--pill-dim': p.dim } as React.CSSProperties}
					onClick={() => setSearchState({ houseFilter: p.value })}
				>
					{p.label}
				</button>
			))}
		</div>
	);
}
