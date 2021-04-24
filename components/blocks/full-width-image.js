import { Box } from '@chakra-ui/react'
import WPImage from '../partials/wp-image'

export default function FullWidthImage({image}) {
  if (!image) return null
  return (
    <Box w="100%">
      <WPImage image={image} />
    </Box>
  )
}