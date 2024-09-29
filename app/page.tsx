"use client";
import Introduce from "@/app/components/Introduce";
import Experience from "@/app/components/Experience";
import Blog from "@/app/components/Blog";
import { PostsConsumer } from "@/app/contexts/PostsContext";
import MainLayout from "@/app/layouts/MainLayout";
import Contact from "@/app/components/Contact";

export default function Home() {
  const posts = PostsConsumer();
  return (
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
  );
}
