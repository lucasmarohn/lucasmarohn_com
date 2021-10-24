import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import { Box, VStack, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

import SectionWrap from '../components/partials/section-wrap'
import Testimonial from '../components/testimonial'

import Hero from "../components/blocks/hero";
import { NextSeo } from 'next-seo'
import { getCaseStudyList } from "./api/graphql/case-study";


import { stagger, fadeUpIn } from '../src/utils/framer-variants'

const MotionBox = motion(Box);
const MotionSimpleGrid = motion(SimpleGrid);

export default function Home({ caseStudyList }) {
  return (
    <Layout>
      <NextSeo
          title={`Emergence Brand Design`}
          description="Harnessing the power of story, empathy, and design to help businesses engage with their audience in a meaningful way and drive measurable results."
          canonical="https://emergence.design/"
          openGraph={{
            title: `Emergence Brand Design`,
            description: "Harnessing the power of story, empathy, and design to help businesses engage with their audience in a meaningful way and drive measurable results.",
            site_name: 'Emergence',
          }}
    />

      <Hero
        minH={["calc(100vh - 72px * 2)", "50vh"]}
        maxW="1200"
        headline="Harness the power of story"
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
                <MotionBox
                  key={item.heading}
                  variants={fadeUpIn}
                >
                  <VStack spacing="1rem">
                    <Heading size="lg">{item.heading}</Heading>
                    <Text>{item.text}</Text>
                  </VStack>
                </MotionBox>
              ))}
            </MotionSimpleGrid>
        )}


      </Container>


      <SectionWrap>
        <Container>
        <Grid
          templateColumns={["100%"]}
          alignItems="stretch"
          w="100%"
          gap={[10, null, 20]}
        >

          {caseStudyList && caseStudyList.map(({item}, index) => 
          <SectionWrap my="0" key={item.databaseId}>
            <CaseStudyItem
              
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
          )}
        </Grid>
        </Container>
      </SectionWrap>

    </Layout>
  );
}

export async function getStaticProps(context, preview) {
  const caseStudyList = await getCaseStudyList()
  return {
    props: {
      caseStudyList
    }
  }
}