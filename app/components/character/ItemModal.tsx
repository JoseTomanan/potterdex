import { ItemDetails } from "./ItemDetails";
import type { Character } from "~/lib/types/character";
import { DialogContent, DialogDescription, DialogTitle } from "~/components/ui/dialog";


export default function ItemModal(props: Character) {
	console.log("--> Modal opened");

	return (
		<DialogContent className="bg-card sm:max-w-xl">
			<DialogTitle />
			<DialogDescription />
			<div className="space-y-4">
				<ItemDetails {...props} />
			</div>
		</DialogContent>
	);
}