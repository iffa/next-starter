import { LoginForm } from '@app/components/auth/LoginForm';
import { DividerWithText } from '@app/components/DividerWithText';
import { Logo } from '@app/components/Logo';
import { getOauthProviders } from '@app/utils/next-auth.utils';
import {
  Box,
  Button,
  Heading,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getCsrfToken, SessionProvider } from 'next-auth/client';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { FaGithub, FaRegSadCry } from 'react-icons/fa';

export function getIconForProvider(provider: SessionProvider): JSX.Element {
  switch (provider.id) {
    case 'github':
      return <FaGithub />;
    default:
      return <FaRegSadCry />;
  }
}

// return type breaks type inferring: https://github.com/vercel/next.js/issues/15913
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
      providers: await getOauthProviders(),
      callbackUrl: context.query['callbackUrl'] as string,
    },
  };
};

/**
 * Custom sign in page implementation with Chakra UI.
 * See: https://next-auth.js.org/configuration/pages
 *
 * @param props
 */
export default function SignIn({
  csrfToken,
  providers,
  callbackUrl,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const { t } = useTranslation();

  return (
    <Box minH="100vh" py="12" px={{ sm: '6', lg: '8' }}>
      <Box maxW={{ sm: 'md' }} mx={{ sm: 'auto' }} w={{ sm: 'full' }}>
        <Box mb={{ base: '10', md: '28' }}>
          <Logo mx="auto" h="8" textAlign="center" />
        </Box>
        <Heading mt="6" textAlign="center" size="xl" fontWeight="extrabold">
          {t('auth:sign-in-title')}
        </Heading>
      </Box>
      <Box maxW={{ sm: 'md' }} mx={{ sm: 'auto' }} mt="8" w={{ sm: 'full' }}>
        <Box
          bg={mode('white', 'gray.700')}
          py="8"
          px={{ base: '4', md: '10' }}
          shadow="base"
          rounded={{ sm: 'lg' }}
        >
          <LoginForm callbackUrl={callbackUrl} />
          <DividerWithText mt="6">{t('auth:or-continue-with')}</DividerWithText>
          <Stack mt="6" spacing="3">
            {providers.map((provider, index) => {
              return (
                <Box
                  as="form"
                  key={index}
                  action={provider.signinUrl}
                  method="POST"
                >
                  <input type="hidden" name="csrfToken" value={csrfToken} />
                  {callbackUrl && (
                    <input
                      type="hidden"
                      name="callbackUrl"
                      value={callbackUrl}
                    />
                  )}
                  <Button
                    color="currentColor"
                    variant="outline"
                    width="100%"
                    leftIcon={getIconForProvider(provider)}
                    type="submit"
                  >
                    {t('auth:login-with', { name: provider.name })}
                  </Button>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
