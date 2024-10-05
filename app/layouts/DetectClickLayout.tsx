"use client"
import { LanguageModalConsumer } from "@/app/contexts/LanguageModalContext"

interface props {
    children: React.ReactNode
}

const DetectClickLayout: React.FC<props> = ({children}) => {
    const {isShowedModal: isShowLanguageModal, setIsShowedModal: setIShowLanguageModal} = LanguageModalConsumer()

    const didTapMain = () => {
        isShowLanguageModal && setIShowLanguageModal(!isShowLanguageModal)
    }

    return (
        <main onClick={didTapMain}>
            {children}
        </main>
    )
}

export default DetectClickLayout