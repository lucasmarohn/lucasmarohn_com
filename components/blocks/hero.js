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

import Link from "next/link";

const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButtonGroup = motion(ButtonGroup);

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
    <Container maxW="960px" my="5rem">
      <MotionVStack
        textAlign="center"
        
        spacing={["1rem", null, "2rem"]}
        minH={minH}
        maxW={maxW || "700px"}
        mx="auto"
        justify="center"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {headline && (
          <MotionHeading variants={fadeUpIn} variant="h6">
            {headline}
          </MotionHeading>
        )}
        {title && (
          <MotionHeading
            variants={fadeUpIn}
            as="h1"
            variant="h1"
            marginTop="1rem !important"
          >
            {printSpans(splitText(title))}
          </MotionHeading>
        )}
        {description && (
          <MotionText variants={fadeUpIn} variant="large" maxW="700">
            {description}
          </MotionText>
        )}
        {children}
        <MotionButtonGroup variants={fadeUpIn}>
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
