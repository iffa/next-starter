import { ChakraWrapper } from '@app/components/ChakraWrapper';
import { defaultSeo } from '@app/utils/default-seo.config';
import { Container } from '@chakra-ui/react';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraWrapper cookies={pageProps.cookies}>
      <Container maxWidth="container.xl">
        <DefaultSeo {...defaultSeo} />
        <Component {...pageProps} />
      </Container>
    </ChakraWrapper>
  );
}

export default appWithTranslation(App);
