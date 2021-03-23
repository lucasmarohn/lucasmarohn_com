import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import Container from '../components/container'
import { LinkBox, LinkOverlay, VStack, Heading, Text, AspectRatio } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import CaseStudyItem from '../components/case-study-item'
import { fadeUpIn } from '../src/utils/framer-variants'

const MotionHeading = motion(Heading)
const MotionCaseStudyItem = motion(CaseStudyItem)

export default function Home() {

  
  return (
    <Layout>
      <Head>
        <title>Testing</title>
      </Head>
      <Container>
        <VStack textAlign="center" py="3rem">
          <MotionHeading size="xs" 
            initial="hidden"
            animate="visible"
            variants={fadeUpIn}
            transition={{ease: "easeOut", duration: .2, delay: 0}}>
            WORK
          </MotionHeading>
          <MotionHeading size="lg" as="h1" 
            variants={fadeUpIn}
            transition={{ease: "easeOut", duration: .2, delay: .1}}
            initial="hidden"
            animate="visible">
              Case Studies
          </MotionHeading>
        </VStack>

        
        <VStack spacing="2rem" alignItems="stretch" w="100%">
            <CaseStudyItem 
              
              animate="visible"
              variants={fadeUpIn}
              transition={{ease: "easeOut", duration: .5, delay: .2}}
              layoutIdSuffix="mc" 
              title="Mutt Couture" 
              intro="Redefining a Wholesale Pet Company as a Luxury DTC Brand" 
              link="/work/mutt-couture" 
              thumbURL="/images/work/mutt-couture/thumb.jpg" />
            <CaseStudyItem 
              
              animate="visible"
              variants={fadeUpIn}
              transition={{ease: "easeOut", duration: .5, delay: .3}}
              layoutIdSuffix="keri" 
              title="Keri Systems" 
              intro="A rebrand resulting in an 800% Increase in qualified leads in the first 30 days" 
              link="/work/keri-systems" 
              thumbURL="/images/work/kerisys/thumb.png" />
        </VStack>


      </Container>
    </Layout>
  )
}
