
import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body style={{height: 'auto', minHeight: '100vh'}}>
          <ColorModeScript initialColorMode={{
            initialColorMode: "light",
            useSystemColorMode: false,
          }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}