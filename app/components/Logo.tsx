import Link from "next/link"
import { textLogo } from "@/app/utils/constants"

const Logo = () => {
    return (
        <Link href="/" rel="preload" className="text-xl">
            <span className="font-semibold">{textLogo.name}</span>{textLogo.lastName}
        </Link>
    )
}

export default Logo