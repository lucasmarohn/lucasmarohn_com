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
import { fadeUpIn } from "../src/utils/framer-variants";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButtonGroup = motion(ButtonGroup);
const MotionBox = motion(Box)

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Testing</title>
      </Head>

      <Container>
        <VStack
          textAlign="center"
          py="5rem"
          spacing={["1rem", null, "2rem"]}
          minH={["calc(100vh - 72px * 2)", "50vh"]}
          maxW="700px"
          mx="auto"
          justify="center"
        >
          <MotionHeading
            size="xs"
            variants={fadeUpIn}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0 }}
            initial="hidden"
            animate="visible"
          >
            WELCOME TO OUR CONSCIOUS
          </MotionHeading>
          <MotionHeading
            size="2xl"
            as="h1"
            variants={fadeUpIn}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
            initial="hidden"
            animate="visible"
          >
            Data-driven design strategy that makes your company more profitable
          </MotionHeading>
          <MotionText
            fontSize="lg"
            variants={fadeUpIn}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
            initial="hidden"
            animate="visible"
          >
            Generate more leads, transactions, or what ever KPI's matter to you.
          </MotionText>
          <MotionButtonGroup
            variants={fadeUpIn}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.6 }}
            initial="hidden"
            animate="visible"
          >
            <Link href="/work" passHref>
              <Button as="a" variant="primary" size="lg">
                Explore Case Studies
              </Button>
            </Link>
          </MotionButtonGroup>
        </VStack>
      </Container>

      <Box>
        <Container>
          <SimpleGrid columns={[1, null, null, 2, 4]} gap="3rem">
            <VStack>
              <Heading size="lg">
                Empathize with the emotional needs of your customers
              </Heading>
              <Text>
                Our process begins with your customers. Together, we uncover
                their story and identify how your services help them win their
                day.
              </Text>
            </VStack>
            <VStack>
              <Heading size="lg">
                Identify the best channels for your unique business goals
              </Heading>
              <Text>
                We audit your options and determine the best path forward. Even
                if you have an idea of what the solution looks like.
              </Text>
            </VStack>
            <VStack>
              <Heading size="lg">
                Discover where your business and customer needs intersect
              </Heading>
              <Text>
                Great solutions emerge where the needs of your business and your
                customer overlap. We focus our efforts where it matters.
              </Text>
            </VStack>
            <VStack>
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
