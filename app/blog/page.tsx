"use client"
import { PostsConsumer } from "@/app/contexts/PostsContext";
import useDate from "@/app/hooks/useDate";
import MainLayout from "@/app/layouts/MainLayout";
import Card from "@/app/components/Card";

const Blog = () => {
    const posts = PostsConsumer()
    const { getDateString } = useDate()
    return (
        <MainLayout>
            <div className="flex flex-col justify-center items-center gap-4">
                {
                    posts?.map( ({slug, title, icon, readingTime, date}) => 
                        <Card
                            key={slug}
                            icon={icon}
                            title={title}
                            subtitle={`${readingTime} minutos de lectura`}
                            rightText={getDateString(date)}
                        />
                    )
                }
            </div>
        </MainLayout>
    )
}

export default Blog