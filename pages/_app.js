import { ChakraProvider, extendTheme, useColorModeValue } from "@chakra-ui/react";
import { AnimateSharedLayout } from 'framer-motion'

function MyApp({ Component, pageProps }) {


  return (
    <ChakraProvider theme={theme}>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </ChakraProvider>
  )
}

export default MyApp



const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    brand: {
      primary: {
        100: "rgba(112, 90, 255, 1)",
        300: "rgba(72, 50, 211, 0.75)",
        400: "rgba(72, 50, 211, 1)",
      },
    },
    white: {
      100: "rgba(255,255,255,1)",
      50: "rgba(255,255,255,.5)",
      30: "rgba(255,255,255,.3)",
    }
  },
  components: {
    Button: {
      baseStyle: ({colorMode})=> ({
        fontFamily: "Radio Grotesk",
        fontWeight: 400,
        letterSpacing: '.03em',
        textShadow: colorMode === "light" ? 'none' : '1px 1px 2px rgba(0,0,0,.3)',
        _active: {
          transform: "scale(.95)",
        }
      }),
      variants: {
        primary: ({colorMode}) => ({
          bg: colorMode === "light" ? "brand.primary.100" : "brand.primary.300",
          color: "white",
          boxShadow: "0 1rem 2rem rgba(72, 50, 211, 0.35)",
          background: "linear-gradient(45deg, rgba(112, 90, 255, 1), rgba(72, 50, 211, 1))",
          _hover: {
            bg: colorMode === "light" ? "linear-gradient(45deg, rgba(112, 90, 255, 1), rgba(72, 50, 211, 1))" : "linear-gradient(45deg, rgba(112, 90, 255, 1), rgba(72, 50, 211, 1))",
          }
        }),
        tertiary: ({colorMode}) => ({
          bg: colorMode === "light" ? "gray.200" : "gray.700",
          color: colorMode === "light" ? "gray.700" : "white",
          _hover: {
            bg: colorMode === "light" ? "gray.300" : "gray.600",
          }
        })
      }
    },
    Text: {
      baseStyle: ({colorMode}) => ({
        fontWeight: 400,
        color: colorMode === "light" ? "gray.600" : "gray.300"
      })
    },
    Heading: {
      baseStyle: {
        fontFamily: 'Radio Grotesk',
        fontWeight: "bold"
      },
      sizes: {
        xs: (props) => ({
          fontWeight: 400,
          letterSpacing: '.2em',
          color: props.colorMode === "light" ? "brand.primary.300" : "brand.primary.100",
        })
      }
    }
  }
})