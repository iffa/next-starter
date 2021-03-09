import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { signIn } from 'next-auth/client';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import * as React from 'react';

export const LoginForm = ({
  callbackUrl,
}: {
  callbackUrl: string;
}): JSX.Element => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <form
      onSubmit={async (e) => {
        // logging in client-side to workaround some i18n routing issues
        // with next-auth (it doesn't keep locale for any redirect)
        e.preventDefault();

        const email = e.target['email'].value;

        try {
          await signIn('email', {
            email,
            callbackUrl,
            redirect: false,
          });

          router.push(`/auth/verify-request`);
        } catch (error) {
          // TODO!: handle error properly
          console.log(error);
        }
      }}
    >
      <Stack spacing="6">
        <FormControl id="email">
          <FormLabel>{t('auth:email-address')}</FormLabel>
          <Input name="email" type="email" autoComplete="email" required />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          {t('auth:sign-in')}
        </Button>
      </Stack>
    </form>
  );
};
