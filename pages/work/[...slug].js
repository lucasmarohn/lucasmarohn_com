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


const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function CaseStudy({ data }) {
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
      <Head>
        <title>{data.title}</title>
      </Head>
      <MotionBox
        className="hero"
        as="article"
        w="100%"
        layoutId={`cs-card-${layoutIdSuffix}`}
        bg={bgColor}
      >
        <Grid
          templateColumns={["100%"]}
          alignItems="center"
          gap={["2rem", null, 10]}
        >
          <MotionBox
            layoutId={`cs-thumb-${layoutIdSuffix}`}
            borderTopRadius="0rem"
          >
            <AspectRatio
              ratio={[16 / 9, null, 16 / 9]}
              bg="gray.100"
              maxH="80vh"
              overflow="hidden"
            >
              <Image
                layoutId={`cs-image-${layoutIdSuffix}`}
                src="/images/work/mutt-couture/glass.png"
                layout="fill"
                objectFit="cover"
              />
            </AspectRatio>
          </MotionBox>
          
        </Grid>
      </MotionBox>


      <SectionWrap>
        <VStack
            p="1rem 5rem 1rem 1rem"
            maxW={[null, null, "40rem"]}
            marginX={[null, null, "auto"]}
            alignItems="start"
            spacing="3rem"
            zIndex="10"
            color={useColorModeValue("gray.900", "white")}
          >
            <VStack>
              <MotionHeading
                size="sm"
                w="100%"
                fontWeight="400"
                color={useColorModeValue(
                  "brand.primary.400",
                  "brand.primary.100"
                )}
              >
                {data.title}
              </MotionHeading>
              <MotionHeading
                as="h1"
                variants={fadeUpIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.05, duration: 0.25 }}
              >
                {data.acf_project.headline}
              </MotionHeading>
              <MotionText layoutId={`cs-desc-${layoutIdSuffix}`} fontSize="2xl">
                A rebrand resulting in an 800% Increase in qualified leads in
                the first 30 days
              </MotionText>
            </VStack>

            <Testimonial
              image="/images/work/mutt-couture/testimonial-thumb.jpg"
              author="Josh Herman"
              title="Founder of Mutt Couture"
              quote="The new look and feel is exactly what I wanted. It's what I always knew Mutt Couture could become."
              bg={useColorModeValue("gray.100", "gray.800")}
            />
          </VStack>
        </SectionWrap>

      <VStack spacing="5rem">
        <Box
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
        </Box>

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
