import { Button, Heading, Stack, useColorMode } from '@chakra-ui/react';
import React from 'react';

export default function Home(): JSX.Element {
  const { toggleColorMode } = useColorMode();
  return (
    <Stack align="center">
      <Heading paddingY={8}>Hello world.</Heading>
      <Button onClick={toggleColorMode}>Switch color mode</Button>
    </Stack>
  );
}

export { getServerSideProps } from '@app/components/ChakraWrapper';
