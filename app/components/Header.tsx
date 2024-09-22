import Link from "next/link"
import { textLogo } from "@/app/utils/constants"

const Header = () => {
    return (
        <header className="w-full bg-black-light flex justify-start items-center py-4 px-10">
        <h1 className="">
          <Link href="/" rel="preload" className="text-xl">
            <span className="font-semibold">{textLogo.name}</span>{textLogo.lastName}
          </Link>
        </h1>
      </header>
    )
}

export default Header