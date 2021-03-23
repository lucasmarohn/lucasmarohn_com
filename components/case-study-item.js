import Image from 'next/image'
import Link from 'next/link'

import { Box, LinkBox, LinkOverlay, VStack, Heading, Text, AspectRatio, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionBox = motion(Box)

export default function CaseStudyItem({thumbURL, link, title, intro, layoutIdSuffix, initial, animate, variants, transition}) {
  const bgColor = useColorModeValue('white', 'gray.700')
  return(
  <motion.div 
    initial={initial}
    animate={animate}
    variants={variants}
    whileHover={{
      scale: 1.02,
      transition: { duration: .1 },
    }}
    whileTap={{
      scale: 0.975,
      transition: { duration: .1 },
    }}
    transition={transition}>
    <LinkBox as="article" w="100%" bg={bgColor} boxShadow="0 10px 20px rgba(0,0,0,.1)" borderRadius="1rem">
      <MotionBox bgImage={`url(${thumbURL})`} layoutId={`cs-thumb-${layoutIdSuffix}`} borderTopRadius="1rem" overflow="hidden">
        <AspectRatio ratio={3 / 4} >
          <Image src={thumbURL} layout="fill" objectFit="cover" />
        </AspectRatio>
      </MotionBox>
      <VStack p="1rem" alignItems="start" bg={bgColor} borderBottomRadius="1rem" >
        <MotionHeading layoutId={`cs-title-${layoutIdSuffix}`} size="md" w="100%"><Link href={link} passHref><LinkOverlay as="a">{title}</LinkOverlay></Link></MotionHeading>
        <MotionText layoutId={`cs-desc-${layoutIdSuffix}`}>{intro}</MotionText>
      </VStack>
    </LinkBox>
  </motion.div>
)}