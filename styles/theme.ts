import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";
const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  // breakpoints,
};

const theme = extendTheme({
  config,
  breakpoints,
  colors: {},
  styles: {
    global: (props) => ({
      html: {
        height: "100%",
      },
      body: {
        minHeight: "100%",
        height: "100%",
        fontFamily: "body",
        color: mode("black", "white")(props),
        // bg: mode("white", "gray.800")(props),
        lineHeight: "base",
      },
      a: {
        color: "inherit",
        textDecoration: "none",
        margin: 0,
      },

      ul: {
        listStyle: "none",
      },
    }),
  },
});

export default theme;
