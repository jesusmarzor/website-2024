"use client"
import { LanguageModalConsumer } from "@/app/contexts/LanguageModalContext"
import languages from "@/app/assets/icons/languages.svg"
import { supportedLocales } from "@/app/utils/constants"
import { useTranslations } from "next-intl"
import Image from "next/image"

export const LanguageIcon: React.FC = () => {
    const t = useTranslations()
    const languageModal = LanguageModalConsumer()
    
    return(
        <div className="relative">
            <button onClick={() => languageModal?.setIsShowedModal(true)}>
                <Image src={languages} width={30} height={30} alt="Language icon"/>
            </button>
            <ul className={`flex flex-col w-32 gap-2 z-30 absolute top-10 right-1 border border-black-extra-light bg-black-default rounded py-2 ${!languageModal?.isShowedModal && "hidden"}`}>
                {
                    supportedLocales.map( lang => {
                        return (
                            <li key={lang.code}>
                                <button className={`hover:text-main w-full text-left pl-2 py-2 ${languageModal?.isActiveLanguage(lang.code) && "text-main  pointer-events-none"}`} onClick={() => languageModal?.changeLanguage(lang.code)} title={lang.nameKey}>{t(lang.nameKey)}</button>
                            </li>
                        )
                    }) 
                }
            </ul>
        </div>
    )
}