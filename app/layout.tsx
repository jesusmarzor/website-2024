import "@/app/globals.css";
import Header from "@/app/components/Header";
import { PostsProvider } from "@/app/contexts/PostsContext";
import Footer from "@/app/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-myFont text-white-default bg-black-default font-light min-h-screen">
        <main className="flex flex-col justify-between items-center min-h-screen">
            <Header/>
            <PostsProvider>
              <div className="py-8 px-6 mb-auto w-full">
                {children}
              </div>
            </PostsProvider>
            <Footer/>
        </main>
      </body>
    </html>
  );
}
