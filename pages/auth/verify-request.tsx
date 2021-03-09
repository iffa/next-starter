import { Logo } from '@app/components/Logo';
import {
  Box,
  Heading,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

export default function VerifyRequest(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Box minH="100vh" py="12" px={{ sm: '6', lg: '8' }}>
      <Box maxW={{ sm: 'md' }} mx={{ sm: 'auto' }} w={{ sm: 'full' }}>
        <Box mb={{ base: '10', md: '28' }}>
          <Logo mx="auto" h="8" textAlign="center" />
        </Box>
        <Heading mt="6" textAlign="center" size="xl" fontWeight="extrabold">
          {t('auth:check-email-title')}
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
          <Text align="center">{t('auth:check-email-body')}</Text>
          <Text fontSize="sm" align="center" mt={4}>
            {t('auth:check-email-close-tab')}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
