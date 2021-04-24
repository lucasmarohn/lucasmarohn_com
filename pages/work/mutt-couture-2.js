import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import Container from "../../components/container";
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
import { fadeDownIn } from "../../src/utils/framer-variants";
import Testimonial from "../../components/testimonial";
import Stats from "../../components/blocks/stats";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionImage = motion(Image);

export default function MuttCouture() {
  const layoutIdSuffix = "mc";
  const bgColor = useColorModeValue("white", "gray.700");
  return (
    <Layout>
      <Head>
        <title>Mutt Couture</title>
      </Head>
      <MotionBox
        className="hero"
        as="article"
        w="100%"
        layoutId={`cs-card-${layoutIdSuffix}`}
        bg={bgColor}
      >
        <Grid
          templateColumns={["100%", null, null, "1fr 1fr"]}
          alignItems="center"
          gap={["2rem", null, 10]}
        >
          <MotionBox
            layoutId={`cs-thumb-${layoutIdSuffix}`}
            borderTopRadius="0rem"
          >
            <AspectRatio
              ratio={[3 / 4, null, 3 / 4]}
              bg="gray.100"
              maxH="80vh"
              overflow="hidden"
            >
              <Image
                
                src="/images/work/mutt-couture/glass.png"
                layout="fill"
                objectFit="cover"
              />
            </AspectRatio>
          </MotionBox>
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
                layoutId={`cs-title-${layoutIdSuffix}`}
                size="sm"
                w="100%"
                fontWeight="400"
                color={useColorModeValue(
                  "brand.primary.400",
                  "brand.primary.100"
                )}
              >
                Mutt Couture
              </MotionHeading>
              <MotionHeading
                as="h1"
                layoutId={`cs-subtitle-${layoutIdSuffix}`}
                variants={fadeDownIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.05, duration: 0.25 }}
              >
                Redefining a Wholesale Pet Company as a Luxury DTC Brand
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
        </Grid>
      </MotionBox>

      <VStack spacing="5rem" align="flex-start">
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

        <Container maxW="60rem">
          <Text fontSize="2xl">Mutt Couture had a developed an incredible product line up of dog collars and leashes. There were no companies in the pet apparel space that appealed to the fashionable, tattoo-covered dog owner. That was who Mutt Couture was built by, and the demographic that Mutt Couture was created for.</Text>
          <Text fontSize="2xl">Unfortunately, despite a killer product and an untapped market, Mutt Couture was only able to secure distribution in a few regional pet stores, and online sales were practically non-existent.

Mutt Couture needed a strong brand, more traffic, and more sales. Here is how we pulled it off.</Text>
        </Container>

        
        <Box px={['3rem']} w="100%">
          <Grid templateColumns="repeat(3, 1fr)" gap="3rem" w="100%">
            <AspectRatio
                ratio={[3 / 4, null, 3 / 4]}
                bg="gray.100"
                maxH="80vh"
                overflow="hidden"
                w="100%"
              >
              <Image
                layoutId={`cs-image-${layoutIdSuffix}`}
                src="/images/work/mutt-couture/glass.png"
                layout="fill"
                objectFit="cover"
              />
            </AspectRatio>
            <AspectRatio
              ratio={[3 / 4, null, 3 / 4]}
              bg="gray.100"
              maxH="80vh"
              overflow="hidden"
              w="100%"
            >
              <Image
                layoutId={`cs-image-${layoutIdSuffix}`}
                src="/images/work/mutt-couture/glass.png"
                layout="fill"
                objectFit="cover"
              />
            </AspectRatio>
            <AspectRatio
              ratio={[3 / 4, null, 3 / 4]}
              bg="gray.100"
              maxH="80vh"
              overflow="hidden"
              w="100%"
            >
              <Image
                layoutId={`cs-image-${layoutIdSuffix}`}
                src="/images/work/mutt-couture/glass.png"
                layout="fill"
                objectFit="cover"
              />
            </AspectRatio>
          </Grid>
        </Box>
      </VStack>
    </Layout>
  );
}
