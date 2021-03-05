import { AppTheme } from '@app/styles/app.theme';
import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from '@chakra-ui/react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';

export function ChakraWrapper({
  cookies,
  children,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager;
  return (
    <ChakraProvider theme={AppTheme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? '',
    },
  };
};
