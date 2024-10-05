import { Dispatch, SetStateAction } from "react"

export interface Post {
    id: number
    slug: string
    title: string
    date: string
    tags: string[]
    icon?: string
    image: string
    markdown: string
    lang: string
    readingTime: number
}

export interface ContactOption {
    url: string
    img: string
    name: string
    description: string
}

export interface Language {
    nameKey: string
    code: string
}

export interface LanguageModal {
    isShowedModal: boolean
    setIsShowedModal: Dispatch<SetStateAction<boolean>>
    changeLanguage: (lang: string) => void
    isActiveLanguage: (lang: string) => boolean
}