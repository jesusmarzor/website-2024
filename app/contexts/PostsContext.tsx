"use client"
import { createContext, useContext } from "react";
import usePosts from "@/app/hooks/usePosts";
import { Post } from "@/app/utils/interfaces";

interface props {
    children: JSX.Element
}

const postsContext = createContext<Post[] | null>(null);

export const PostsProvider: React.FC<props> = ({children}) => {
    const posts: Post[] = usePosts()
    return <postsContext.Provider value={posts}>{children}</postsContext.Provider>
}

export const PostsConsumer = () => {
    const context: Post[] | null = useContext(postsContext)
    return context
}