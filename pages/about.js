import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import {
  Box,
  VStack,
  Heading,
  SimpleGrid,
  Text,
  UnorderedList,
  ListItem,
  Button,
  ListIcon,
  HStack,
  AspectRatio,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeUpIn, stagger } from "../src/utils/framer-variants";
import { getCaseStudyList } from "./api/graphql/case-study";
import SectionWrap from "../components/partials/section-wrap";
import { MdCheck, MdCheckCircle } from "react-icons/md";
import Image from "next/image";
import Hero from "../components/blocks/hero";
import Link from "next/link";

import { NextSeo } from 'next-seo'

const MotionVStack = motion(VStack);
const MotionSimpleGrid = motion(SimpleGrid);

export default function Team({ caseStudyList }) {
  let delay = 0;
  return (
    <Layout>
      <NextSeo
        title={`About Emergence`}
        description="We’re a team of multidisciplinary story tellers and problem solvers"
        canonical={`https://emergence.design/about`}
        openGraph={{
          title: `About Emergence`,
          description: "We’re a team of multidisciplinary story tellers and problem solvers",
          site_name: 'Emergence',
        }}
    />
      <Hero
        maxW="900"
        headline="WHERE CURIOSITY COMES FIRST"
        title="We’re a team of multidisciplinary story tellers and problem solvers"
        description="We use empathy and storytelling to guide your product development,
            delight your customers, and connect to your audience in a way that
            converts."
      />

      <SectionWrap my={(50, 75, 100)} delay={delay++}>
        <Container>
          <MotionSimpleGrid columns={[1, null, null, 2, 4]} gap="3rem" variants={stagger} animate="animate" transition={{duration: .2, ease: 'easeOut'}}>
            <MotionVStack align="start" variants={fadeUpIn} initial="hidden" animate="visible" >
              <Heading size="lg">Storytelling <br/>and Strategy</Heading>
              <Text>
                Use the enduring power of story to connect with your audience on
                an emotional level and build authentic, profitable, and lasting
                relationships.
              </Text>
            </MotionVStack>
            <MotionVStack align="start" variants={fadeUpIn} initial="hidden" animate="visible" >
              <Heading size="lg">Branding <br/> and Identity</Heading>
              <Text>
                Branding is the emotional response people have when they imagine
                your business. Great brands are engaging, memorable, and
                emotionally intelligent.
              </Text>
            </MotionVStack>
            <MotionVStack align="start" variants={fadeUpIn} initial="hidden" animate="visible" >
              <Heading size="lg">Delightful Digital <br/>Experiences</Heading>
              <Text>
                There are a thousand great ways to engage with your audience and
                create delight online. We help you navigate the sea of options
                and choose the right medium.
              </Text>
            </MotionVStack>
            <MotionVStack align="start" variants={fadeUpIn} initial="hidden" animate="visible" >
              <Heading size="lg">Consulting and <br/>Problem Solving</Heading>
              <Text>
                Want an independent expert opinion? We love to share our
                expertise and help you navigate the immeasurable opportunities
                that are available to you.
              </Text>
            </MotionVStack>
          </MotionSimpleGrid>
        </Container>
      </SectionWrap>

      <SectionWrap bg={useColorModeValue("gray.50", "gray.900")}>
        <Container maxW="800px">
          <VStack align="flex-start" spacing="2rem" width="auto">
            <Heading variant="h4" size="lg" as="h2" width="100%">
              You should get in touch with us if
            </Heading>
            <VStack as={UnorderedList} align="start">
              <HStack as={ListItem} align="start">
                <ListIcon as={MdCheck} mt="2px" fontSize="22px" color="brand.primary.400" />
                <Text>
                  You believe your business should serve rather than sell
                </Text>
              </HStack>
              <HStack as={ListItem} align="start">
                <ListIcon as={MdCheck} mt="2px" fontSize="22px" color="brand.primary.400" />
                <Text>
                  You embrace the process of change and transformation
                </Text>
              </HStack>
              <HStack as={ListItem} align="start">
                <ListIcon as={MdCheck} mt="2px" fontSize="22px" color="brand.primary.400" />
                <Text>
                  You enjoy being exposed to new ideas and perspectives
                </Text>
              </HStack>
              <HStack as={ListItem} align="start">
                <ListIcon as={MdCheck} mt="2px" fontSize="22px" color="brand.primary.400" />
                <Text>
                  You prefer measurable results and data-driven decisions
                </Text>
              </HStack>
            </VStack>
            <Link href="/contact" passHref>
            <Button as="a" variant="primary">Sound Like You? Say Hi</Button>
            </Link>
          </VStack>
        </Container>
      </SectionWrap>

      <SectionWrap>
        <Container>
          <SimpleGrid
            columns={[1, null, 2]}
            gap="3rem"
            alignItems="center"
            w="100%"
          >
            <AspectRatio ratio={1}>
              <Image
                src="/images/nermin.jpg"
                layout="fill"
                alt=""
                objectFit="cover"
              />
            </AspectRatio>
            <VStack maxW="500px" spacing="2rem" align="start">
              <Heading>Nermin Kuckovic</Heading>
              <Text>
                B.S. — Mechanical Engineering — Portland State University
              </Text>

              <Text>
                Nermin is a photographer, videographer, and creative director
                hailing from Portland, Oregon. Nermin has worked with startups
                and musicians all over the west coast to direct and execute the
                photography for brands across all visual channels.
              </Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </SectionWrap>

      <SectionWrap>
        <Container>
          <SimpleGrid
            columns={[1, null, 2]}
            gap="3rem"
            alignItems="center"
            gridAutoFlow="dense"
            w="100%"
          >
            <AspectRatio ratio={1} gridColumn={[null, null, "2"]}>
              <Image
                src="/images/lucas.jpg"
                layout="fill"
                alt=""
                objectFit="cover"
              />
            </AspectRatio>
            <VStack
              maxW="500px"
              spacing="2rem"
              gridColumn={[null, null, "1"]}
              align="start"
            >
              <Heading>Lucas Marohn</Heading>
              <Text>B.S. — Entrepreneurship — Cal Poly San Luis Obispo</Text>

              <Text>
                Lucas is a brand strategist and web developer from San Luis
                Obispo, California. He holds a Bachelor's Degree in Business
                Administration with a concentration on Entrepreneurship from Cal
                Poly San Luis Obispo.
              </Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </SectionWrap>
    </Layout>
  );
}

export async function getStaticProps(context, preview) {
  const caseStudyList = await getCaseStudyList();
  return {
    props: {
      caseStudyList,
    },
  };
}
