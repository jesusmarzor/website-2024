"use client";
import Introduce from "@/app/components/Introduce";
import Experience from "@/app/components/Experience";
import Blog from "@/app/components/Blog";
import { PostsConsumer } from "@/app/contexts/PostsContext";
import MainLayout from "@/app/layouts/MainLayout";
import Contact from "@/app/components/Contact";
import { authorName, textLogo } from "@/app/utils/constants";

export default function Home() {
  const posts = PostsConsumer();
  return (
    <>
    <title>{`Website - ${textLogo.name}${textLogo.lastName}`}</title>
    <meta name="description" content={`${authorName} (${textLogo.name}${textLogo.lastName})'s website, web and iOS developer. Here you will find his latest projects and articles developed.`}/>
    <meta property="og:image" content={`https://${process.env.NEXT_PUBLIC_SUPABASE_URL}${process.env.NEXT_PUBLIC_SUPABASE_OG_PATH}home.jpg`}/>
    <meta property="og:url" content=""/>
    <meta property="og:title" content={`Website - ${textLogo.name}${textLogo.lastName}`}/>
    <meta property="og:description" content="Here you will find his latest projects and articles developed."/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content={`Website - ${textLogo.name}${textLogo.lastName}`}/>
    <meta property="twitter:description" content="Here you will find his latest projects and articles developed."/>
    <meta name="twitter:image" content={`https://${process.env.NEXT_PUBLIC_SUPABASE_URL}${process.env.NEXT_PUBLIC_SUPABASE_OG_PATH}home.jpg`}/>
    <MainLayout>
      <Introduce />
      <p>
        Soy ingeniero informático y actualmente trabajo como desarrollador de aplicaciones iOS. 
        Destaco mi curiosidad, responsabilidad y capacidad para resolver problemas.
      </p>
      <p>
        Aquí podrás encontrar mi experiencia profesional, las publicaciones de mi blog y todos mis enlaces de contacto.
      </p>
      <Experience />
      {posts !== null && posts.length > 0 && <Blog />}
      <Contact/>
    </MainLayout>
    </>
  );
}
