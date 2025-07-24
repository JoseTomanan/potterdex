import { Dialog, DialogContent } from "@radix-ui/react-dialog";
import { useModalableContext } from "~/lib/context/ModalableContext";


export default function ItemModal() {
	console.log("--> Modal opened");

	const { isOpen, closeModal } = useModalableContext();

	return (
		<Dialog open={isOpen} onOpenChange={closeModal}>
			<DialogContent className="bg-card z-51">
				<h1>test</h1>
			</DialogContent>
		</Dialog>
	);
}