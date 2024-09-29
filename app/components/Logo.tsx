import Link from "next/link"
import { initialsLogo, textLogo } from "@/app/utils/constants"
import { FC } from "react"

interface props {
    isFullName: boolean
}

const Logo: FC<props> = ({isFullName}) => {
    return isFullName
    ?  (
        <Link href="/" rel="preload" className="text-2xl">
            <span className="font-semibold">{textLogo.name}</span>{textLogo.lastName}
        </Link>
    )
    :  (
        <Link href="/" rel="preload" className="font-bold text-main text-4xl">
            {initialsLogo}
        </Link>
    )
    
}

export default Logo