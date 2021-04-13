import Image from "next/image";
import Link from "next/link";

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

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);

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
}) {
  const bgColor = useColorModeValue("white", "gray.700");
  return (
    <MotionBox
      initial={initial}
      animate={animate}
      variants={variants}
      whileHover={{
        scale: useBreakpointValue({ base: 1, sm: 1.02, md: 1 }),
        transition: { duration: 0.1 },
      }}
      whileTap={{
        scale: 0.975,
        transition: { duration: 0.1 },
      }}
      transition={transition}
    >
      <LinkBox
        as="article"
        w="100%"
        bg={bgColor}
        boxShadow={["0 10px 20px rgba(0,0,0,.1)", null, "none"]}
        borderRadius={["1rem", null, "0"]}
      >
        <Grid
          templateColumns={["1fr", null, "repeat(3, 1fr)"]}
          alignItems="center"
          gap={[10, null, 0]}
        >
          <MotionBox
            gridColumn={["1", null, reverse ? "2 / span 2" : "1 / span 2"]}
            gridRow={[null, null, "1"]}
            layoutId={`cs-thumb-${layoutIdSuffix}`}
            borderTopRadius={["1rem", null, "0"]}
            overflow="hidden"
            type="crossfade"
          >
            <AspectRatio ratio={[3 / 4, null, 3 / 3]} maxH="100vh">
              <Image src={thumbURL} layout="fill" objectFit="cover" />
            </AspectRatio>
          </MotionBox>
          <VStack
            spacing="1rem"
            gridColumn={["1", null, reverse ? "1" : "3"]}
            gridRow={[null, null, "1"]}
            p={["1rem", null, "5rem"]}
            alignItems="start"
            bg={bgColor}
            borderBottomRadius="1rem"
          >
            <MotionHeading
              layoutId={`cs-title-${layoutIdSuffix}`}
              size="lg"
              w="100%"
              layout="position"
            >
              <Link href={link} passHref>
                <LinkOverlay as="a">{title}</LinkOverlay>
              </Link>
            </MotionHeading>
            <MotionText
              fontSize="xl"
              layoutId={`cs-subtitle-${layoutIdSuffix}`}
              layout="position"
            >
              {intro}
            </MotionText>
            <Button>Learn More</Button>
          </VStack>
        </Grid>
      </LinkBox>
    </MotionBox>
  );
}
