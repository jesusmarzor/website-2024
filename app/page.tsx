"use client";
import Introduce from "@/app/components/Introduce";
import Experience from "@/app/components/Experience";
import Blog from "@/app/components/Blog";
import { PostsConsumer } from "./contexts/PostsContext";
import MainLayout from "./layouts/MainLayout";
import Contact from "./components/Contact";

export default function Home() {
  const posts = PostsConsumer();
  return (
    <MainLayout>
      <Introduce />
      <p>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
        las industrias desde el año 1500, cuando un impresor Lorem Ipsum es
        simplemente el texto.
      </p>
      <Experience />
      {posts !== null && posts.length > 0 && <Blog />}
      <Contact/>
    </MainLayout>
  );
}
