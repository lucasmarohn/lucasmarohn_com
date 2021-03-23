import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'
import Container from '../../components/container'
import { useColorModeValue, Box, StatNumber, HStack, Button, VStack, Heading, Text, SimpleGrid, AspectRatio, Stat, StatLabel, StatHelpText, StatArrow, useColorMode } from '@chakra-ui/react'

import { motion } from 'framer-motion'
import { fadeDownIn } from '../../src/utils/framer-variants'
import Testimonial from '../../components/testimonial'
const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionImage = motion(Image)

export default function MuttCouture() {
  const layoutIdSuffix = 'mc'

  return (
    <Layout>
      <Head>
        <title>Mutt Couture</title>
      </Head>
      <MotionBox className="hero" as="article" w="100%" layoutId={`cs-card-${layoutIdSuffix}`}>
        <MotionBox layoutId={`cs-thumb-${layoutIdSuffix}`} borderTopRadius="0rem" overflow="hidden">
          <AspectRatio ratio={3 / 4} bg="gray.100">
            <Image layoutId={`cs-image-${layoutIdSuffix}`} src="/images/work/mutt-couture/thumb.jpg" layout="fill" objectFit="cover" />
          </AspectRatio>
        </MotionBox>
        <VStack p="1rem" alignItems="start">
          <MotionHeading layoutId={`cs-title-${layoutIdSuffix}`} size="sm" w="100%" fontWeight="400" color={useColorModeValue("brand.primary.400", "brand.primary.100")}>Mutt Couture</MotionHeading>
          <MotionHeading as="h1" variants={fadeDownIn} initial="hidden" animate="visible" transition={{delay: .05, duration: .25}}>Rebranding a wholesale company into a Luxury consumer brand</MotionHeading>
          <MotionText layoutId={`cs-desc-${layoutIdSuffix}`} fontSize="lg">A rebrand resulting in an 800% Increase in qualified leads in the first 30 days</MotionText>
        </VStack>
      </MotionBox>

      <Container my="3rem" className="blocks">
        <VStack spacing="5rem">
        <VStack spacing="1rem" w="100%">
          <Heading as="h2" size="sm" w="100%">Lifting KPI's Accross the Board</Heading>
          <SimpleGrid columns={[2, 4]} gap={5} w="100%">
            <Stat>
              <StatLabel>Total Sales</StatLabel>
              <StatNumber><StatArrow type="increase" />3,965%</StatNumber>
            </Stat>

            <Stat>
              <StatLabel>Total Orders</StatLabel>
              <StatNumber><StatArrow type="increase" />3,567%</StatNumber>
            </Stat>

            <Stat>
              <StatLabel>Online Store Sessions</StatLabel>
              <StatNumber><StatArrow type="increase" />1,504%</StatNumber>
            </Stat>

            <Stat>
              <StatLabel>Conversion Rate</StatLabel>
              <StatNumber><StatArrow type="increase" />112%</StatNumber>
            </Stat>
          </SimpleGrid>
          <Text fontSize="sm" w="100%">Compared to previous year</Text>
        </VStack>

        <Testimonial image="/images/work/mutt-couture/testimonial-thumb.jpg" author="Josh Herman" title="Founder of Mutt Couture" quote="My Business is so profitable now" />
        
        </VStack>
      </Container>


    </Layout>
  )
}
