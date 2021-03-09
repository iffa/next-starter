import { Button, Heading, Stack } from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/client';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Home(): JSX.Element {
  const { t, lang } = useTranslation();
  const [session] = useSession();
  const router = useRouter();

  function signInI18n(): void {
    router.push(`/auth/signin?callbackUrl=${window.location.href}`);
  }

  return (
    <Stack align="center" paddingY={8} spacing={4}>
      <Heading>
        {t('home:hello', { name: session?.user?.email || '🦄' })}
      </Heading>
      {!session && (
        <Button onClick={() => signInI18n()}>{t('auth:sign-in')}</Button>
      )}
      {session && (
        <Button onClick={() => signOut()}>{t('auth:sign-out')}</Button>
      )}
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
