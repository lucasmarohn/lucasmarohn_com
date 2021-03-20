import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, HStack } from '@chakra-ui/react'
import { Box, Flex, Button, IconButton, Heading, ButtonGroup  } from '@chakra-ui/react'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { BiCollection, BiHome, BiEnvelope, BiMoon, BiSun, BiUserCircle, BiMenu } from 'react-icons/bi'
import Link from 'next/link'


export default function Header(){
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
    <Flex position="sticky" top="0" justify="space-between" p="1rem" zIndex="100" bg="gray.800">
      <Heading as="span" size="lg"><Link href="/"><a>ourconscious</a></Link></Heading>
      <ButtonGroup>
        <IconButton icon={useColorModeValue(<BiMoon />, <BiSun />)}  onClick={toggleColorMode} />
        
      </ButtonGroup>
    </Flex>

    <Box position="fixed" bottom="0" w="100%" zIndex="100">
        
      <Flex 
        justify="space-between"
        align="center"
        width="100%" 
        p="1rem" 
        borderTop="1px solid" 
        borderColor={useColorModeValue("gray.200", "gray.600")} bg={useColorModeValue("white", "gray.800")}>

   

        <ButtonGroup justifyContent="space-between" w="100%" size="md" spacing="1rem">
          <Button leftIcon={<BiCollection />}><Link href="/work"><a>Work</a></Link></Button>
          <Button leftIcon={<BiUserCircle />}><Link href="/about"><a>Team</a></Link></Button>
          <Button leftIcon={<BiEnvelope />}><Link href="/contact"><a>Contact</a></Link></Button>
        </ButtonGroup>


        
      </Flex>
    </Box>
  </>
  )
}