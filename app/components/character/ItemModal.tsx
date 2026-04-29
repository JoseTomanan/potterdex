import { ItemDetails } from "./ItemDetails";
import type { Character } from "~/lib/types/CharacterItem";
import { DialogContent, DialogDescription, DialogTitle } from "~/components/ui/dialog";


export default function ItemModal(props: Character) {
	return (
		<DialogContent className="bg-card rounded-[14px] sm:max-w-3xl p-0 overflow-hidden gap-0 max-h-[92vh]">
			<DialogTitle className="sr-only">{props.name}</DialogTitle>
			<DialogDescription className="sr-only">
				Character details for {props.name}
			</DialogDescription>
			<ItemDetails {...props} />
		</DialogContent>
	);
}
