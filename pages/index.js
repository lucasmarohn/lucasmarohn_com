import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Container from "../components/container";
import {
  Box,
  ButtonGroup,
  Button,
  VStack,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import Hero from '../components/blocks/hero'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Testing</title>
      </Head>
      <Hero
        minH={["calc(100vh - 72px * 2)", "50vh"]}
        maxW="1200"
        headline="WELCOME TO OUR CONSCIOUS"
        title="Your product exceeds your customers needs, your message should too."
        description="Use empathy, design, and storytelling to enable your brand to speak to your audience with authenticity and resonance."
        button={{
          label: 'Explore Case Studies',
          href: '/work'
        }}
      />

      <Box>
        <Container>
          <SimpleGrid columns={[1, null, null, 2, 4]} gap="2rem">
            <VStack spacing="1rem">
              <Heading size="lg">
                Empathize with the emotional needs of your customers
              </Heading>
              <Text>
                Our process begins with your customers. Together, we uncover
                their story and identify how your services help them win their
                day.
              </Text>
            </VStack>
            <VStack spacing="1rem">
              <Heading size="lg">
                Identify the best channels for your unique business goals
              </Heading>
              <Text>
                We audit your options and determine the best path forward. Even
                if you have an idea of what the solution looks like.
              </Text>
            </VStack>
            <VStack spacing="1rem">
              <Heading size="lg">
                Discover where your business and customer needs intersect
              </Heading>
              <Text>
                Great solutions emerge where the needs of your business and your
                customer overlap. We focus our efforts where it matters.
              </Text>
            </VStack>
            <VStack spacing="1rem">
              <Heading size="lg">
                Iterate and amplify strategies that deliver the best results
              </Heading>
              <Text>
                After initial launch we audit, test, and optimize your strategy
                to build on successes, and cull strategies that are less
                effective.
              </Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  );
}
