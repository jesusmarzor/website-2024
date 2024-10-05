"use client"
import { createContext, useContext } from "react";
import useModal from "@/app/hooks/useLanguageModal";
import { LanguageModal } from "../utils/interfaces";

interface props {
    children: JSX.Element
}

const modalContext = createContext<LanguageModal | null>(null);

export const LanguageModalProvider: React.FC<props> = ({children}) => {
    const modal = useModal()
    return <modalContext.Provider value={modal}>{children}</modalContext.Provider>
}

export const LanguageModalConsumer = () => {
    const context: LanguageModal | null = useContext(modalContext)
    return context
}