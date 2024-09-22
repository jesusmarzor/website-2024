import Link from "next/link"
import { FC, ReactNode } from "react"

interface props {
    children: ReactNode
    title: string
    titleButton?: string
    hrefButton?: string
}

export const SectionLayout: FC<props> = ({title, titleButton = null, hrefButton = null, children}) => {
    return (
        <div className="my-8">
            <section className="flex justify-between items-center gap-2 mb-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                {
                    (titleButton && hrefButton)
                    && <Link href={hrefButton} className="text-sm font-light underline underline-offset-4 hover:text-main">{titleButton}</Link>
                }
            </section>
            {children}
        </div>
    )
}