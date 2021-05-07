import '@app/styles/global.css';

import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import React from 'react';
import { appWithTranslation } from 'next-i18next';
import { defaultSeo } from '@app/utils/default-seo.config';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
