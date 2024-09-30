import Logo from "@/app/components/Logo";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-4 justify-center items-center px-10 pb-10">
      <Logo isFullName={false} />
      <div className="text-center">
        <p>Web desarrollada por jesusmarzor.</p>
        <p>
          Diseño inspirado en el proyecto de <a
            className="underline underline-offset-4"
            href="https://moure.dev"
            target="_blank"
            rel="noreferrer"
          >
            @mouredev
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
