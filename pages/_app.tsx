import { defaultSeo } from '@app/utils/default-seo.config';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import React from 'react';
import 'tailwindcss/tailwind.css';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
