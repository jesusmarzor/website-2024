import { useEffect, useState } from "react"
import supabase from "@/app/utils/supabase"
import { Post } from "@/app/utils/interfaces";
import useDate from "@/app/hooks/useDate";
import { useLocale } from "next-intl";

const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const {isShowedPost} = useDate()
    const locale = useLocale()
    useEffect(() => {
        supabase
        .from('Posts')
        .select()
        .eq("lang", locale)
        .lte("date", new Date().toISOString())
        .order("date", {ascending: false})
        .then( res => {
            const posts = res.data?.filter( ({date}) => isShowedPost(date)) as Post[]
            setPosts(posts ?? [])
        })
    }, [locale])
    return posts
}

export default usePosts