import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import { Grid, Flex, Box, Heading, Text } from "@chakra-ui/react";
import CaseStudyItem from "../components/case-study-item";
import { fadeUpIn, fadeUpOut } from "../src/utils/framer-variants";
import { getCaseStudyList } from "./api/graphql/case-study";
import SectionWrap from "../components/partials/section-wrap";

import Hero from "../components/blocks/hero";

import { NextSeo } from "next-seo";

export default function Work({ caseStudyList }) {
  return (
    <Layout>
      <NextSeo
        title={`OUR CONSCIOUS`}
        description="Explore the successes I've delivered to past and current clients."
        canonical="https://ourconscious.com/"
        openGraph={{
          title: `OUR CONSCIOUS`,
          description:
            "Your product exceeds your customers needs, your message should too.",
          site_name: "OUR CONSCIOUS",
        }}
      />
      <Hero
        maxW="900"
        headline="Harness the power of story"
        title="We’re a team of multidisciplinary storytellers and problem solvers"
        titleVariant="h1"
        description="We use empathy and storytelling to guide your product development, delight your customers, and connect to your audience in a way that converts."
        maxW="800px"
      />
      <Container mb={24} maxW='1600px'>
        <Grid
          my={["5rem", null, null, "7.5rem"]}
          templateColumns={[
            "100%",
            'repeat(2, 1fr)',
            null,
            null,
            null,
            `repeat(4, 1fr)`,
          ]}
          w="100%"
          gap={["2rem"]}
          alignItems="center"
        >
          <Grid templateColumns="100%" gap={3}>
            <Heading as="h2" fontSize="30px">Storytelling and Strategy</Heading>
            <Text fontSize="md">Use the enduring power of story to connect with your audience on an emotional level and build authentic, profitable, and lasting relationships.</Text>
          </Grid>

          <Grid templateColumns="100%" gap={3}>
            <Heading as="h2" fontSize="30px">Corporate Branding and Identity</Heading>
            <Text fontSize="md">Branding the emotional response people have when they imagine of your business. Great brands are engaging, memorable, and emotionally resonant.</Text>
          </Grid>

          <Grid templateColumns="100%" gap={3}>
            <Heading as="h2" fontSize="30px">Delightful Digital Experiences</Heading>
            <Text fontSize="md">There are a thousand great ways to engage with your audience and create delight online. We help you navigate the sea of options and choose the right medium.</Text>
          </Grid>

          <Grid templateColumns="100%" gap={3}>
            <Heading as="h2" fontSize="30px">Consulting and Problem Solving</Heading>
            <Text fontSize="md">Want an independent expert opinion? We love to share our expertise and help you navigate the immeasurable opportunities that are available to you.</Text>
          </Grid>

        </Grid>
        <Grid
          templateColumns={["100%"]}
          alignItems="stretch"
          w="100%"
          gap={[10, null, 20]}
        >
          {caseStudyList &&
            caseStudyList.map(({ item }, index) => (
              <SectionWrap my="0" key={item.databaseId}>
                <CaseStudyItem
                  index={index}
                  animate="visible"
                  variants={fadeUpIn}
                  headline={item.acf_project.headline}
                  transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
                  layoutIdSuffix={item.databaseId}
                  title={item.title}
                  intro={item.excerpt}
                  link={`/work/${item.slug}`}
                  thumbImage={item?.featuredImage?.node}
                  reverse={index % 2}
                />
              </SectionWrap>
            ))}
        </Grid>
      </Container>
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
