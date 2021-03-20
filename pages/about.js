import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import { Box, VStack, Heading, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Testing</title>
      </Head>
      <Container>
        <VStack textAlign="center" py="3rem" spacing="1rem">
          <Heading size="xs">BRAND DESIGN AGENCY</Heading>
          <Heading size="lg" as="h1">Data-driven design strategy that makes your company more profitable</Heading>
          <Text fontSize="lg">Generate more leads, transactions, or what ever KPI's matter to you.</Text>
        </VStack>
      </Container>
    </Layout>
  )
}
