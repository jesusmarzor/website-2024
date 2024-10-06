import { FC } from "react"
import { CustomLinkType } from "@/app/utils/enums"
import Link from "next/link"

interface props {
    type: CustomLinkType
    href: string
    children: React.ReactNode
    classes: string
}
const CustomLink: FC<props> = ({type, href, classes, children}) => {
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