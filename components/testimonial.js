import { Box, VStack, HStack, Image, Text, Heading, useColorModeValue } from '@chakra-ui/react'

export default function Testimonial({quote, author, title, image}){
  return (
    <VStack w="100%" spacing="1rem">
    <Box as="blockquote" bg={useColorModeValue("gray.100", "gray.700")} borderRadius="1rem" borderBottomLeftRadius="0" p="1.5rem" w="100%">
      {quote}
    </Box>
    <HStack w="100%" spacing="1rem">
      {image && <Box borderRadius="50%" overflow="hidden"><Image src={image} width="50px" height="50px" /></Box>}
      <VStack spacing="0">
        <Text fontSize="lg" w="100%">{author}</Text>
        <Text fontSize="sm" w="100%">{title}</Text>
      </VStack>
    </HStack>
  </VStack>
  )
}