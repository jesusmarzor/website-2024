import { SectionLayout } from "@/app/layouts/Section";
import { PostsConsumer } from "@/app/contexts/PostsContext";
import { maxNumCardsInHomeSections } from "@/app/utils/constants";
import useDate from "@/app/hooks/useDate";
import Card from "@/app/components/Card";
import { CustomLinkType } from "@/app/utils/enums";
import { useTranslations } from "next-intl";

const Blog = () => {
    const posts = PostsConsumer()?.slice(0, maxNumCardsInHomeSections)
    const { getDateString } = useDate()
    const t = useTranslations()
    return (
        <SectionLayout
            title={t("common.lastPosts")}
            titleButton={t("common.seeAll")}
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
                        subtitle={t("common.minOfReadingTime", { 0: readingTime})}
                        rightText={getDateString(date)}
                    />
                )
            }
        </div>
        </SectionLayout>
    )
}

export default Blog