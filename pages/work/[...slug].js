import {
  getAllCaseStudyURI,
  getCaseStudyData,
} from "../api/graphql/case-study";

import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import Container from "../../components/container";
import SectionWrap from '../../components/partials/section-wrap'
import {
  useColorModeValue,
  Box,
  Grid,
  VStack,
  Heading,
  Text,
  AspectRatio,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { fadeUpIn } from "../../src/utils/framer-variants";
import Testimonial from "../../components/testimonial";
import Stats from "../../components/blocks/stats";
import BasicText from "../../components/blocks/basic-text";
import Columns from "../../components/blocks/columns";
import FullWidthImage from "../../components/blocks/full-width-image";
import CaseStudyHero from '../../components/case-study-hero'


const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function CaseStudy({ data }) {
  const layoutIdSuffix = data.databaseId;
  const bgColor = useColorModeValue("white", "gray.700");
  console.debug(data)
  const switchSection = (section) => {
    switch (section.fieldGroupName) {
      case "Project_AcfProject_ContentSections_BasicText":
        return <BasicText text={section.basicText} />;
      case "Project_AcfProject_ContentSections_Columns":
        return (
          <Columns
            maxColumns={section.maxColumns}
            columns={section.singleColumn}
          />
        );
      case "Project_AcfProject_ContentSections_FullWidthImage":
        return <FullWidthImage image={section.fullWidthImage} />;
      default:
        return <Box>{section.fieldGroupName}</Box>;
    }
  };
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <CaseStudyHero
        key={data.databaseId}
        animate="visible"
        variants={fadeUpIn}
        headline={data.acf_project.headline}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
        layoutIdSuffix={data.databaseId}
        title={data.title}
        intro={data.excerpt}
        link={`/work/${data.slug}`}
        thumbImage={data?.featuredImage.node}
        layout="position"
      />


      <VStack spacing="5rem">
        {/* <Box
          bg={[null, null, useColorModeValue("gray.100", "gray.900")]}
          pt={[null, null, "3rem"]}
          pb={[null, null, "2rem"]}
          w="100%"
          maxW="none"
        >
          <Container className="blocks">
            <Stats
              statData={[
                { title: "Total Sales", value: 3965, suffix: "%" },
                { title: "Total Order", value: 3567, suffix: "%" },
                { title: "Online Store Sessions", value: 1504, suffix: "%" },
                { title: "Conversion Rate", value: 112, suffix: "%" },
              ]}
            />
          </Container>
        </Box> */}

        {data.acf_project.contentSections.map((section, index) => {
          return (
            <SectionWrap key={[section, index]}>
              {switchSection(section)}
            </SectionWrap>
          );
        })}
      </VStack>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getCaseStudyData(params.slug[0]);
  return {
    props: { data, preview },
  };
}

export async function getStaticPaths() {
  const pages = await getAllCaseStudyURI();

  return {
    paths: pages.edges.map(({ node }) => `/work/${node.slug}`) || [],
    fallback: false,
  };
}
