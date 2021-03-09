import { Heading, HeadingProps } from '@chakra-ui/react';
import * as React from 'react';

export const Logo = (props: HeadingProps): JSX.Element => {
  return (
    <Heading as="h2" {...props}>
      next-starter
    </Heading>
  );
};
