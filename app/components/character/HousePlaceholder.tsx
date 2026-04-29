import type { IconType } from "react-icons";
import {
	GiLion,
	GiSnake,
	GiEagleHead,
	GiHedgehog,
	GiCrystalWand,
} from "react-icons/gi";
import { getHouseTokens } from "~/lib/utils";

const HOUSE_ICON: Record<string, IconType> = {
	Gryffindor: GiLion,
	Slytherin:  GiSnake,
	Ravenclaw:  GiEagleHead,
	Hufflepuff: GiHedgehog,
};

type Props = { house?: string; size?: 'card' | 'modal' };

export function HousePlaceholder({ house, size = 'card' }: Props) {
	const h = getHouseTokens(house);
	const isModal = size === 'modal';
	const Icon = (house && HOUSE_ICON[house]) || GiCrystalWand;

	return (
		<div
			className="card-placeholder"
			style={{ background: h.dim, '--house-color': h.color } as React.CSSProperties}
		>
			<div className="card-placeholder-symbol" style={{ color: h.color, opacity: 0.45 }}>
				<Icon size={isModal ? 56 : 44} />
			</div>
			<div className="card-placeholder-letter" style={{ fontSize: isModal ? '7rem' : '5rem' }}>
				{h.letter}
			</div>
		</div>
	);
}
