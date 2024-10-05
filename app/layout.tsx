import "@/app/globals.css";
import Header from "@/app/components/Header";
import { PostsProvider } from "@/app/contexts/PostsContext";
import Footer from "@/app/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import {NextIntlClientProvider} from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className="font-myFont text-white-default bg-black-default font-light min-h-screen">
        <main className="flex flex-col justify-between items-center min-h-screen">
            <SpeedInsights/>
            <Analytics/>
            <NextIntlClientProvider messages={messages}>
              <Header/>
              <PostsProvider>
                <div className="py-8 px-6 mb-auto w-full">
                  {children}
                </div>
              </PostsProvider>
              <Footer/>
            </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
