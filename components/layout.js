import Header from "./header";
import Footer from './footer'
import { Box } from '@chakra-ui/react'

export default function Layout({children}) {
  return (
    <>
      <Header />
      <Box minH="100vh">
        {children}
      </Box>
      <Footer />
    </>
  )
}