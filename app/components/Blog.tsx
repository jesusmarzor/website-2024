import { SectionLayout } from "@/app/layouts/Section";
import { PostsConsumer } from "@/app/contexts/PostsContext";
import { maxNumCardsInHomeSections } from "@/app/utils/constants";
import useDate from "@/app/hooks/useDate";
import Card from "@/app/components/Card";
import { CustomLinkType } from "@/app/utils/enums";

const Blog = () => {
    const posts = PostsConsumer()?.slice(0, maxNumCardsInHomeSections)
    const { getDateString } = useDate()
    return (
        <SectionLayout
            title="Últimas publicaciones"
            titleButton="Ver todos"
            hrefButton="/blog"
        >
        <div className="flex flex-col justify-center items-center gap-4">
            {
                posts?.map( ({slug, title, icon, readingTime, date}) => 
                    <Card
                        key={slug}
                        type={CustomLinkType.link}
                        href={`/blog/${slug}`}
                        icon={icon}
                        title={title}
                        subtitle={`${readingTime} minutos de lectura`}
                        rightText={getDateString(date)}
                    />
                )
            }
        </div>
        </SectionLayout>
    )
}

export default Blog