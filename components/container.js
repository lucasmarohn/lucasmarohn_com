import { Box } from '@chakra-ui/react'

export default function Container({children}){
  return (
  <Box px="1.5rem" maxW="100rem" mx="auto">
    {children}
  </Box>
  )
}