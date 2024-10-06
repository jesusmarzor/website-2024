import { FC } from "react"
import { CustomLinkType } from "@/app/utils/enums"
import Link from "next/link"

interface props {
    type: CustomLinkType
    href: string
    children: React.ReactNode
}
const CustomLink: FC<props> = ({type, href, children}) => {
    const classes = "z-20 overflow-hidden flex justify-start items-center gap-4 w-full relative bg-black-80 rounded-2xl p-4 select-none leading-6"
    switch (type) {
    case CustomLinkType.link:
        return (
            <Link
                href={href}
                className={classes}
            >
                {children}
            </Link>
        )
    
    case CustomLinkType.a:
        return (
        <a
            href={href}
            target="_blank"
            className={classes}
            rel="noreferrer"
        >
            {children}
        </a>
        )
    }
}

export default CustomLink