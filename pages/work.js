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

const MotionHeading = motion(Heading);
const MotionCaseStudyItem = motion(CaseStudyItem);
const MotionBox = motion(Box);

export default function Home() {
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
        <Container px={[null, null, "0"]} maxW="none">
        <Grid
          templateColumns={["100%"]}
          alignItems="stretch"
          w="100%"
          gap={[10, null, '0']}
        >
          <CaseStudyItem
            animate="visible"
            variants={fadeUpIn}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
            layoutIdSuffix="mc"
            title="Mutt Couture"
            intro="Redefining a Wholesale Pet Company as a Luxury DTC Brand"
            link="/work/mutt-couture"
            thumbURL="/images/work/mutt-couture/glass.png"
          />

          <CaseStudyItem
            animate="visible"
            variants={fadeUpIn}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }}
            layoutIdSuffix="keri"
            title="Keri Systems"
            intro="A rebrand resulting in an 800% Increase in qualified leads in the first 30 days"
            link="/work/keri-systems"
            thumbURL="/images/work/kerisys/thumb.png"
            reverse
          />
        </Grid>
        </Container>
      
    </Layout>
  );
}
