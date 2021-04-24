import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import Container from "../components/container";
import {
  Box,
  LinkOverlay,
  VStack,
  Heading,
  Text,
  AspectRatio,
  Grid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import CaseStudyItem from "../components/case-study-item";
import { fadeUpIn } from "../src/utils/framer-variants";
import { getCaseStudyList } from "./api/graphql/case-study";

const MotionHeading = motion(Heading);
const MotionCaseStudyItem = motion(CaseStudyItem);
const MotionBox = motion(Box);

export default function Work({caseStudyList}) {
  return (
    <Layout>
      <Head>
        <title>Testing</title>
      </Head>
      <Container>
        <VStack textAlign="center" py={["3rem", '5rem', '7.5rem']}>
          <MotionHeading
            size="xs"
            initial="hidden"
            animate="visible"
            variants={fadeUpIn}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0 }}
          >
            WORK
          </MotionHeading>
          <MotionHeading
            size="xl"
            as="h1"
            variants={fadeUpIn}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
            initial="hidden"
            animate="visible"
          >
            Case Studies
          </MotionHeading>
        </VStack>
        </Container>
        <Container>
        <Grid
          templateColumns={["100%"]}
          alignItems="stretch"
          w="100%"
          gap={[10, null, 20]}
        >

          {caseStudyList && caseStudyList.map(({item}, index) => 
            <CaseStudyItem
              key={item.databaseId}
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
              layout="position"
            />
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