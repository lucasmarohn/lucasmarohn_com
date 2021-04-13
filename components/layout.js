import Header from "./header";
import Footer from './footer'
import { Box } from '@chakra-ui/react'

import Head from 'next/head'
export default function Layout({children}) {
  return (
    <>
      <Header />
      <Box minH="100vh" pb={['100px', null, '0px']}>
        {children}
      </Box>
      <Footer />
    </>
  )
}