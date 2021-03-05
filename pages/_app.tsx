import { ChakraWrapper } from '@app/components/ChakraWrapper';
import { Container } from '@chakra-ui/react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraWrapper cookies={pageProps.cookies}>
      <Container maxWidth="container.xl">
        <Component {...pageProps} />
      </Container>
    </ChakraWrapper>
  );
}
