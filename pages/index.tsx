import {
  chakraWrapperProps,
  ChakraWrapperPropsType,
} from '@app/components/ChakraWrapper';
import { Button, Heading, Stack, useColorMode } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Home(): JSX.Element {
  const router = useRouter();
  const { t } = useTranslation(['common', 'home']);
  const { toggleColorMode } = useColorMode();

  return (
    <Stack align="center" paddingY={8}>
      <Heading>{t('home:hello-world')}</Heading>
      <Button onClick={toggleColorMode}>{t('home:toggle-color-mode')}</Button>
      {router.locale !== 'en' && (
        <Link href="/" locale="en">
          {t('common:english')}
        </Link>
      )}
      {router.locale !== 'fi' && (
        <Link href="/" locale="fi">
          {t('common:finnish')}
        </Link>
      )}
    </Stack>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const chakra: ChakraWrapperPropsType = await chakraWrapperProps(context);

  return {
    props: {
      ...chakra.props,
      ...(await serverSideTranslations(context.locale, ['common', 'home'])),
    },
  };
};
