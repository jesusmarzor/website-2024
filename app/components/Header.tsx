import Logo from "@/app/components/Logo"
import { LanguageIcon } from "@/app/components/LanguageIcon";

const Header = () => {

    return (
        <header className="w-full">
            <section className="max-w-[1600px] mx-auto flex justify-between items-center py-4 px-6 sm:px-10">
                <h1>
                    <Logo isFullName={true}/>
                </h1>
                <LanguageIcon/>
            </section>
        </header>
    )
}

export default Header