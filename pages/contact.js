import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import { Box, useColorModeValue, VStack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

import { gravityFormData } from "../pages/api/graphql/contact-form";
import Hero from "../components/blocks/hero";
import SectionWrap from "../components/partials/section-wrap";
import { NextSeo } from "next-seo";
import ContactForm from "../components/contact-form";
const WP_SITE_URL = process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL;

export default function Contact({}) {
  return (
    <Layout>
      <NextSeo
        title={`Contact Lucas Marohn`}
        description="Ready to help your customer win the day? Let's talk."
        openGraph={{
          title: `Contact Lucas Marohn`,
          description: "Ready to help your customer win the day? Let's talk.",
          site_name: "Lucas Marohn",
        }}
      />

      <Hero
        headline="START A CONVERSATION"
        title="I'm always happy to chat"
        description="I'll reach out via email initially, from there we can schedule a phone call or a grab virtual coffee"
      />

      <SectionWrap my="0" marginTop="0">
        <Container maxW="70rem" marginBottom="5rem">
          <Box
            bg={useColorModeValue("white", "gray.700")}
            padding={["2rem", "5rem"]}
            boxShadow={useColorModeValue(
              "0 .5rem 1rem rgba(0,50,100,.2)",
              null
            )}
          >
            <ContactForm formId="contact-page" />{" "}
          </Box>
        </Container>
      </SectionWrap>
    </Layout>
  );
}
