import Link from 'next/link'
import { Box, Button, useColorModeValue } from '@chakra-ui/react'

export const ChatButton = () => {
  return <Link id="chat" href="/contact" passHref>
    <Button 
      display={['flex']}
      as="a"
      alignSelf="center"
      h="40px"
      py={['10px', "20px"]}
      px={['20px', '20px']}
      justifySelf="center"
      bg={useColorModeValue('gray.25', 'gray.900')}
      border="2px solid"
      borderColor={useColorModeValue('brand.primary.400', 'brand.primary.300')}
      fontSize={['12px', "14px"]}
      color={useColorModeValue('gray.900', 'white.100')}
      borderRadius="3rem"
      flexDirection="row-reverse"
      alignContent="center"
      justifyContent="center"
      textDecoration="none"
      w="auto"
      id="chat"
      fontWeight="300"
      _hover={{
        bg: 'brand.primary.300',
        color: "gray.900",
        borderColor: useColorModeValue('brand.primary.300', 'brand.primary.300'),
      }}
      _active={{
        bg: 'brand.primary.300',
        color: "gray.900"
      }}
    >
      <Box as="span" className="label" transform="translateY(1px)">Say Hello</Box>
    </Button>
  </Link>
}