import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import {
  Box,
  useColorModeValue,
  VStack,
  SimpleGrid,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

import Hero from "../components/blocks/hero";
import SectionWrap from "../components/partials/section-wrap";
import { NextSeo } from "next-seo";
const WP_SITE_URL = process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL;

export default function Consulting({}) {
  const consultingType = useState("business");

  return (
    <Layout>
      <NextSeo
        title={`Consult with Lucas Marohn`}
        description="Ready to help your customer win the day? Let's talk."
        openGraph={{
          title: `Constult with Lucas Marohn`,
          description: "Ready to help your customer win the day? Let's talk.",
          site_name: "Lucas Marohn",
        }}
      />

      <Hero
        headline="START A CONVERSATION"
        title="I'm always happy to chat"
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
            <SimpleGrid columns={[1, null, 2]}>
              <VStack align="center" spacing="1rem">
                <VStack align="center" textAlign="center">
                  <Heading variant="h6">$200 / hr</Heading>
                  <Heading variant="h3">Business Consulting</Heading>
                  <Text marginBottom="2rem">
                    Book a call with me on Calendly
                  </Text>
                </VStack>
                <Link href="https://calendly.com/lucasmarohn/business" passHref>
                  <Button
                    as="a"
                    cursor="pointer"
                    variant="primary"
                    marginTop="2rem"
                  >
                    Business Consulting
                  </Button>
                </Link>
              </VStack>
              <VStack align="center" spacing="1rem">
                <VStack align="center" textAlign="center">
                  <Heading variant="h6">FREE</Heading>
                  <Heading variant="h3">Student Consulting</Heading>
                  <Text marginBottom="2rem">
                    Book a call with me on Calendly
                  </Text>
                </VStack>
                <Link href="https://calendly.com/lucasmarohn/student" passHref>
                  <Button
                    as="a"
                    cursor="pointer"
                    variant="primary"
                    marginTop="2rem"
                  >
                    Student Consulting
                  </Button>
                </Link>
              </VStack>
            </SimpleGrid>
          </Box>
        </Container>
      </SectionWrap>
    </Layout>
  );
}
