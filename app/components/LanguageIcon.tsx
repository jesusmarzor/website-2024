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
                <Image src={languages} width={24} height={24} alt="Language icon"/>
            </button>
            <div className={`absolute top-10 right-1 border border-black-extra-light bg-black-default rounded cursor-default py-2 ${!languageModal?.isShowedModal && "hidden"}`}>
                <ul className="flex flex-col w-32 gap-2 z-10">
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
        </div>
    )
}