export interface Post {
    id: number
    slug: string
    title: string
    date: string
    tags: string[]
    icon?: string
    image: string
    markdown: string
    lang: string
    readingTime: number
}