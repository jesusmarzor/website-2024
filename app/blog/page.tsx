"use client"
import { PostsConsumer } from "@/app/contexts/PostsContext";
import useDate from "@/app/hooks/useDate";
import MainLayout from "@/app/layouts/MainLayout";
import Card from "@/app/components/Card";
import { CustomLinkType } from "@/app/utils/enums";
import { authorName, textLogo } from "@/app/utils/constants";
import Loader from "@/app/components/Loader";

const Blog = () => {
    const posts = PostsConsumer()
    const { getDateString } = useDate()
    return (
        <>
        <title>{`Blog - ${textLogo.name}${textLogo.lastName}`}</title>
        <meta name="description" content={`Articles created by ${authorName} (${textLogo.name}${textLogo.lastName}), web and iOS developer.`}/>
        <meta property="og:image" content={`https://${process.env.NEXT_PUBLIC_SUPABASE_URL}${process.env.NEXT_PUBLIC_SUPABASE_OG_PATH}blog.jpg`}/>
        <meta property="og:url" content=""/>
        <meta property="og:title" content={`Blog - ${textLogo.name}${textLogo.lastName}`}/>
        <meta property="og:description" content="Here you can find my blog posts"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={`Blog - ${textLogo.name}${textLogo.lastName}`}/>
        <meta property="twitter:description" content="Here you can find my blog posts"/>
        <meta name="twitter:image" content={`https://${process.env.NEXT_PUBLIC_SUPABASE_URL}${process.env.NEXT_PUBLIC_SUPABASE_OG_PATH}blog.jpg`}/>
        {
            posts?.length === 0
            ? <Loader/>
            : 
            <MainLayout>
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
            </MainLayout>
        }
        </>
    )
}

export default Blog