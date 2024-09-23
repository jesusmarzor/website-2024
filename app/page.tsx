"use client";
import Image from "next/image";
import linkedin from "@/app/assets/icons/linkedin.svg";
import github from "@/app/assets/icons/github.svg";
import instagram from "@/app/assets/icons/instagram.svg";
import email from "@/app/assets/icons/email.svg";
import Introduce from "@/app/components/Introduce";
import Experience from "@/app/components/Experience";
import Blog from "@/app/components/Blog";
import { PostsConsumer } from "./contexts/PostsContext";
import MainLayout from "./layouts/MainLayout";

export default function Home() {
  const posts = PostsConsumer();
  return (
    <MainLayout>
      <Introduce />
      <p className="">
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
        las industrias desde el año 1500, cuando un impresor Lorem Ipsum es
        simplemente el texto.
      </p>
      <Experience />
      {posts !== null && posts.length > 0 && <Blog />}
      <section className="my-8 flex flex-col justify-center items-start gap-4">
        <h2 className="mb-4 text-xl font-semibold">Contacto</h2>
        <a
          href="https://linkedin.com/in/jesusmarzor"
          target="_blank"
          className="flex justify-start items-center gap-4 w-full p-4 bg-black-light rounded-2xl border-2 border-black-default hover:border-main"
        >
          <Image className="w-12 object-cover" src={linkedin} alt={""} />
          <section className="flex flex-col justify-center items-start gap-1 w-full">
            <h3 className="font-semibold">Linkedin</h3>
            <div className="flex justify-start items-center gap-2 flex-wrap w-full text-xs">
              <p className="">@jesusmarzor</p>
            </div>
          </section>
        </a>
        <a
          href="https://github.com/jesusmarzor"
          target="_blank"
          className="flex justify-start items-center gap-4 w-full p-4 bg-black-light rounded-2xl border-2 border-black-default hover:border-main"
        >
          <Image className="w-12 object-cover" src={github} alt={""} />
          <section className="flex flex-col justify-center items-start gap-1 w-full">
            <h3 className="font-semibold">Github</h3>
            <div className="flex justify-start items-center gap-2 flex-wrap w-full text-xs">
              <p className="">@jesusmarzor</p>
            </div>
          </section>
        </a>
        <a
          href="https://instagram.com/jesusmarzor"
          target="_blank"
          className="flex justify-start items-center gap-4 w-full p-4 bg-black-light rounded-2xl border-2 border-black-default hover:border-main"
        >
          <Image className="w-12 object-cover" src={instagram} alt={""} />
          <section className="flex flex-col justify-center items-start gap-1 w-full">
            <h3 className="font-semibold">Instagram</h3>
            <div className="flex justify-start items-center gap-2 flex-wrap w-full text-xs">
              <p className="">@jesusmarzor</p>
            </div>
          </section>
        </a>
        <a
          href="mailto:contacto@jesusmarzor.pro"
          target="_blank"
          className="flex justify-start items-center gap-4 w-full p-4 bg-black-light rounded-2xl border-2 border-black-default hover:border-main"
        >
          <Image className="w-12 object-cover" src={email} alt={""} />
          <section className="flex flex-col justify-center items-start gap-1 w-full">
            <h3 className="font-semibold">Correo</h3>
            <div className="flex justify-start items-center gap-2 flex-wrap w-full text-xs">
              <p className="">contacto@jesusmarzor.pro</p>
            </div>
          </section>
        </a>
      </section>
    </MainLayout>
  );
}
