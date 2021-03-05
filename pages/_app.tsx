import { ChakraWrapper } from '@app/components/ChakraWrapper';
import { defaultSeo } from '@app/utils/default-seo.config';
import { Container } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraWrapper cookies={pageProps.cookies}>
      <Container maxWidth="container.xl">
        <DefaultSeo {...defaultSeo} />
        <Component {...pageProps} />
      </Container>
    </ChakraWrapper>
  );
}
