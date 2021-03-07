import { DefaultSeoProps } from 'next-seo';

/**
 * Site metadata that is to be included in all pages by default.
 * Note: title, description, alternate languages etc. should be set on a
 * per-page basis. Since this template on its own is quite lightweight,
 * they are all here.
 *
 * Learn more: https://github.com/garmeeh/next-seo
 */
export const defaultSeo: DefaultSeoProps = {
  title: 'Next.js starter template',
  description:
    'Opinionated Next.js project starter template, with TypeScript, Chakra UI and more. 🌟',
  /**
   * Include all available locales and their alternative urls in metadata.
   * This is important for SEO if the website is available in multiple locales.
   *
   * See: https://developers.google.com/search/docs/advanced/crawling/localized-versions
   */
  languageAlternates: [
    {
      hrefLang: 'x-default',
      href: 'https://next-starter-iffa.vercel.app/',
    },
    {
      hrefLang: 'en',
      href: 'https://next-starter-iffa.vercel.app/en',
    },
    {
      hrefLang: 'fi',
      href: 'https://next-starter-iffa.vercel.app/fi',
    },
  ],
};
