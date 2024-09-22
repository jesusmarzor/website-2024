import Image from "next/image";
import Link from "next/link";
import profile from "@/app/assets/imgs/profile.webp";
import linkedin from "@/app/assets/icons/linkedin.svg";
import github from "@/app/assets/icons/github.svg";
import instagram from "@/app/assets/icons/instagram.svg";
import email from "@/app/assets/icons/email.svg";
import js from "@/app/assets/imgs/js.png";

export default function Home() {
  return (
    <>
      <header className="w-full bg-black-light flex justify-start items-center py-4 px-10">
        <h1 className="">
          <Link href="/" rel="preload" className="text-xl">
            <span className="font-semibold">Jesus</span>marzor
          </Link>
        </h1>
      </header>
      <div className="max-w-[560px] mx-auto py-8 px-6">
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
        <p className="">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor Lorem Ipsum es
          simplemente el texto.
        </p>
        <section className="my-8">
          <h2 className="mb-4 text-xl font-semibold">Experiencia</h2>
          <div className="relative border-l-2 pl-10 mx-1">
            <section className="flex flex-col justify-center items-start gap-1">
              <span className="-left-[11.2px] top-0 absolute rounded-full text-5xl">
                •
              </span>
              <h2 className="text-xl font-bold mt-[.8rem] text-main">
                iOS app developer
              </h2>
              <p className="font-semibold text-xs">
                Sept 2022 - Actualidad | Deloitte, Madrid
              </p>
              <section className="flex flex-col justify-center items-start gap-1 ml-4">
                <h2 className="text-md font-bold text-main mt-3">
                  Mid software developer
                </h2>
                <p className="font-semibold text-xs">
                  Sept 2024 - Actualidad
                </p>
                <ul className="ml-8">
                  <li className="list-disc">
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas.
                  </li>
                  <li className="list-disc">Lorem Ipsum es simplemente el texto de relleno de las imprentas.</li>
                  <li className="list-disc">Lorem Ipsum es simplemente el texto de relleno de las imprentas.</li>
                </ul>
              </section>
              <section className="flex flex-col justify-center items-start gap-1 ml-4">
                <h2 className="text-md font-bold text-main mt-[.8rem]">
                  Junior software developer
                </h2>
                <p className="font-semibold text-xs">
                  Sept 2022 - Ag 2024
                </p>
                <ul className="ml-8">
                  <li className="list-disc">Lorem Ipsum es simplemente el texto de relleno de las imprentas.</li>
                  <li className="list-disc">Lorem Ipsum es simplemente el texto de relleno de las imprentas.</li>
                  <li className="list-disc">Lorem Ipsum es simplemente el texto de relleno de las imprentas.</li>
                </ul>
              </section>
            </section>
          </div>
          <div className="relative border-l-2 pl-10 mx-1">
            <section className="flex flex-col justify-center items-start gap-1">
              <span className="-left-[11.2px] top-0 absolute rounded-full text-5xl">
                •
              </span>
              <h2 className="text-xl font-bold  mt-[0.8rem] text-main">Fontend web developer</h2>
              <p className="font-semibold text-xs">
                Feb 2022 - Ag 2022 | Secrets-On, Madrid
              </p>
              <ul className="ml-8">
                <li className="list-disc">Lorem Ipsum es simplemente el texto de relleno de las imprentas.</li>
                <li className="list-disc">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas.:
                  <ul className="ml-8">
                    <li className="list-disc">Lorem Ipsum es simplemente el texto de relleno de las imprentas.</li>
                    <li className="list-disc">Lorem Ipsum es simplemente el texto de relleno de las imprentas.</li>
                    <li className="list-disc">Lorem Ipsum es simplemente el texto de relleno de las imprentas.</li>
                  </ul>
                </li>
                <li className="list-disc">Lorem Ipsum es simplemente el texto de relleno de las imprentas.</li>
              </ul>
            </section>
          </div>
        </section>
        <div className="my-8 flex flex-col justify-center items-start gap-4">
          <section className="flex justify-between items-center w-full gap-2">
          <h2 className="text-xl font-semibold">Últimos posts</h2>
          <a href="/posts" className="text-sm font-light underline underline-offset-4 hover:text-main">Ver todos</a>
          </section>
          <div className="flex justify-start items-center gap-4 w-full p-4 bg-black-light rounded-2xl border-2 border-black-default hover:border-main">
            <Image className="w-12 object-cover rounded-xl" src={js} alt={""} />
            <section className="flex flex-col justify-center items-start gap-1 w-full">
              <h3 className="font-semibold">¿Qué es el scope en Javascript?</h3>
              <div className="flex justify-between items-center gap-2 flex-wrap w-full text-xs">
                <p className="">3 minutos de lectura</p>
                <p className="self-end">dom, 22 may 2022</p>
              </div>
            </section>
          </div>
          <div className="flex justify-start items-center gap-4 w-full p-4 bg-black-light rounded-2xl border-2 border-black-default hover:border-main">
            <Image className="w-12 object-cover rounded-xl" src={js} alt={""} />
            <section className="flex flex-col justify-center items-start gap-1 w-full">
              <h3 className="font-semibold">¿Qué es el scope en Javascript?</h3>
              <div className="flex justify-between items-center gap-2 flex-wrap w-full text-xs">
                <p className="">3 minutos de lectura</p>
                <p className="self-end">dom, 22 may 2022</p>
              </div>
            </section>
          </div>
          <div className="flex justify-start items-center gap-4 w-full p-4 bg-black-light rounded-2xl border-2 border-black-default hover:border-main">
            <Image className="w-12 object-cover rounded-xl" src={js} alt={""} />
            <section className="flex flex-col justify-center items-start gap-1 w-full">
              <h3 className="font-semibold">¿Qué es el scope en Javascript?</h3>
              <div className="flex justify-between items-center gap-2 flex-wrap w-full text-xs">
                <p className="">3 minutos de lectura</p>
                <p className="self-end">dom, 22 may 2022</p>
              </div>
            </section>
          </div>
        </div>
        <section className="my-8 flex flex-col justify-center items-start gap-4">
          <h2 className="mb-4 text-xl font-semibold">Contacto</h2>
          <a href="https://linkedin.com/in/jesusmarzor" target="_blank" className="flex justify-start items-center gap-4 w-full p-4 bg-black-light rounded-2xl border-2 border-black-default hover:border-main">
            <Image className="w-12 object-cover" src={linkedin} alt={""} />
            <section className="flex flex-col justify-center items-start gap-1 w-full">
              <h3 className="font-semibold">Linkedin</h3>
              <div className="flex justify-start items-center gap-2 flex-wrap w-full text-xs">
                <p className="">@jesusmarzor</p>
              </div>
            </section>
          </a>
          <a href="https://github.com/jesusmarzor" target="_blank" className="flex justify-start items-center gap-4 w-full p-4 bg-black-light rounded-2xl border-2 border-black-default hover:border-main">
            <Image className="w-12 object-cover" src={github} alt={""} />
            <section className="flex flex-col justify-center items-start gap-1 w-full">
              <h3 className="font-semibold">Github</h3>
              <div className="flex justify-start items-center gap-2 flex-wrap w-full text-xs">
                <p className="">@jesusmarzor</p>
              </div>
            </section>
          </a>
          <a href="https://instagram.com/jesusmarzor" target="_blank" className="flex justify-start items-center gap-4 w-full p-4 bg-black-light rounded-2xl border-2 border-black-default hover:border-main">
            <Image className="w-12 object-cover" src={instagram} alt={""} />
            <section className="flex flex-col justify-center items-start gap-1 w-full">
              <h3 className="font-semibold">Instagram</h3>
              <div className="flex justify-start items-center gap-2 flex-wrap w-full text-xs">
                <p className="">@jesusmarzor</p>
              </div>
            </section>
          </a>
          <a href="mailto:contacto@jesusmarzor.pro" target="_blank" className="flex justify-start items-center gap-4 w-full p-4 bg-black-light rounded-2xl border-2 border-black-default hover:border-main">
            <Image className="w-12 object-cover" src={email} alt={""} />
            <section className="flex flex-col justify-center items-start gap-1 w-full">
              <h3 className="font-semibold">Correo</h3>
              <div className="flex justify-start items-center gap-2 flex-wrap w-full text-xs">
                <p className="">contacto@jesusmarzor.pro</p>
              </div>
            </section>
          </a>
        </section>
      </div>
      <footer className="w-full bg-black-light flex flex-col gap-4 justify-center items-center py-4 px-10">
        <h1 className="">
          <Link href="/" rel="preload" className="text-xl">
            <span className="font-semibold">Jesus</span>marzor
          </Link>
        </h1>
        <p className="text-sm">Inspirado en el proyecto de <a className="text-main" href="https://moure.dev" target="_blank">@mouredev</a></p>
      </footer>
    </>
  );
}
