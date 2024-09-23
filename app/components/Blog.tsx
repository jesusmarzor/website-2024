import Image from "next/image";
import { SectionLayout } from "@/app/layouts/Section";
import Link from "next/link";
import { PostsConsumer } from "@/app/contexts/PostsContext";
import { maxNumCardsInHomeSections } from "@/app/utils/constants";
import useDate from "@/app/hooks/useDate";

const Blog = () => {
    const posts = PostsConsumer()?.slice(0, maxNumCardsInHomeSections)
    const { getDateString } = useDate()
    return (
        <SectionLayout
            title="Últimos posts"
            titleButton="Ver todos"
            hrefButton="/blog"
        >
        <div className="flex flex-col justify-center items-center gap-4">
            {
                posts?.map( ({slug, title, icon, readingTime, date}) => 
                    <Link href={`/blog/${slug}`} key={slug} className="flex justify-start items-center gap-4 w-full p-4 bg-black-light rounded-2xl border-2 border-black-default hover:border-main">
                        <Image className="object-cover rounded-xl" src={icon ?? ""} alt={title} width={48} height={48}/>
                        <section className="flex flex-col justify-center items-start gap-1 w-full">
                        <h3 className="font-semibold">{title}</h3>
                        <div className="flex justify-between items-center gap-2 flex-wrap w-full text-xs">
                            <p className="">{readingTime} minutos de lectura</p>
                            <p className="self-end">{getDateString(date)}</p>
                        </div>
                        </section>
                    </Link>
                )
            }
        </div>
        </SectionLayout>
    )
}

export default Blog