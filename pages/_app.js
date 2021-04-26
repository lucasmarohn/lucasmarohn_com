import {
  ChakraProvider,
  extendTheme,
  useColorModeValue,
} from "@chakra-ui/react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <AnimateSharedLayout>
          <Component {...pageProps} />
        </AnimateSharedLayout>
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    brand: {
      primary: {
        100: "#9E90F5",
        300: "#877AEC",
        400: "#6C5DD2",
      },
    },
    // gray: {
    //   700: '#1F2027',
    //   800: '#181A21',
    //   900: '#14161C',
    // },
    white: {
      100: "rgba(255,255,255,1)",
      50: "rgba(255,255,255,.5)",
      30: "rgba(255,255,255,.3)",
    },
  },
  styles: {
    global: ({ colorMode }) => ({
      "html, body": {
        fontFamily: "Marcin Antique, Segoe UI, Roboto",
      },
    }),
  },
  styles: {
    global: ({ colorMode }) => ({
      body: {
        fontSize: "18px",
        lineHeight: "150%",
        backgroundColor: colorMode === "light" ? "gray.50" : "gray.800",
        color: colorMode === "light" ? "gray.600" : "gray.300",
      },
    }),
  },
  components: {
    StatNumber: {
      fontFamily: "Marcin Antique, Radio Grotesk",
    },
    Button: {
      baseStyle: ({ colorMode }) => ({
        fontFamily: "Marcin Antique, Radio Grotesk",
        fontWeight: 400,
        letterSpacing: ".03em",
        textShadow:
          colorMode === "light" ? "none" : "1px 1px 2px rgba(0,0,0,.3)",
        bg: colorMode === "light" ? "gray.50" : "gray.500",
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
          bg: colorMode === "light" ? "brand.primary.100" : "brand.primary.300",
          color: "white",
          boxShadow: "0 .5rem 1rem rgba(72, 50, 211, 0.15)",
          bgGradient:
            "linear-gradient(45deg, brand.primary.300, brand.primary.400)",
          borderTop: "2px solid",
          borderBottom: "2px solid",
          borderTopColor: "brand.primary.100",
          borderBottomColor: "brand.primary.300",
          textShadow: "1px 1px 0px rgba(0,0,0,.3)",
          _hover: {
            transform: "translateY(-5px)",
            boxShadow: "0 1rem 2rem rgba(72, 50, 211, 0.35)",
            bgGradient:
              colorMode === "light"
                ? "linear-gradient(45deg, brand.primary.300, brand.primary.400)"
                : "linear-gradient(45deg, brand.primary.300, brand.primary.400)",
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
        color: colorMode === "light" ? "gray.600" : "gray.300",
        lineHeight: "150%",
      }),
      sizes: {
        '3xl': {
          fontSize: ['18px', '20px', '22px'],
          color: 'red'
        }
      }
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
        fontFamily: '"Marcin Antique"',
        fontWeight: "bold",
        width: "100%",
        color: props.colorMode === "light" ? "gray.800" : "gray.100",
      }),
      variants: {
        h1: {
          fontSize: ['30px', '36px', '48px', '64px']
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
              ? "brand.primary.300"
              : "brand.primary.100",
          fontSize: ['8px', '12px'],
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
