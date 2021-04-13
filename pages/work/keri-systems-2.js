import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'
import Container from '../../components/container'
import { SimpleGrid, Stat, StatLabel, StatNumber, StatArrow, Box, HStack, VStack, Heading, Text, AspectRatio } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { fadeDownIn } from '../../src/utils/framer-variants'
import Testimonial from '../../components/testimonial'
import Stats from '../../components/blocks/stats'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

export default function KeriSystems() {
  const layoutIdSuffix = "keri";
  const thumbSrc = '/images/work/kerisys/thumb.png'

  return (
    <Layout>
      <Head>
        <title>Mutt Couture</title>
      </Head>

      <MotionBox as="article" w="100%" layoutId={`cs-card-${layoutIdSuffix}`} >
        <MotionBox bgImage={`url(${thumbSrc})`} layoutId={`cs-thumb-${layoutIdSuffix}`} borderTopRadius="0" maxH="100vh" overflow="hidden">
          <AspectRatio ratio={3 / 4}>
            <Image src={thumbSrc} layout="fill" objectFit="cover" unoptimized={false} />
          </AspectRatio>
        </MotionBox>
        <VStack as={Container} pt="2rem" alignItems="start">
          <MotionHeading layoutId={`cs-title-${layoutIdSuffix}`} size="sm" w="100%" color="gray.500" fontWeight="400" color="brand.primary.400">Keri Systems</MotionHeading>
          <MotionHeading as="h1" variants={fadeDownIn} initial="hidden" animate="visible" transition={{delay: .05, duration: .25}}>Manufacturing Company Rebrand</MotionHeading>
          <MotionText layoutId={`cs-desc-${layoutIdSuffix}`} fontSize="lg">A rebrand resulting in an 800% Increase in qualified leads in the first 30 days</MotionText>
        </VStack>
      </MotionBox>

      <Container my="3rem" className="blocks">
        <VStack spacing="5rem">

          <Stats statData={[
            {title: 'Lead Increase', value: 800, suffix: '%'},
            {title: 'Form Submissions', value: 400, suffix: '%'},
          ]}/>

          <Testimonial image="/images/work/kerisys/thumb.png" author="Chris Hudson" title="Marketing at Keri Systems" quote="Mate. This week has been absolutely mental. My inbox has surpassed like 100/day. Every 20 mins we're getting a touch-point with someone." />
        </VStack>
      </Container>

    </Layout>
  )
}