"use client"
import { LanguageModalConsumer } from "@/app/contexts/LanguageModalContext"

interface props {
    children: React.ReactNode
}

const DetectClickLayout: React.FC<props> = ({children}) => {
    const languageModal = LanguageModalConsumer()

    const didTapMain = () => {
        languageModal?.isShowedModal && languageModal.setIsShowedModal(!languageModal?.isShowedModal)
    }

    return (
        <main onClick={didTapMain}>
            {children}
        </main>
    )
}

export default DetectClickLayout