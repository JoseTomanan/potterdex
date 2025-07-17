import { ItemDetails } from "~/components/item/ItemDetails";
import type { Character } from "~/lib/types/character";

export default function CharacterSlug(character: Character) {
	return (
		<main>
			{/* TODO: bread crumbs */}
			<ItemDetails {...character}/>
		</main>
	);
}