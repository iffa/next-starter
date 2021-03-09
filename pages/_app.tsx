import { AppTheme } from '@app/styles/app.theme';
import { defaultSeo } from '@app/utils/default-seo.config';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { Provider } from 'next-auth/client';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider theme={AppTheme}>
        <Container maxWidth="container.xl">
          <DefaultSeo {...defaultSeo} />
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </Provider>
  );
}
