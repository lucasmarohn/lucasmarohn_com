import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, StackDivider, HStack } from '@chakra-ui/react'
import { Icon, Box, Flex, Button, IconButton, Heading, ButtonGroup  } from '@chakra-ui/react'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { BiCollection, BiArrowBack, BiEnvelope, BiMoon, BiSun, BiUserCircle, BiMenu } from 'react-icons/bi'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionButton = motion(Button)

export default function Header(){
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const boxShadow = useColorModeValue('0 -1rem 2rem rgba(0,0,0,.05)', "0 -1rem 2rem rgba(0,0,0,.3)")
  const router = useRouter()

  const navItems = [
    {
      title: "Work",
      icon: BiCollection,
      href: "/work"
    },
    {
      title: "Team",
      icon: BiUserCircle,
      href: "/about"
    },
    {
      title: "Say Hi",
      icon: BiEnvelope,
      href: "/contact"
    }
  ]

  return (
    <>
    <Flex position="sticky" top="0" justify="space-between" p="1rem" zIndex="100" bg={bg} >
      <Heading as="span" size="lg"><Link href="/"><a>ourconscious</a></Link></Heading>
      <IconButton icon={useColorModeValue(<BiMoon />, <BiSun />)}  onClick={toggleColorMode} />
    </Flex>

    <Box position="fixed" bottom="0" w="100%" zIndex="100">
    {router.pathname.includes('/work/') &&  <Flex p="1rem" w="100%" justifyContent="flex-end">
      <Link href="/work" passHref scroll={false}>
        <MotionButton 
        initial={{opacity: 0, transform: "translateY(1rem)"}}
        animate={{opacity: 1, transform: "translateY(0%)"}}
        transition={{duration: .5, delay: 1}} 
        as="a" 
        size="sm" 
        leftIcon={<BiArrowBack />}
        variant="tertiary"
        
        >Case Studies</MotionButton></Link></Flex>}
      <Flex 
        justify="space-between"
        align="center"
        width="100%" 
        p="1rem" 
        borderTop="1px solid" 
        borderColor={borderColor} 
        bg={bg}
        boxShadow={boxShadow}
        >

        <HStack justifyContent="space-between" w="100%" size="md" divider={<StackDivider borderColor={borderColor} />}>
          {navItems && navItems.map( ({title, icon, href}, idx)  => {
            const isActive = router.pathname.includes(href)
            return (
              <Box position="relative" key={idx}>
              <Button 
                position="relative"
                zIndex="5"
                variant="ghost" 
                bg="transparent"
                _hover={{
                  bg: "transparent"
                }}
                leftIcon={<Icon as={icon} boxSize={5} 
                color={isActive ? useColorModeValue("brand.primary.400", "white") : useColorModeValue("brand.primary.400", "brand.primary.100")} />}>
                <Link href={href} scroll={false}><a>{title}</a></Link>
              </Button>
              {isActive && <MotionBox 
                opacity=".1"
                layoutId="nav-active" 
                bg={useColorModeValue("brand.primary.400", "gray.700")} 
                position="absolute" 
                initial={useColorModeValue({
                  opacity: .1
                },{})}
                animate={useColorModeValue({
                  opacity: .1
                },{})}
                top="0" left="0" right="0" bottom="0" zIndex="1" borderRadius=".5rem" />}
            </Box>
            )}
          )}
        </HStack>


        
      </Flex>
    </Box>
  </>
  )
}