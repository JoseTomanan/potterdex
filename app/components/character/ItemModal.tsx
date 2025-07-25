import { ItemDetails } from "./ItemDetails";
import type { Character } from "~/lib/types/CharacterItem";
import { DialogContent, DialogDescription, DialogTitle } from "~/components/ui/dialog";


export default function ItemModal(props: Character) {
	console.log("--> Modal opened");

	return (
		<DialogContent className="bg-card rounded sm:max-w-2xl">
			<DialogTitle />
			<DialogDescription />
			<div className="space-y-4">
				<ItemDetails {...props} />
			</div>
		</DialogContent>
	);
}