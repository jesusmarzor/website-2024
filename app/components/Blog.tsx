import Image from "next/image";
import { SectionLayout } from "../layouts/Section";
import { posts } from "@/app/utils/constants";
import Link from "next/link";

const Blog = () => {
    return (
        <SectionLayout
            title="Últimos posts"
            titleButton="Ver todos"
            hrefButton="/posts"
        >
        {
            posts.map( ({slug, title, image, readingTime, date}) => 
                <Link href={slug} key={slug} className="flex justify-start items-center gap-4 w-full p-4 bg-black-light rounded-2xl border-2 border-black-default hover:border-main">
                    <Image className="object-cover rounded-xl" src={image} alt={title} width={48} height={48}/>
                    <section className="flex flex-col justify-center items-start gap-1 w-full">
                    <h3 className="font-semibold">{title}</h3>
                    <div className="flex justify-between items-center gap-2 flex-wrap w-full text-xs">
                        <p className="">{readingTime} minutos de lectura</p>
                        <p className="self-end">{date}</p>
                    </div>
                    </section>
                </Link>
            )
        }
        </SectionLayout>
    )
}

export default Blog