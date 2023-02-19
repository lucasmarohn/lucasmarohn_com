import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'
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
import { AnimateSharedLayout, motion } from "framer-motion";
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
  thumbVideoMp4 = null,
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
      thumbVideoMp4={thumbVideoMp4}
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
  thumbVideoMp4 = null,
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
          templateColumns="100%"
          gap="1rem"
          gridRow="1"
          p={["3rem 1.5rem", null, "5rem"]}
          gap="3rem"
          alignItems="end"
          bg="transparent"
          borderBottomRadius="1rem"
        >
          <MotionVStack align="left" layoutId={`cs-text-vstack-${layoutIdSuffix}`}>
            {headline && (
              <MotionHeading variant="h6" as="h1" layoutId={`cs-headline-${layoutIdSuffix}`}>
                {headline}
              </MotionHeading>
            )}
            <MotionHeading
              layoutId={`cs-title-${layoutIdSuffix}`}
              size="2xl"
              w="100%"
              as="h2"
              layout="position"
            >
              {title}
            </MotionHeading>
          </MotionVStack>

          
        </Grid>
      </Grid>
      <MotionBox>
        <Grid templateColumns="100%" alignItems="center" gap={[10, null, 0]}>

          <MotionBox
            layoutId={`cs-thumb-${layoutIdSuffix}`}
            overflow="hidden"
            w="100%"
            
          >
            <MotionAspectRatio ratio={16 / 9} maxH="100vh" initial={{scale:1.1}} animate={{scale: 1, transition: {delay: .3, duration: 1, ease: 'circOut'}}}>
              <>
                {thumbVideoMp4 && thumbVideoMp4?.mediaItemUrl && 
                  (<video src={thumbVideoMp4.mediaItemUrl} autoPlay={true} muted={true} loop={true} />)
                }
                {!thumbVideoMp4?.mediaItemUrl && thumbImage?.sourceUrl && (
                  <Image
                    src={thumbImage?.sourceUrl}
                    srcSet={thumbImage?.srcSet}
                    layout="fill"
                    objectFit="cover"
                    alt={thumbImage?.altText}
                  />
                )}
              </>
            </MotionAspectRatio>
          </MotionBox>
        </Grid>
      </MotionBox>
    </MotionBox>
  );
}
