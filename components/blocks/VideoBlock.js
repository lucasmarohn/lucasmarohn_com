import { AspectRatio, Box } from "@chakra-ui/react"
import getVideoId from 'get-video-id'

export const VideoBlock = ({ aspectRatio, cover, mp4Url, content}) => {
  const ratio = aspectRatio && aspectRatio > 0 ? 100 / aspectRatio : 16 / 9

  if (mp4Url && mp4Url.mediaItemUrl !== null) {
    return (
      <Box w="100%">
        <AspectRatio ratio={ratio}>
          <video
            poster={cover}
            loop
            autoPlay={true}
            muted
          >
            <source
              type="video/mp4"
              src={mp4Url.mediaItemUrl}
            />
          </video>
        </AspectRatio>
      </Box> 
    )
  }
  else if(content) {
    const { id, service } = getVideoId(content)
    if(service == 'youtube') {
      return (
        <Box w="100%">
          <AspectRatio w="100%" ratio={ratio}>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`} title={'video'} frameBorder="0" allowFullScreen />
          </AspectRatio>
        </Box>
      )
    }
    return null
  }
  
  return null
}