import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import {
  Box,
  VStack,
  Heading,
  SimpleGrid,
  Text,
  AspectRatio,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { getCaseStudyList } from "./api/graphql/case-study";
import SectionWrap from "../components/partials/section-wrap";
import Image from "next/image";
import Hero from "../components/blocks/hero";
import { NextSeo } from "next-seo";

export default function Team({ caseStudyList }) {
  let delay = 0;

  const friends = [
    {
      name: "Nermin Kuckovic",
      imageSrc: "/images/friends/nermin.png",
      url: "https://instagram.com/namednermin",
    },
    {
      name: "Don Mupasi",
      imageSrc: "/images/friends/don.png",
      url: "https://instagram.com/visualdon",
    },
    {
      name: "Nico DeWet",
      imageSrc: "/images/friends/nico.png",
      url: "https://instagram.com/nicodewet",
    },
    {
      name: "Aiden Jones",
      imageSrc: "/images/friends/aiden.png",
      url: "https://www.instagram.com/illuskate",
    },
  ];
  return (
    <Layout>
      <NextSeo
        title={`About Lucas Marohn`}
        description="We’re a team of multidisciplinary story tellers and problem solvers"
        canonical={`https://lucasmarohn.com/about`}
        openGraph={{
          title: `About Lucas Marohn`,
          description:
            "We’re a team of multidisciplinary story tellers and problem solvers",
          site_name: "Lucas Marohn",
        }}
      />

      <Hero
        maxW="900"
        headline="About Lucas Marohn"
        title="I'm a digital designer, web developer, and creative problem solver"
        description="SLO CA → PDX OR"
      />

      <SectionWrap pt={0}>
        <Container>
          <SimpleGrid
            columns={[1, null, null, 2]}
            gap="3rem"
            alignItems="center"
            gridAutoFlow="dense"
            w="100%"
          >
            <AspectRatio ratio={1}>
              <Image
                src="/images/lucas.jpg"
                layout="fill"
                alt=""
                objectFit="cover"
              />
            </AspectRatio>

            <VStack maxW="600px" spacing="2rem" align="start">
              <Text>
                You'll run into me hiking, gliding through the twisties on two
                wheels—and when the weather is juuust right—dashing through the
                trees strapped to a pair of skis.
              </Text>

              <Text>
                I’m motivated by the opportunity to solve real problems for
                people. I’m always trying to improve my craft, continue
                learning, and help others grow.
              </Text>

              <Text>
                I am lucky, grateful, and proud to surround myself with people
                who are creative and ambitious. My closest friends are creatives
                from all over the world.
              </Text>

              <Text>Think we'd get along? Say hello!</Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </SectionWrap>

      <SectionWrap>
        <Container>
          <VStack align="center" spacing="2rem" w="100%">
            <VStack>
            <Heading variant="h6" textAlign="center">Ride or Die</Heading>
            <Heading textAlign="center">The Squad</Heading>
            </VStack>
            <SimpleGrid columns={[1, 2, 4]} gap={6} w="100%">
              {friends.map((friend) => (
                <LinkBox w="100%">
                  <VStack align="left">
                    <AspectRatio ratio={1} w="100%">
                      <Image src={friend.imageSrc} layout="fill" />
                    </AspectRatio>
                    <LinkOverlay href={friend.url} target="_blank">
                      <Text>{friend.name}</Text>
                    </LinkOverlay>
                  </VStack>
                </LinkBox>
              ))}
            </SimpleGrid>
          </VStack>
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
