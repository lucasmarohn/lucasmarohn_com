import Image from "next/image";
import Link from "next/link";

import {
  Box,
  LinkBox,
  LinkOverlay,
  VStack,
  Heading,
  Grid,
  AspectRatio,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import WPImage from "./partials/wp-image";

const MotionHeading = motion(Heading);
const MotionBox = motion(Box);
const MotionGrid = motion(Grid);
const MotionAspectRatio = motion(AspectRatio);
const MotionImage = motion(Image);
const MotionVStack = motion(VStack);

export default function CaseStudyHero({
  thumbURL,
  link,
  title,
  intro,
  layoutIdSuffix,
  initial,
  animate,
  variants,
  transition,
  reverse,
  headline,
  thumbImage = null,
}) {
  return (
    <CaseStudyHeroDesktop
      thumbURL={thumbURL}
      link={link}
      title={title}
      intro={intro}
      layoutIdSuffix={layoutIdSuffix}
      initial={initial}
      animate={animate}
      variants={variants}
      transition={transition}
      headline={headline}
      reverse={reverse}
      thumbImage={thumbImage}
    />
  );
}

export function CaseStudyHeroDesktop({
  link,
  title,
  intro,
  layoutIdSuffix,
  initial,
  animate,
  variants,
  transition,
  headline,
  thumbImage = null,
}) {
  const bgColor = useColorModeValue("white", "gray.600");
  return (
    <MotionBox
      as="article"
      w="100%"
      bg="transparent"
      layoutId={`cs-article-${layoutIdSuffix}`}
    >
      <Grid templateColumns="100%" alignItems="center" gap={[10, null, 0]}>
        <Grid
          templateColumns="1fr 1.5fr"
          gap="1rem"
          gridRow="1"
          p="5rem"
          gap="3rem"
          alignItems="end"
          bg="transparent"
          borderBottomRadius="1rem"
        >
          <MotionVStack align="left" layoutId={`cs-text-vstack-${layoutIdSuffix}`}>
            {headline && (
              <Heading variant="h6" as="span" layoutId={`cs-headline-${layoutIdSuffix}`}>
                {headline}
              </Heading>
            )}
            <MotionHeading
              layoutId={`cs-title-${layoutIdSuffix}`}
              size="2xl"
              w="100%"
              layout="position"
            >
              {title}
            </MotionHeading>
          </MotionVStack>

          
        </Grid>
      </Grid>
      <MotionBox boxShadow="0 2rem 2rem rgba(0,50,100,0)">
        <Grid templateColumns="100%" alignItems="center" gap={[10, null, 0]}>
          <MotionGrid
            templateColumns="1fr 1.5fr"
            gap="1rem"
            gridRow="1"
            gap="3rem"
            alignItems="end"
            bg={bgColor}
            borderBottomRadius="1rem"
            layoutId={`cs-text-${layoutIdSuffix}`}
          ></MotionGrid>

          <MotionBox
            layoutId={`cs-thumb-${layoutIdSuffix}`}
            overflow="hidden"
            type="crossfade"
            w="100%"
            
          >
            <MotionAspectRatio ratio={16 / 9} maxH="100vh" initial={{scale:1.1}} animate={{scale: 1, transition: {delay: .3, duration: 1, ease: 'circOut'}}}>
              {thumbImage?.sourceUrl ? (
                <Image
                  src={thumbImage?.sourceUrl}
                  srcSet={thumbImage?.srcSet}
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <Box bg="gray.100" />
              )}
            </MotionAspectRatio>
          </MotionBox>
        </Grid>
      </MotionBox>
    </MotionBox>
  );
}
