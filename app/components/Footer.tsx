import Logo from "@/app/components/Logo"

const Footer = () => {
    return (
        <footer className="w-full flex flex-col gap-4 justify-center items-center px-10 pb-10">
            <Logo/>
            <p className="text-sm">Inspirado en el proyecto de <a className="text-main" href="https://moure.dev" target="_blank" rel="noreferrer">@mouredev</a></p>
        </footer>
    )
}

export default Footer