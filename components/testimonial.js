import { Box, VStack, HStack, Image, Text, Heading, useColorModeValue } from '@chakra-ui/react'

export default function Testimonial({quote, author, title, image, bg, backgroundColor}){
  return (
    <VStack w="100%" spacing="1rem">
    <Text fontSize="xl" as="blockquote" bg={bg ?? backgroundColor ?? useColorModeValue("gray.50", "gray.600")} color={useColorModeValue('gray.800', 'gray.100')} borderRadius="1rem" borderBottomLeftRadius="0" p="1.5rem" w="100%">
      {quote}
    </Text>
    <HStack w="100%" spacing="1rem">
      {image && <Box borderRadius="50%" overflow="hidden"><Image src={image} width="50px" height="50px" alt={image?.altText} /></Box>}
      <VStack spacing="0">
        <Text fontSize="lg" w="100%" fontWeight="bold">{author}</Text>
        <Text fontSize="sm" w="100%">{title}</Text>
      </VStack>
    </HStack>
  </VStack>
  )
}