import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';
import { defaultLocale, supportedLocales } from '@/app/utils/constants';
 
export default getRequestConfig(async () => {
  const browserLang = headers().get("Accept-Language")?.split(',')[0].split('-')[0]
  const cookieLang = cookies().get("lang")?.value
  let locale = defaultLocale;
  const supportedLanguages = supportedLocales.map( ({code}) => code)

  if (cookieLang && supportedLanguages.includes(cookieLang)) {
    locale = cookieLang
  } else if (browserLang && supportedLanguages.includes(browserLang)) {
    locale = browserLang;
  }
 
  return {
    locale,
    messages: (await import(`@/app/assets/locales/${locale}.json`)).default
  };
});