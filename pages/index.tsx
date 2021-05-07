import { GetStaticProps, InferGetStaticPropsType } from 'next';

import Link from 'next/link';
import { NextSeo } from 'next-seo';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function Home(
  // TODO: Do something with props...
  { revalidationTimestamp }: InferGetStaticPropsType<typeof getStaticProps>
): JSX.Element {
  const router = useRouter();
  const { t } = useTranslation(['common', 'home']);

  return (
    <>
      <NextSeo
        title={t('home:seo:title')}
        description={t('home:seo:description')}
        // provide language alternates for SEO
        languageAlternates={[
          {
            hrefLang: 'x-default',
            href: `${process.env.NEXT_PUBLIC_BASE_URL}`,
          },
          {
            hrefLang: 'en',
            href: `${process.env.NEXT_PUBLIC_BASE_URL}/en`,
          },
          {
            hrefLang: 'fi',
            href: `${process.env.NEXT_PUBLIC_BASE_URL}/fi`,
          },
        ]}
      />
      <div className="container mx-auto py-4">
        <h1 className="text-3xl pb-2">{t('home:hello-world')}</h1>
        <h2 className="text-xl pb-2">{revalidationTimestamp}</h2>
        <div className="flex flex-col space-y-2">
          {(router.locales ?? []).map((locale) => (
            // include new locale & current path in link for language switching
            <Link key={locale} locale={locale} href={router.asPath}>
              <a data-cy={locale}>{t(`common:languages:${locale}`)}</a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || 'en', [
        'common',
        'home',
      ])),
      revalidationTimestamp: new Date().toISOString(),
    },
    // revalidate this static page every 1200 seconds
    revalidate: 1200,
  };
};
