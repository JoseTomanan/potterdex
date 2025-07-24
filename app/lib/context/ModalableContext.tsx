import { createContext, useContext, useState, type ReactNode } from "react";


type ModalableContextType = {
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
}

const ModalableContext = createContext<ModalableContextType | null>(null);


export function ModalableProvider({ children }: { children: ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);
	
	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	return (
		<ModalableContext.Provider value={{isOpen, openModal, closeModal}}>
			{children}
			<h1 className={`z-100 font-bold ${isOpen ? "" : "hidden"}`}>MODAL IS OPEN</h1>
			{isOpen
				?
					<>
						{console.log("--> It reached this point.")}
						{closeModal()}
					</>
				:
					<>
						{console.log("--> The modal is now closed.")}
					</>
			}
		</ModalableContext.Provider>
	);
}


export function useModalable() {
	const context = useContext(ModalableContext);
  if (!context)
		throw new Error("useModalable must be used within ModalableProvider");
  return context;
}
