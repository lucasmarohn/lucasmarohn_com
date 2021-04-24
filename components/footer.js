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
      position={["sticky", null, "static"]}
      bottom="0"
      mt="100px"
      px={["2.5rem"]}
      py={['2.5rem', null, null, '5rem' ]}
      pb={["125px", null, null, "5rem"]}
      bg={useColorModeValue("white", "gray.900")}
    >
      <SectionWrap my="0" noAnimation>
        <Grid
          templateColumns={["100%", "1fr 1fr"]}
          maxW="1440"
          mx="auto"
        >
          <VStack align="left">
            <Heading size="md">voidmade</Heading>
            <Text fontSize="xs">&copy; 2021 voidmade</Text>
          </VStack>

          <VStack align="right">
            <HStack
              textAlign="right"
              justify="right"
              spacing="20px"
              fontSize={["sm", null, "lg"]}
            >
              <Link href="/">Home</Link>
              <Link href="/work">Work</Link>
              <Link href="/about">Team</Link>
              <Link href="/contact">Contact</Link>
            </HStack>
            <Text fontSize="xs" textAlign="right">
              Privacy Policy
            </Text>
          </VStack>
        </Grid>
      </SectionWrap>
    </Box>
  );
}
