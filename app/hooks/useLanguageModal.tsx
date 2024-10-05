import { useRef, useState } from "react";
import { useLocale } from "next-intl";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { supportedLocales } from "@/app/utils/constants";

const useLanguageModal = () => {
    const router = useRouter()
    const [isShowedModal, setIsShowedModal] = useState<boolean>(false)
    const languageIconRef = useRef<HTMLDivElement>(null)
    const locale = useLocale()

    const changeLanguage = (lang: string) => {
        setCookie("lang", lang)
        isShowedModal && setIsShowedModal(false)
        router.refresh()
    }

    const isActiveLanguage = (lang: string): boolean => (locale || supportedLocales[0]?.code) == lang
    
    return {isShowedModal, setIsShowedModal, languageIconRef, changeLanguage, isActiveLanguage}
}

export default useLanguageModal