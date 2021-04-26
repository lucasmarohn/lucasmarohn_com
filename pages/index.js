import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import { Box, VStack, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

import Hero from "../components/blocks/hero";

const data = [
  {
    heading: "Empathize with the emotional needs of your customers",
    text:
      "Our process begins with your customers. Together, we uncover their story and identify how your services help them win their day.",
  },
  {
    heading: "Identify the best channels for your unique business goals",
    text:
      "We audit your options and determine the best path forward. Even if you have an idea of what the solution looks like.",
  },
  {
    heading: "Discover where your business and customer needs intersect",
    text:
      "Great solutions emerge where the needs of your business and your customer overlap. We focus our efforts where it matters.",
  },
  {
    heading: "Iterate and amplify strategies that deliver the best results",
    text:
      "After initial launch we audit, test, and optimize your strategy to build on successes, and cull strategies that are less effective.",
  },
];

import { stagger, fadeUpIn } from '../src/utils/framer-variants'

const MotionDiv = motion("div");
const MotionSimpleGrid = motion(SimpleGrid);

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>voidmade</title>
      </Head>

      <Hero
        minH={["calc(100vh - 72px * 2)", "50vh"]}
        maxW="1200"
        headline="WELCOME TO OUR CONSCIOUS"
        title="Your product exceeds your customers needs, your message should too."
        description="Use empathy, design, and storytelling to enable your brand to speak to your audience with authenticity and resonance."
        button={{
          label: "Explore Case Studies",
          href: "/work",
        }}
      />

      <Container>
      
        {data && (
            <MotionSimpleGrid
              columns={[1, null, null, 2, 4]}
              gap="2rem"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              {data.map((item) => (
                <MotionDiv
                  className="motion-dev"
                  key={item.heading}
                  variants={fadeUpIn}
                >
                  <VStack spacing="1rem">
                    <Heading size="lg">{item.heading}</Heading>
                    <Text>{item.text}</Text>
                  </VStack>
                </MotionDiv>
              ))}
            </MotionSimpleGrid>
        )}
      </Container>
    </Layout>
  );
}
