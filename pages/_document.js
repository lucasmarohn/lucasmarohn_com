
import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVBSPMP6Z9" />
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SVBSPMP6Z9');`}}>
        </script>

        </Head>
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