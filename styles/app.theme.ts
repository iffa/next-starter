import { Colors, extendTheme } from '@chakra-ui/react';

const colors: Colors = {
  //? Override default Chakra UI colors or add new
};

/**
 * Default theme reference: https://github.com/chakra-ui/chakra-ui/tree/main/packages/theme
 */
export const AppTheme = extendTheme({
  colors,
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
  fonts: {
    // TODO: Add custom typography
    // heading: "Montserrat, sans-serif",
    // body: "Montserrat, sans-serif",
    // mono: "Montserrat, sans-serif",
  },
});
