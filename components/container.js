import { Box } from '@chakra-ui/react'

export default function Container(props){
  return (
  <Box>
    <Box px={["1.5rem", '3rem', '5rem']} maxW={props.maxW || props.maxWidth || "100rem"} mx="auto" {...props}>
      {props.children}
    </Box>
  </Box>
  )
}