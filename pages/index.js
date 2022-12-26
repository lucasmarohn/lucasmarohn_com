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
          title={`Case Studies | Lucas Marohn`}
          description="Explore the successes I've delivered to past and current clients."
          canonical="https://lucasmarohn.com/"
          openGraph={{
            title: `Lucas Marohn`,
            description: "Explore the successes I've delivered to past and current clients.",
            site_name: 'Lucas Marohn',
          }}
    />
      <Hero
        maxW="900"
        headline="Sr. UI/UX Designer &amp; Developer"
        title="Lucas Marohn is the Senior UX Designer and Developer for Universal Music Group 🌎 where he defines the UX approach for 800+ web properties and builds websites for UMG’s AAA artists like Justin Bieber"
        titleVariant="h1"
        maxW="1200px"
      />
        <Container mb={24}>
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