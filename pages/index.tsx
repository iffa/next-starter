import { getServerSideProps } from '@app/components/ChakraWrapper';
import { Button, Heading, Stack, useColorMode } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React from 'react';

export default function Home(): JSX.Element {
  const { t, lang } = useTranslation();
  const { toggleColorMode } = useColorMode();
  return (
    <Stack align="center" paddingY={8}>
      <Heading>{t('home:hello-world')}</Heading>
      <Button onClick={toggleColorMode}>{t('home:toggle-color-mode')}</Button>
      {lang !== 'en' && (
        <Link href="/" locale="en">
          {t('common:english')}
        </Link>
      )}
      {lang !== 'fi' && (
        <Link href="/" locale="fi">
          {t('common:finnish')}
        </Link>
      )}
    </Stack>
  );
}

export { getServerSideProps };
