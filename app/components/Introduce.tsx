import Image from "next/image"
import profile from "@/app/assets/imgs/profile.webp";
import linkedin from "@/app/assets/icons/linkedin.svg";
import github from "@/app/assets/icons/github.svg";
import instagram from "@/app/assets/icons/instagram.svg";
import email from "@/app/assets/icons/email.svg";

const Introduce = () => {
    return (
        <header className="flex justify-start items-center gap-4 my-8">
          <picture className="flex justify-center items-center w-28 h-28 border-4 border-main rounded-full overflow-hidden">
            <Image
              className="w-24 h-24 rounded-full object-cover"
              src={profile}
              alt={""}
            />
          </picture>
          <section className="flex flex-col justify-start items-start gap-1">
            <h2 className="text-2xl">Jesús Martín</h2>
            <p className=" text-main">@jesusmarzor</p>
            <ul className="flex justify-center items-center gap-8 mt-2">
              <li>
                <a href="https://linkedin.com/in/jesusmarzor" target="_blank">
                  <Image className="w-6 h-6" src={linkedin} alt={""} />
                </a>
              </li>
              <li>
                <a href="https://github.com/jesusmarzor" target="_blank">
                  <Image className="w-6 h-6" src={github} alt={""} />
                </a>
              </li>
              <li>
                <a href="https://github.com/jesusmarzor" target="_blank">
                  <Image className="w-6 h-6" src={instagram} alt={""} />
                </a>
              </li>
              <li>
                <a href="mailto:contacto@jesusmarzor.pro" target="_blank">
                  <Image className="w-6 h-6" src={email} alt={""} />
                </a>
              </li>
            </ul>
          </section>
        </header>
    )
}

export default Introduce