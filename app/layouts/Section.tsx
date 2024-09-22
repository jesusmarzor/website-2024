import { FC, ReactNode } from "react"

interface props {
    children: ReactNode
    title: string
}

export const SectionLayout: FC<props> = ({title, children}) => {
    return (
        <section className="my-8">
            <h2 className="mb-4 text-xl font-semibold">{title}</h2>
            {children}
        </section>
    )
}