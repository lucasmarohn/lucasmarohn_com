import {
  getAllCaseStudyURI,
  getCaseStudyData,
} from "../api/graphql/case-study";
import Layout from "../../components/layout";
import SectionWrap from '../../components/partials/section-wrap'
import {
  useColorModeValue,
  Box,
  VStack,
} from "@chakra-ui/react";

import { fadeUpIn } from "../../src/utils/framer-variants";
import BasicText from "../../components/blocks/basic-text";
import Columns from "../../components/blocks/columns";
import FullWidthImage from "../../components/blocks/full-width-image";
import CaseStudyHero from '../../components/case-study-hero'

import { NextSeo } from 'next-seo'

export default function CaseStudy({ data }) {
  console.log(data);
  const layoutIdSuffix = data.databaseId;
  const bgColor = useColorModeValue("white", "gray.700");
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
      <NextSeo
      title={`Case Study | ${data.title}`}
      description={data.excerpt}
      canonical={`https://lucasmarohn.com/work/${data.slug}`}
      openGraph={{
        title: `Case Study | ${data.title}`,
        description: data.excerpt,
        site_name: 'OUR CONSCIOUS',
      }}
    />
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
        thumbVideoMp4={data?.acf_project?.videoMp4}
        layout="position"
      />


      <VStack spacing="5rem" mb="10rem">
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
