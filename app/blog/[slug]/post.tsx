"use client"
import { PostsConsumer } from "@/app/contexts/PostsContext"
import MarkdownCode from "@/app/components/MarkdownCode"

interface Params {
    slug: string
}

interface props {
    params: Params
}

const Post: React.FunctionComponent<props> = ({params})  => {
  const post = PostsConsumer()?.filter( ({slug}) => slug === params.slug)[0]
  return (
    <section className="max-w-[768px] mx-auto overflow-hidden">
      {
        post &&
        <>
          <h2 className="font-bold text-3xl text-center mb-10">{post?.title}</h2>
          <div className="prose prose-invert mx-auto">
          <MarkdownCode markdown={post.markdown}/>
          </div>
        </>
      }
    </section>
  )
}

export default Post