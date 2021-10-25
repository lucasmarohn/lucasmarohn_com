import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import "../styles/globals.css";
import theme from "../theme.js";
import Router from "next/router";
import { NextSeo } from "next-seo";

import { Chakra } from "../src/Chakra";

function MyApp({ Component, pageProps }) {
  Router.onRouteChangeComplete = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };
  return (
    <Chakra cookies={pageProps.cookies}>
      <AnimateSharedLayout>
        <AnimatePresence exitBeforeEnter>
          <ChakraProvider theme={customTheme}>
            <NextSeo
              title={`Portfolio of Lucas Marohn - Web Developer`}
              description="Harnessing the power of story, empathy, and design to help businesses engage with their audience in a meaningful way and drive measurable results."
              openGraph={{
                title: `Lucas Marohn - Web Developer`,
                description:
                  "Harnessing the power of story, empathy, and design to help businesses engage with their audience in a meaningful way and drive measurable results.",
                site_name: "Lucas Marohn",
              }}
            />
            <Component {...pageProps} />
          </ChakraProvider>
        </AnimatePresence>
      </AnimateSharedLayout>
    </Chakra>
  );
}

export default MyApp;

const customTheme = extendTheme(theme);
