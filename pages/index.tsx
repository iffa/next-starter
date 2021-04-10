import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Home(
  // Do something with props...
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: InferGetServerSidePropsType<typeof getServerSideProps>
): JSX.Element {
  const router = useRouter();
  const { t } = useTranslation(['common', 'home']);

  return (
    <div className="container py-4 px-4">
      <h1 className="text-3xl pb-2">{t('home:hello-world')}</h1>
      {router.locale !== 'en' && (
        <Link href="/" locale="en">
          {t('common:english')}
        </Link>
      )}
      {router.locale !== 'fi' && (
        <Link href="/" locale="fi">
          {t('common:finnish')}
        </Link>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
};
