import { getServerSideProps } from '@app/components/ChakraWrapper';
import { Button, Heading, Stack, useColorMode } from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/client';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React from 'react';

export default function Home(): JSX.Element {
  const { t, lang } = useTranslation();
  const { toggleColorMode } = useColorMode();
  const [session, loading] = useSession();

  return (
    <Stack align="center" paddingY={8} spacing={4}>
      <Heading>
        {t('home:hello', { name: session?.user?.email || '🦄' })}
      </Heading>
      <Button onClick={toggleColorMode}>{t('home:toggle-color-mode')}</Button>
      {!session && <Button onClick={() => signIn()}>Sign in</Button>}
      {session && <Button onClick={() => signOut()}>Sign out</Button>}
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
