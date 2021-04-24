import Container from '../container'
import { VStack } from'@chakra-ui/react'
import Wysiwyg from '../partials/wysiwyg'

export default function BasicText({text}) {
  if (!text) return null
  return (
    <Container maxW="60rem" mx="auto">
      <VStack spacing="1rem" sx={{
            "p + h1, p + h2, p + h3, p + h4, ul + h1, ul + h2, ul + h3, ul + h4": {
              marginTop: '3rem'
            }
          }}>
        <Wysiwyg
          html={text}
        />
      </VStack>
    </Container>
  )
}