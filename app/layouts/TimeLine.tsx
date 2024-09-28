import { FC, ReactNode } from "react"

interface props {
    children: ReactNode
    title: string
    subtitle: string
}
export const TimeLineLayout: FC<props> = ({title, subtitle, children}) => {
    return (
        <div className="relative border-l-2 pl-10 mx-1">
            <section className="flex flex-col justify-center items-start gap-1">
              <span className="-left-[7.2px] top-2.5 absolute rounded-full text-2xl">
                •
              </span>
              <h2 className="text-xl font-bold mt-[.8rem] text-main">
                {title}
              </h2>
              <p className="font-semibold text-sm">
                {subtitle}
              </p>
              {children}
            </section>
        </div>
    )
}