"use client"
import { useEffect, useState } from "react"
import supabase from "@/app/utils/supabase"
import { Post } from "@/app/utils/interfaces";
import useDate from "@/app/hooks/useDate";

const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const {isShowedPost} = useDate()
    useEffect(() => {
        supabase
        .from('Posts')
        .select()
        .eq("lang", localStorage.getItem("lang") ?? "es")
        .order("date", {ascending: false})
        .then( res => {
            const posts = res.data?.filter( ({date}) => isShowedPost(date)) as Post[]
            setPosts(posts ?? [])
        })
    }, [])
    return posts
}

export default usePosts