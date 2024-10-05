import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';
import { defaultLocale, supportedLocales } from '../utils/constants';
 
export default getRequestConfig(async () => {
  const browserLang = headers().get("Accept-Language")?.split(',')[0].split('-')[0]
  const cookieLang = cookies().get("lang")?.value
  let locale = defaultLocale;

  if (cookieLang && supportedLocales.includes(cookieLang)) {
    locale = cookieLang
  } else if (browserLang && supportedLocales.includes(browserLang)) {
    locale = browserLang;
  }
 
  return {
    locale,
    messages: (await import(`@/app/assets/locales/${locale}.json`)).default
  };
});