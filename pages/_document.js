
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
        <meta name="facebook-domain-verification" content="sk6gv9b2jf204wlc3jdqxqvbflutu2" />

        </Head>
        <body style={{height: 'auto', minHeight: '100vh'}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}