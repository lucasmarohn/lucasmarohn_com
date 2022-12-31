const theme = {
  colors: {
    brand: {
      primary: {
        100: "hsl(147.5, 100%, 64.5%)",
        300: "hsl(147.5, 100%, 64.5%)",
        400: "hsl(162.1, 69.5%, 31%)",
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
      "html, body": {
        fontSize: "18px",
        lineHeight: "150%",
        fontFamily: "SpaceGrotesk",
        letterSpacing: ".02em",
        lineHeight: "28px",
      },
      "body.chakra-ui-light": {
        backgroundColor: "gray.25",
        color: 'gray.600',
      },
      "body.chakra-ui-dark": {
        backgroundColor: "gray.800",
        color: "gray.200",
      }
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
        bg: colorMode !== "dark" ? "gray.50" : "gray.600",
        borderRadius: "10px",
        _hover: {
          bg: colorMode !== "dark" ? "gray.100" : "gray.500",
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
          bg: colorMode !== "dark" ? "brand.primary.400" : "brand.primary.300",
          color: colorMode !== "dark" ? "white" : "gray.900",
          boxShadow: "0 0 0 hsl(147.5, 100%, 64.5%)",
          border: "3px solid transparent",
          padding: "15px 35px",
          height: "auto",
          minHeight: "48px",
          _hover: {
            bg:
              colorMode !== "dark" ? "brand.primary.400" : "brand.primary.300",
            outline: 0,
            borderColor: colorMode !== "dark" ? "gray.50" : "gray.900",
            boxShadow:
              colorMode !== "dark"
                ? "0 0 0 .2rem hsl(162.1, 69.5%, 39.8%)"
                : "0 0 0 .2rem hsl(147.5, 100%, 64.5%)",
          },
        }),
        secondary: ({ colorMode }) => ({
          border: "1px solid",
          color: colorMode !== "dark" ? "gray.700" : "gray.100",
          borderColor:
            colorMode !== "dark" ? "rgba(72, 50, 211, 0.4)" : "gray.800",
          bgGradient:
            "linear(to bottom right, rgba(72, 50, 211, 0.00), rgba(72, 50, 211, 0.1))",
          boxShadow:
            "inset 0 1px 2px white, 0 .5rem 1rem rgba(72, 50, 211, 0.15)",
          _hover: {
            transform: "translateY(-5px)",
            color: colorMode !== "dark" ? "brand.primary.400" : "gray.100",
            borderColor:
              colorMode !== "dark" ? "brand.primary.400" : "gray.800",
            bgGradient:
              "linear(to bottom right, rgba(72, 50, 211, 0.1), rgba(72, 50, 211, 0.25))",
            boxShadow:
              "inset 0 1px 2px white, 0 .5rem 1rem rgba(72, 50, 211, 0.15)",
          },
        }),
        tertiary: ({ colorMode }) => ({
          border: "1px solid",
          color: colorMode !== "dark" ? "gray.700" : "gray.100",
          borderColor: colorMode !== "dark" ? "gray.300" : "gray.800",
          boxShadow: "inset 0 1px 2px white, 0 .5rem 1rem rgba(0, 50, 100, .1)",
          bgGradient:
            colorMode !== "dark"
              ? "linear(to bottom right, gray.50, gray.100)"
              : "linear(to top left, gray.100, gray.50)",
          _hover: {
            transform: "translateY(-5px)",
            color: colorMode !== "dark" ? "brand.primary.400" : "gray.100",
            borderColor:
              colorMode !== "dark" ? "brand.primary.400" : "gray.800",
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
        color: colorMode !== "dark" ? "gray.500" : "gray.200",
        lineHeight: "150%",
        fontFamily: "'SpaceGrotesk'",
      }),
      sizes: {
        "medium": {
          fontSize: ["16px", null, "20px"],
        },
        "3xl": {
          fontSize: ["18px", "20px", "22px"],
          color: "red",
        },
      },
    },
    UnorderedList: {
      baseStyle: ({ colorMode }) => ({
        color: colorMode !== "dark" ? "brand.400" : "brand.200",
      }),
    },
    OrderedList: {
      baseStyle: ({ colorMode }) => ({
        color: colorMode !== "dark" ? "brand.400" : "brand.200",
      }),
    },
    ListItem: {
      baseStyle: ({ colorMode }) => ({
        fontWeight: 400,
        fontSize: ["18px", null, "22px"],
        color: colorMode !== "dark" ? "gray.600" : "gray.300",
        lineHeight: "150%",
      }),
    },
    Heading: {
      baseStyle: (props) => ({
        fontFamily: '"SpaceGrotesk"',
        fontWeight: "bold",
        width: "100%",
        color: props.colorMode !== "dark" ? "gray.800" : "white.100",
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
          color: props.colorMode !== "dark" ? "gray.700" : "gray.100",
        }),
        h4: (props) => ({
          fontSize: [16,24,28],
          color: props.colorMode !== "dark" ? "gray.700" : "gray.100",
        }),
        h6: (props) => ({
          fontWeight: 600,
          letterSpacing: ".2em",
          color:
            props.colorMode !== "dark"
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
            props.colorMode !== "dark"
              ? "brand.primary.300"
              : "brand.primary.100",
        }),
      },
    },
  },
}

export default theme;