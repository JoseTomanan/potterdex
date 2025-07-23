import { createContext, useContext, useState } from "react";


type ModalableContextType = {
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
}

const ModalableContext = createContext<ModalableContextType | null>(null);

export function ModalableProvider({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);
	
	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	return (
		<ModalableContext.Provider value={{isOpen, openModal, closeModal}}>
			{children}
		</ModalableContext.Provider>
	);
}

export function useModalable() {
	const context = useContext(ModalableContext);
  if (!context)
		throw new Error("useModalable must be used within ModalableProvider");
  return context;
}
