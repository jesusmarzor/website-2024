import Logo from "./Logo"

const Header = () => {
    return (
        <header className="w-full bg-black-light">
            <section className="max-w-[1600px] mx-auto flex justify-start items-center py-4 px-10">
                <h1>
                    <Logo/>
                </h1>
            </section>
        </header>
    )
}

export default Header