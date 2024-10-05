import Logo from "@/app/components/Logo";
import { useTranslations } from "next-intl";
import { textLogo } from "../utils/constants";

const Footer = () => {
  const t = useTranslations()
  return (
    <footer className="w-full flex flex-col gap-4 justify-center items-center px-10 pb-10">
      <Logo isFullName={false} />
      <div className="text-center">
        <p>{t("footer.p1", { 0: textLogo.name.toLowerCase() + textLogo.lastName.toLowerCase()})}</p>
        <p>
          {
            t.rich(
              "footer.p2", 
              {
                0: "@mouredev",
                link: (text) => (
                  <a
                    className="underline underline-offset-4 hover:text-main"
                    href="https://moure.dev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {text}
                  </a>
                )
              }
            )
          }
        </p>
      </div>
    </footer>
  );
};

export default Footer;
