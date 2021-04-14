import { ChakraProvider, extendTheme, useColorModeValue } from "@chakra-ui/react";
import { AnimateSharedLayout } from 'framer-motion'
import '../styles/globals.css'

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
        100: "#9E90F5",
        300: "#877AEC",
        400: "#6C5DD2",
      },

    },
    gray: {
      600: '#242832',
      700: '#1F2027',
      800: '#181A21',
      900: '#14161C',
    },
    white: {
      100: "rgba(255,255,255,1)",
      50: "rgba(255,255,255,.5)",
      30: "rgba(255,255,255,.3)",
    }
  },
  styles: {
    global: ({colorMode})=> ({
      "html, body": {
        fontFamily: 'Marcin Antique, Segoe UI, Roboto',
      }
    })
  },
  
  components: {
    Button: {
      baseStyle: ({colorMode})=> ({
        fontFamily: "Marcin Antique, Radio Grotesk",
        fontWeight: 400,
        letterSpacing: '.03em',
        textShadow: colorMode === "light" ? 'none' : '1px 1px 2px rgba(0,0,0,.3)',
        borderTop: '2px solid',
        borderBottom: '2px solid',
        borderTopColor: colorMode === "light" ? 'brand.primary.100' : 'gray.500',
        borderBottomColor: colorMode === "light" ? 'brand.primary.300' : 'gray.800',
        _active: {
          transform: "scale(.95)",
        }
      }),
      variants: {
        primary: ({colorMode}) => ({
          bg: colorMode === "light" ? "brand.primary.100" : "brand.primary.300",
          color: "white",
          boxShadow: "0 1rem 2rem rgba(72, 50, 211, 0.35)",
          bgGradient: "linear-gradient(45deg, brand.primary.300, brand.primary.400)",
          borderTop: '2px solid',
          borderBottom: '2px solid',
          borderTopColor: 'brand.primary.100',
          borderBottomColor: 'brand.primary.300',
          _hover: {
            bgGradient: colorMode === "light" ? "linear-gradient(45deg, brand.primary.300, brand.primary.400)" : "linear-gradient(45deg, brand.primary.300, brand.primary.400)",
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
        fontSize: '18px',
        color: colorMode === "light" ? "gray.600" : "gray.300"
      })
    },
    Heading: {
      baseStyle: {
        fontFamily: '"Marcin Antique"',
        fontWeight: "bold",
        width: "100%"
      },
      variants: {
        h2: {
          fontSize: ['28px', '32px', '36px', '48px'],
          lineHeight: '120%'
        },
        h6: (props) => ({
          fontWeight: 400,
          letterSpacing: '.2em',
          color: props.colorMode === "light" ? "brand.primary.300" : "brand.primary.100",
          fontSize: "md",
          textTransform: 'uppercase',
        })
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