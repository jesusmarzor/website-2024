import js from "@/app/assets/imgs/js.png";
import Image from "next/image";
import { SectionLayout } from "../layouts/Section";

const Blog = () => {
    return (
        <SectionLayout
            title="Últimos posts"
            titleButton="Ver todos"
            hrefButton="/posts"
        >
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
        </SectionLayout>
    )
}

export default Blog