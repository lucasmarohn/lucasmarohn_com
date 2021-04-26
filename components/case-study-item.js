import Image from "next/image";
import Link from "next/link";
import { AnimateSharedLayout } from 'framer-motion'
import {
  Box,
  LinkBox,
  LinkOverlay,
  VStack,
  Heading,
  Grid,
  Text,
  AspectRatio,
  Button,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Wysiwyg from "./partials/wysiwyg";
import WPImage from "./partials/wp-image";

const MotionHeading = motion(Heading);
const MotionBox = motion(Box);
const MotionLinkBox = motion(LinkBox);
const MotionGrid = motion(Grid);
const MotionVStack = motion(VStack);
const MotionAspectRatio = motion(AspectRatio);

export default function CaseStudyItem({
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
    <AnimateSharedLayout>
      {useBreakpointValue({
        base: (
          <CaseStudyItemMobile
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
        ),
        lg: (
          <CaseStudyItemDesktop
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
        ),
      })}
    </AnimateSharedLayout>
  );
}

export function CaseStudyItemMobile({
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
  const bgColor = useColorModeValue("white", "gray.600");
  return (
    <MotionBox
    initial={initial}
    animate={animate}
    variants={variants}
    transition={transition}
    layoutId={`cs-text-${layoutIdSuffix}`}
    // whileHover={{
    //   scale: useBreakpointValue({ base: 1, sm: 1.02, md: 1 }),
    //   transition: { duration: 0.1 },
    // }}
    // whileTap={{
    //   scale: 0.975,
    //   transition: { duration: 0.1 },
    // }}
    >
      <LinkBox as="article" w="100%" bg={bgColor} zIndex="2">
        <Grid templateColumns="100%" alignItems="center">
          <MotionGrid
            zIndex="2"
            layoutId={`cs-text-${layoutIdSuffix}`}
            templateColumns="100%"
            gap="1rem"
            gridRow="1"
            p={["2rem", "3rem"]}
            bg={bgColor}
            
          >
            <MotionVStack align="left" layoutId={`cs-text-vstack-${layoutIdSuffix}`}>
              {headline && (
                <MotionHeading variant="h6" as="span" layoutId={`cs-headline-${layoutIdSuffix}`} layout="position">
                  {headline}
                </MotionHeading>
              )}

              <MotionHeading
                layoutId={`cs-title-${layoutIdSuffix}`}
                size="2xl"
                w="100%"
                layout="position"
              >
                <Link href={link} passHref>
                  <LinkOverlay as="a">{title}</LinkOverlay>
                </Link>
              </MotionHeading>
            </MotionVStack>

            <MotionBox
              fontSize="xl"
              layoutId={`cs-subtitle-${layoutIdSuffix}`}
              layout="position"
            >
              <Box dangerouslySetInnerHTML={{ __html: intro }} />
            </MotionBox>
          </MotionGrid>

          <MotionBox
            layoutId={`cs-thumb-${layoutIdSuffix}`}
            overflow="hidden"
            type="crossfade"
            w="100%"
            
          >
            <AspectRatio ratio={16 / 8} maxH="100vh" w="100%" zIndex="0">
              {thumbImage?.sourceUrl ? (
                <Image src={thumbImage?.sourceUrl} srcSet={thumbImage?.srcSet} layout="fill" objectFit="cover" />
              ) : (
                <Box bg="gray.100" />
              )}
            </AspectRatio>
          </MotionBox>
        </Grid>
      </LinkBox>
    </MotionBox>
  );
}

export function CaseStudyItemDesktop({
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
  const bgColor = useColorModeValue("white", "gray.700");
  return (
    <MotionLinkBox
      as="article"
      w="100%"
      bg={bgColor}
      layoutId={`cs-article-${layoutIdSuffix}`}
      initial={initial}
      animate={animate}
      variants={variants}
      transition={transition}
      zIndex="1"
      role="group"
      whileTap={{
        scale: 0.99,
        transition: { duration: 0.1 },
        boxShadow: "rgba(0,50,100,.2) 0px 16px 16px 0px",
      }}
    >
      <MotionBox boxShadow="0 2rem 2rem rgba(0,50,100,.1)" position="static">
        <Grid templateColumns="100%" alignItems="center" gap={[10, null, 0]}>
          <Grid
            templateColumns="2fr 1fr"
            gap="1rem"
            gridRow="1"
            p="5rem"
            gap="3rem"
            alignItems="end"
            bg={bgColor}
            borderBottomRadius="1rem"
            position="static"
          >
            <MotionVStack
              align="left"
              layoutId={`cs-text-vstack-${layoutIdSuffix}`}
            >
              {headline && (
                <Heading
                  variant="h6"
                  as="span"
                  layoutId={`cs-headline-${layoutIdSuffix}`}
                >
                  {headline}
                </Heading>
              )}
              <MotionHeading
                layoutId={`cs-title-${layoutIdSuffix}`}
                size="2xl"
                w="100%"
                layout="position"
              >
                <Link href={link} passHref>
                  <LinkOverlay as="a">{title}</LinkOverlay>
                </Link>
              </MotionHeading>
            </MotionVStack>

            <MotionBox
              fontSize="lg"
              layoutId={`cs-subtitle-${layoutIdSuffix}`}
              layout="position"
              alignSelf="flex-end"
              justifySelf="flex-end"
            >
              <Box dangerouslySetInnerHTML={{ __html: intro }} />
            </MotionBox>
          </Grid>

          <MotionBox
            layoutId={`cs-thumb-${layoutIdSuffix}`}
            overflow="hidden"
            type="crossfade"
            w="100%"
            zIndex="-1"
          >
            <AspectRatio
              ratio={16 / 8}
              maxH="100vh"
              whileTap={{
                scale: 1.1
              }}
              _groupHover={{ transform: "scale(1.05)" }}
              transition="transform .2s ease-out"
            >
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
            </AspectRatio>
          </MotionBox>
        </Grid>
      </MotionBox>
    </MotionLinkBox>
  );
}
