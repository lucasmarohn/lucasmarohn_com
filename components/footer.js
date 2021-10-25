import {
  Grid,
  Box,
  Text,
  useColorModeValue,
  HStack,
  VStack,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import SectionWrap from "./partials/section-wrap";
export default function Footer() {
  return (
    <Box
      px={["2.5rem"]}
      py={['2.5rem', null, null, '5rem' ]}
      pb={["125px", null, null, "5rem"]}
      bg={useColorModeValue("white", "gray.900")}
    >
      <SectionWrap my="0" noAnimation>
        <Grid
          templateColumns={["100%", null, "1fr 1fr"]}
          maxW="1440"
          mx="auto"
          textAlign={['center','none']}
        >
          <VStack align="left" textAlign={[null, null, "left"]}>
            <Heading size="md">Lucas Marohn</Heading>
            <Text fontSize="xs">&copy; 2021 Lucas Marohn</Text>
          </VStack>

          <VStack align={[null, null, "right"]}>
            <HStack
              textAlign={[null, null, "right"]}
              justify={['center', null, "right"]}
              spacing="20px"
              fontSize={["sm", null, "lg"]}
            >
              <Link href="/">Home</Link>
              <Link href="/work">Work</Link>
              <Link href="/about">About Me</Link>
              <Link href="/contact">Contact</Link>
            </HStack>
            <Text fontSize="xs" textAlign={[null, null, "right"]}>
              Privacy Policy
            </Text>
          </VStack>
        </Grid>
      </SectionWrap>
    </Box>
  );
}
