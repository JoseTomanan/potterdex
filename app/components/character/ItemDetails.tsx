import { FiArrowUpRight } from "react-icons/fi";
import { dashIfNone, joinWithMiddot, getHouseTokens } from "~/lib/utils";
import { HousePlaceholder } from "./HousePlaceholder";
import { Skeleton } from "../ui/skeleton";
import type { Character } from "~/lib/types/CharacterItem";


export function ItemDetails(props: Character) {
	const h = getHouseTokens(props.house);

	const genderSpecies = joinWithMiddot([
		props.gender && props.gender !== 'Unknown' ? props.gender : null,
		props.species && props.species !== 'Human' ? props.species : null,
	]);

	const bio = (
		[
			['Born',           props.born],
			['Died',           props.died],
			['Nationality',    props.nationality],
			['Blood status',   props.blood_status],
			['Marital status', props.marital_status],
		] as [string, string | undefined][]
	).filter(([, v]) => v?.toString().trim());

	const appear = (
		[
			['Eye color',  props.eye_color],
			['Hair color', props.hair_color],
			['Skin color', props.skin_color],
			['Height',     props.height ? `${props.height} cm` : undefined],
			['Weight',     props.weight ? `${props.weight} kg` : undefined],
		] as [string, string | undefined][]
	).filter(([, v]) => v?.toString().trim());

	const magic = (
		[
			['Patronus', props.patronus],
			['Animagus', props.animagus],
			['Boggart',  props.boggart],
			['Wand',     Array.isArray(props.wand) ? props.wand.filter(Boolean).join(', ') : props.wand],
		] as [string, string | undefined][]
	).filter(([, v]) => v?.toString().trim());

	const extra: [string, string][] = [
		...(props.titles?.filter(Boolean).length        ? [['Titles',   props.titles!.join(', ')] as [string, string]] : []),
		...(props.alias_names?.filter(Boolean).length   ? [['Aliases',  props.alias_names.filter(Boolean).join(', ')] as [string, string]] : []),
		...(props.romances?.filter(Boolean).length      ? [['Romances', props.romances.filter(Boolean).join(', ')] as [string, string]] : []),
		...(props.family_members?.filter(Boolean).length ? [['Family',  props.family_members.filter(Boolean).slice(0, 4).join(', ')] as [string, string]] : []),
	];

	const sections = [
		{ title: 'Biography',   fields: bio },
		{ title: 'Appearance',  fields: appear },
		{ title: 'Magic',       fields: magic },
		extra.length ? { title: 'Other', fields: extra } : null,
	].filter((s): s is { title: string; fields: [string, string | undefined][] } => s !== null && s.fields.length > 0);

	return (
		<div
			className="item-details"
			style={{
				'--house-color': h.color,
				'--house-bg':    h.dim,
				'--house-mid':   h.mid,
			} as React.CSSProperties}
		>
			<div className="modal-hero">
				<div className="modal-hero-stripe" />
				<div className="modal-hero-bg-letter">{h.letter}</div>

				<div className="modal-hero-content">
					<div className="modal-hero-img">
						{props.image
							? <img src={props.image} alt={props.name} />
							: <HousePlaceholder house={props.house} size="modal" />
						}
					</div>

					<div className="modal-hero-text">
						{props.house && (
							<div className="modal-house-label">{props.house}</div>
						)}
						<div className="modal-name">{props.name}</div>
						<div className="modal-subtitle">
							{genderSpecies && (
								<span className="modal-subtitle-text">{genderSpecies}</span>
							)}
							{props.wiki && (
								<a href={props.wiki} target="_blank" rel="noopener" className="wiki-link">
									Visit wiki <FiArrowUpRight className="inline align-baseline" />
								</a>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className="modal-body">
				{sections.map(sec => (
					<div className="info-section" key={sec.title}>
						<div className="info-section-title">{sec.title}</div>
						{sec.fields.map(([label, val]) => (
							<div className="info-row" key={label}>
								<div className="info-label">{label}</div>
								<div className="info-value">{dashIfNone(val as string)}</div>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}


export function ItemDetailsSkeleton() {
	return (
		<div className="item-details">
			<div className="modal-hero" style={{ '--house-color': '#6a6460', '--house-bg': 'rgba(106,100,96,0.09)', '--house-mid': 'rgba(106,100,96,0.18)' } as React.CSSProperties}>
				<div className="modal-hero-stripe" />
				<div className="modal-hero-content">
					<div className="modal-hero-img" style={{ background: 'rgba(106,100,96,0.18)' }} />
					<div className="modal-hero-text">
						<Skeleton className="h-3 w-20 mb-2" />
						<Skeleton className="h-8 w-64 mb-3" />
						<Skeleton className="h-3 w-40" />
					</div>
				</div>
			</div>
			<div className="modal-body">
				{[0, 1, 2].map(i => (
					<div className="info-section" key={i}>
						<Skeleton className="h-3 w-24 mb-3" />
						<Skeleton className="h-3 w-full mb-2" />
						<Skeleton className="h-3 w-4/5 mb-2" />
						<Skeleton className="h-3 w-3/5" />
					</div>
				))}
			</div>
		</div>
	);
}
