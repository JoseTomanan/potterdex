import { createContext, useContext, useState, type ReactNode } from "react";


const ModalableContext = createContext<{isOpen: boolean, openModal: () => void, closeModal: () => void} | null>(null);


export function ModalableProvider({ children }: { children: ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);
	
	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	return (
		<ModalableContext.Provider value={{isOpen, openModal, closeModal}}>
			{children}
		</ModalableContext.Provider>
	);
}


export function useModalableContext() {
	const context = useContext(ModalableContext);
  if (!context)
		throw new Error("useModalable must be used within ModalableProvider");
  return context;
}
