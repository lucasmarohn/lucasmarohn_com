import { ChakraProvider, extendTheme, useColorModeValue } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    brand: {
      primary: {
        100: "rgba(112, 90, 255, 1)",
        300: "rgba(72, 50, 211, 0.75)",
      }
    },
    white: {
      100: "rgba(255,255,255,1)",
      50: "rgba(255,255,255,.5)",
      30: "rgba(255,255,255,.3)",
    }
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 400,
      }
    },
    Heading: {
      baseStyle: {
        fontFamily: 'Radio Grotesk',
      },
      sizes: {
        xs: (props) => ({
          fontWeight: 300,
          letterSpacing: '.2em',
          color: props.colorMode === "light" ? "brand.primary.300" : "brand.primary.100",
        })
      }
    }
  }
})

function MyApp({ Component, pageProps }) {


  return (<ChakraProvider theme={theme}>
    <Component {...pageProps} />
    </ChakraProvider>)
}

export default MyApp
