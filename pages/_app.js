import {
  ChakraProvider,
  extendTheme,
  useColorModeValue,
} from "@chakra-ui/react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import "../styles/globals.css";

import Router from "next/router";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  Router.onRouteChangeComplete = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };
  return (
    <AnimateSharedLayout>
      <AnimatePresence exitBeforeEnter>
        <ChakraProvider theme={theme}>
          <NextSeo
            title={`Emergence Brand Design`}
            description="Harnessing the power of story, empathy, and design to help businesses engage with their audience in a meaningful way and drive measurable results."
            openGraph={{
              title: `Emergence Brand Design`,
              description:
                "Harnessing the power of story, empathy, and design to help businesses engage with their audience in a meaningful way and drive measurable results.",
              site_name: "Emergence",
            }}
          />
          <Component {...pageProps} />
        </ChakraProvider>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default MyApp;

export const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    brand: {
      primary: {
        100: "hsl(147.5, 100%, 64.5%)",
        300: "hsl(147.5, 100%, 64.5%)",
        400: "hsl(162.1, 69.5%, 39.8%)",
      },
    },
    gray: {
      25: "#FBFCFE",
      50: "#f0f6fc",
      100: "#c9d1d9",
      200: "#b1bac4",
      300: "#8b949e",
      400: "#6e7681",
      500: "#484f58",
      600: "#1c1f22",
      700: "#1c1f22",
      800: "#0f0f0f",
      900: "#090909",
      1000: "#000000",
    },
    white: {
      100: "rgba(255,255,255,1)",
      80: "rgba(255,255,255,.8)",
      70: "rgba(255,255,255,.7)",
      60: "rgba(255,255,255,.6)",
      50: "rgba(255,255,255,.5)",
      40: "rgba(255,255,255,.4)",
      30: "rgba(255,255,255,.3)",
      20: "rgba(255,255,255,.2)",
      10: "rgba(255,255,255,.1)",
    },
  },
  styles: {
    global: ({ colorMode }) => ({
      body: {
        fontSize: "18px",
        lineHeight: "150%",
        fontFamily: "SpaceGrotesk",
        backgroundColor: colorMode === "light" ? "gray.25" : "gray.800",
        color: colorMode === "light" ? "gray.600" : "gray.200",
        letterSpacing: ".02em",
        lineHeight: "28px",
      },
    }),
  },
  components: {
    StatNumber: {
      fontFamily: "SpaceGrotesk, Radio Grotesk",
    },
    Button: {
      baseStyle: ({ colorMode }) => ({
        fontFamily: "SpaceGrotesk, Radio Grotesk",
        fontWeight: 600,
        letterSpacing: ".03em",
        fontSize: "18px",
        bg: colorMode === "light" ? "gray.50" : "gray.600",
        borderRadius: "10px",
        _hover: {
          bg: colorMode === "light" ? "gray.100" : "gray.500",
        },
        _focus: {
          boxShadow: "0",
        },
        _active: {
          transform: "scale(.95)",
        },
      }),
      defaultProps: {
        size: "lg",
      },
      variants: {
        primary: ({ colorMode }) => ({
          bg: colorMode === "light" ? "brand.primary.400" : "brand.primary.300",
          color: colorMode === "light" ? "white" : "gray.900",
          boxShadow: "0 0 0 hsl(147.5, 100%, 64.5%)",
          border: "3px solid transparent",
          padding: "15px 35px",
          height: "auto",
          minHeight: "48px",
          _hover: {
            bg:
              colorMode === "light" ? "brand.primary.400" : "brand.primary.300",
            outline: 0,
            borderColor: colorMode === "light" ? "gray.50" : "gray.900",
            boxShadow:
              colorMode === "light"
                ? "0 0 0 .2rem hsl(162.1, 69.5%, 39.8%)"
                : "0 0 0 .2rem hsl(147.5, 100%, 64.5%)",
          },
        }),
        secondary: ({ colorMode }) => ({
          border: "1px solid",
          color: colorMode === "light" ? "gray.700" : "gray.100",
          borderColor:
            colorMode === "light" ? "rgba(72, 50, 211, 0.4)" : "gray.800",
          bgGradient:
            "linear(to bottom right, rgba(72, 50, 211, 0.00), rgba(72, 50, 211, 0.1))",
          boxShadow:
            "inset 0 1px 2px white, 0 .5rem 1rem rgba(72, 50, 211, 0.15)",
          _hover: {
            transform: "translateY(-5px)",
            color: colorMode === "light" ? "brand.primary.400" : "gray.100",
            borderColor:
              colorMode === "light" ? "brand.primary.400" : "gray.800",
            bgGradient:
              "linear(to bottom right, rgba(72, 50, 211, 0.1), rgba(72, 50, 211, 0.25))",
            boxShadow:
              "inset 0 1px 2px white, 0 .5rem 1rem rgba(72, 50, 211, 0.15)",
          },
        }),
        tertiary: ({ colorMode }) => ({
          border: "1px solid",
          color: colorMode === "light" ? "gray.700" : "gray.100",
          borderColor: colorMode === "light" ? "gray.300" : "gray.800",
          boxShadow: "inset 0 1px 2px white, 0 .5rem 1rem rgba(0, 50, 100, .1)",
          bgGradient:
            colorMode === "light"
              ? "linear(to bottom right, gray.50, gray.100)"
              : "linear(to top left, gray.100, gray.50)",
          _hover: {
            transform: "translateY(-5px)",
            color: colorMode === "light" ? "brand.primary.400" : "gray.100",
            borderColor:
              colorMode === "light" ? "brand.primary.400" : "gray.800",
            bgGradient:
              "linear(to bottom right, rgba(72, 50, 211, 0.15), rgba(72, 50, 211, 0.35))",
            boxShadow:
              "inset 0 1px 2px white, 0 .5rem 1rem rgba(72, 50, 211, 0.15)",
          },
        }),
      },
    },
    Text: {
      baseStyle: ({ colorMode }) => ({
        fontWeight: 400,
        fontSize: ["18px", null, "22px"],
        color: colorMode === "light" ? "gray.500" : "gray.200",
        lineHeight: "150%",
        fontFamily: "'SpaceGrotesk'",
      }),
      sizes: {
        "3xl": {
          fontSize: ["18px", "20px", "22px"],
          color: "red",
        },
      },
    },
    UnorderedList: {
      baseStyle: ({ colorMode }) => ({
        color: colorMode === "light" ? "brand.400" : "brand.200",
      }),
    },
    OrderedList: {
      baseStyle: ({ colorMode }) => ({
        color: colorMode === "light" ? "brand.400" : "brand.200",
      }),
    },
    ListItem: {
      baseStyle: ({ colorMode }) => ({
        fontWeight: 400,
        fontSize: ["18px", null, "22px"],
        color: colorMode === "light" ? "gray.600" : "gray.300",
        lineHeight: "150%",
      }),
    },
    Heading: {
      baseStyle: (props) => ({
        fontFamily: '"SpaceGrotesk"',
        fontWeight: "bold",
        width: "100%",
        color: props.colorMode === "light" ? "gray.800" : "white.100",
      }),
      variants: {
        h1: {
          fontSize: ["28px", "34px", "38px", "42px"],
        },
        h2: {
          fontSize: ["28px", "32px", "36px", "48px"],
          lineHeight: "120%",
        },
        h3: (props) => ({
          fontSize: [24, 28, 32, 40],
          color: props.colorMode === "light" ? "gray.700" : "gray.100",
        }),
        h6: (props) => ({
          fontWeight: 400,
          letterSpacing: ".2em",
          color:
            props.colorMode === "light"
              ? "brand.primary.400"
              : "brand.primary.100",
          fontSize: ["12px", "14px", "16px"],
          textTransform: "uppercase",
        }),
      },
      sizes: {
        xs: (props) => ({
          fontWeight: 400,
          letterSpacing: ".2em",
          color:
            props.colorMode === "light"
              ? "brand.primary.300"
              : "brand.primary.100",
        }),
      },
    },
  },
});
