import { Metadata } from 'next'
import Post from '@/app/blog/[slug]/post'
import { Post as PostInterface } from '@/app/utils/interfaces'
import supabase from '@/app/utils/supabase'
import { authorName, textLogo } from '@/app/utils/constants'
 
type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata ({ params, }: Props, ): Promise<Metadata> {
  const slug = params.slug
  const { data } = await supabase
  .from('Posts')
  .select()
  .eq("lang", "en")
  .eq("slug", slug)
  const post = (data as PostInterface[])[0]
  return {
    openGraph: {
      title: post?.title ?? "",
      description: `written by ${authorName} (${textLogo.name}${textLogo.lastName})`,
      images: [
        post?.image ?? ""
      ]
    },
    twitter: {
      title: post?.title ?? "",
      description: `written by ${authorName} (${textLogo.name}${textLogo.lastName})`,
      images: [
        post?.image ?? ""
      ]
    }
  }
}
export default Post