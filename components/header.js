import { Menu, MenuButton, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react'
import { Box, Flex, Button, IconButton, Heading, ButtonGroup  } from '@chakra-ui/react'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { BiCollection, BiHome, BiEnvelope, BiMoon, BiSun, BiUserCircle, BiMenu } from 'react-icons/bi'
import Link from 'next/link'


export default function Header(){
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
    <Box position="sticky" top="0" align="center" p="1rem">
      <Heading as="span" size="lg"><Link href="/"><a>ourconscious</a></Link></Heading>
    </Box>

    <Box position="fixed" bottom="0" w="100%" zIndex="100">
        
      <Flex 
        justify="space-between"
        align="center"
        width="100%" 
        p="1rem" 
        borderTop="1px solid" 
        borderColor={useColorModeValue("gray.200", "gray.600")} bg={useColorModeValue("white", "gray.800")}>

        <IconButton icon={useColorModeValue(<BiMoon />, <BiSun />)}  onClick={toggleColorMode} />

        <Menu placement="top" offset={[null, 25]}>
          <MenuButton as={Button} leftIcon={<BiMenu />}>Menu</MenuButton>
          <MenuList w="calc(100vw - 1rem)" >
            <MenuItem icon={<BiHome />}><Link href="/"><a>Home</a></Link></MenuItem>
            <MenuItem icon={<BiCollection />}><Link href="/work"><a>Work</a></Link></MenuItem>
            <MenuItem  icon={<BiUserCircle />}><Link href="/about"><a>Team</a></Link></MenuItem>
            
            <MenuDivider />

            <MenuItem icon={<BiEnvelope />}><Link href="/contact"><a>Contact</a></Link></MenuItem>
          </MenuList>
        </Menu>

        <IconButton icon={<BiEnvelope />}></IconButton>
        
      </Flex>
    </Box>
  </>
  )
}