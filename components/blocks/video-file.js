import { AspectRatio, Box } from "@chakra-ui/react"

export const VideoFile = ({ aspectRatio, posterUrl, mp4Url}) => {
  if(!mp4Url) return null 
  
  return (
    <Box w="100%">
      <AspectRatio ratio={aspectRatio}>
        <video
          poster={posterUrl}
          loop
          autoPlay={true}
          muted
        >
          <source
            type="video/mp4"
            src={mp4Url}
          />
        </video>
      </AspectRatio>
    </Box>
  )
}