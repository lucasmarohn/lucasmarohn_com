import { splitText, printSpans } from "../../src/utils/helpers";
import Container from "../../components/container";
import {
  Button,
  VStack,
  Heading,
  Text,
  ButtonGroup,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeUpIn, stagger } from "../../src/utils/framer-variants";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButtonGroup = motion(ButtonGroup);
const MotionBox = motion(Box);
const MotionVStack = motion(VStack)

import Link from "next/link";

export default function Hero({
  headline,
  title,
  description,
  button,
  maxW,
  minH,
  children,
}) {
  return (
    <Container>
      <MotionVStack
        variants={stagger}
        animate="animate"
        transition={{
          duration: '.2',
          ease: 'easeOut'
        }}
        textAlign="center"
        py="5rem"
        spacing={["1rem", null, "2rem"]}
        minH={minH}
        maxW={maxW || "700px"}
        mx="auto"
        justify="center"
      >
        {headline && (
          <MotionHeading
            size="xs"
            variants={fadeUpIn}
            initial="hidden"
            animate="visible"
          >
            {headline}
          </MotionHeading>
        )}
        {title && (
          <MotionHeading
            as="h1"
            variant="h1"
            variants={fadeUpIn}
            initial="hidden"
            animate="visible"
            marginTop="1rem !important"
          >
            {printSpans(splitText(title))}
          </MotionHeading>
        )}
        {description && (
          <MotionText
            variant="large"
            variants={fadeUpIn}
            initial="hidden"
            animate="visible"
            maxW="900"
          >
            {description}
          </MotionText>
        )}
        {children}
        <MotionButtonGroup
          variants={fadeUpIn}
          initial="hidden"
          animate="visible"
        >
          {button && (
            <>
              {button?.href && (
                <Link href={button?.href} passHref>
                  <Button
                    as="a"
                    variant="primary"
                    size="lg"
                    onClick={button?.onClick}
                  >
                    {button.label}
                  </Button>
                </Link>
              )}
              {!button.href && button?.label && (
                <Button variant="primary" size="lg" onClick={button?.onClick}>
                  {button.label}
                </Button>
              )}
            </>
          )}
        </MotionButtonGroup>
      </MotionVStack>
    </Container>
  );
}
