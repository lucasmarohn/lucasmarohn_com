import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import {
  Grid,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import CaseStudyItem from "../components/case-study-item";
import { fadeUpIn, fadeUpOut } from "../src/utils/framer-variants";
import { getCaseStudyList } from "./api/graphql/case-study";
import SectionWrap from '../components/partials/section-wrap'

import Hero from '../components/blocks/hero'

import { NextSeo } from 'next-seo'

export default function Work({caseStudyList}) {
  return (
    <Layout>
      <NextSeo
          title={`Case Studies | Emergence Design`}
          description="Explore the successes we've delivered to past and current clients."
          canonical="https://lucasmarohn.com/"
          openGraph={{
            title: `Emergence Brand Design`,
            description: "Explore the successes we've delivered to past and current clients.",
            site_name: 'Emergence',
          }}
    />
      <Hero
        maxW="900"
        headline="PAST PROJECTS"
        title="Case Studies"
      />
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