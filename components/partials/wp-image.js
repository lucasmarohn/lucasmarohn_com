import { Box, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Wysiwyg from "./wysiwyg";
export default function WPImage({ image, altText = null, layout = "responsive", objectFit = "contain", withBlur }) {
  return (
    <Box w="100%" position={withBlur ?? "relative"}>
      <Box position="relative" w="100%">
        <Image
          src={image.sourceUrl}
          srcSet={image.srcSet}
          alt={altText ? altText : image.altText}
          width={image.mediaDetails.width}
          height={image.mediaDetails.height}
          layout={layout}
          objectFit={objectFit}
        />
        {withBlur && useColorModeValue(<Box position="absolute" inset="0" transform="translateY(2rem)" zIndex="-1" filter="contrast(.75) blur(1rem)" opacity=".2">
          <Image
            src={image.sourceUrl}
            srcSet={image.srcSet}
            alt={altText ? altText : image.altText}
            width={image.mediaDetails.width}
            height={image.mediaDetails.height}
            layout={layout}
            objectFit={objectFit}
          />
        </Box>, null)}
      </Box>
    {image.caption && <Box opacity=".7" p="1rem" dangerouslySetInnerHTML={{__html: image.caption}} />}
    </Box>
  );
}
