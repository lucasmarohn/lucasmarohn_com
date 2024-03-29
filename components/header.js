import { StackDivider, HStack, Grid } from "@chakra-ui/react";
import {
  Icon,
  Box,
  Flex,
  Button,
  IconButton,
  Heading,
  useBreakpointValue,
  useTheme,
} from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import {
  BiCollection,
  BiArrowBack,
  BiEnvelope,
  BiMoon,
  BiSun,
  BiUserCircle,
  BiMenu,
} from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnimateSharedLayout, motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

import { ChatButton } from "./partials/chat-button";

export default function Header() {
  const bg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const boxShadow = useColorModeValue(
    "0 -1rem 2rem rgba(0,0,0,.05)",
    "0 -1rem 2rem rgba(0,0,0,.3)"
  );
  const boxShadowBottom = useColorModeValue(
    "0 1rem 2rem rgba(0,0,0,.05)",
    "0 1rem 2rem rgba(0,0,0,.3)"
  );
  const router = useRouter();

  const navItems = [
    {
      title: "Work",
      icon: BiCollection,
      href: "/work",
    },
    {
      title: "About Me",
      icon: BiUserCircle,
      href: "/about",
    },
  ];
  return <HeaderDesktop router={router}
  bg={bg}
  borderColor={borderColor}
  boxShadow={boxShadow}
  boxShadowBottom={boxShadowBottom}
  navItems={navItems} />
}

function HeaderDesktop({
  navItems,
  router,
  bg,
}) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Grid
      layoutId="nav"
      templateColumns={["1fr auto 1fr"]}
      px={[0, null, null, "1rem"]}
      borderBottom="1px solid"
      borderColor={useColorModeValue("gray.100", "gray.900")}
      top="0"
      position={["sticky"]}
      zIndex={[10]}
      bg={[bg]}
    >
      <Flex
        top="0"
        justify="flex-start"
        align="center"
        p={['1.5rem', null, null, "2rem"]}
        zIndex="100"
        bg={bg}
      >
        <Link href="/" passHref>
          <Heading
            as="a"
            fontSize="22px"
            className={useColorModeValue('', "gradient-mask-primary")}
            w="auto"
            flexShrink="0"
          >
            Lucas Marohn
          </Heading>
        </Link>

        
      </Flex>

      
      <Box 
      position={["fixed", null, null, "static"]}
      bottom="0" w="100%" zIndex="100" pb="env(safe-area-inset-bottom)">
        <Flex
          justify="space-between"
          align="center"
          width="100%"
          pt={['.5rem', null, "2rem"]}
          px={['.5rem', null, "2rem"]}
          pb={['1rem', null, '2rem']}
          bg={bg}
        >
          <HStack
            justifyContent={["space-around", null, "space-between"]}
            w="100%"
            size="md"
            spacing={[0, "1rem"]}
          >
            {navItems &&
              navItems.map(({ title, icon, href }, idx) => {
                const isActive = router.pathname.includes(href);
                return (
                  <Box position="relative" key={idx}>
                    <Link href={href} scroll={false}>
                      <Button
                        as="a"
                        cursor="pointer"
                        position="relative"
                        zIndex={5}
                        variant="ghost"
                        bg="transparent"
                        border="0"
                        px="1rem"
                        _hover={{
                          bg: useColorModeValue("gray.50", "gray.800"),
                        }}
                        _focus={{
                          bg: useColorModeValue("gray.50", "gray.800"),
                        }}
                        _active={{
                          bg: useColorModeValue("gray.50", "gray.800"),
                        }}
                        leftIcon={
                          <Icon
                            as={icon}
                            boxSize={5}
                            color={
                              isActive
                                ? useColorModeValue(
                                    "brand.primary.400",
                                    "white"
                                  )
                                : useColorModeValue(
                                    "brand.primary.400",
                                    "brand.primary.100"
                                  )
                            }
                          />
                        }
                      >
                        {title}
                      </Button>
                    </Link>
                    {isActive && (
                      <MotionBox
                        layoutId="nav-active"
                        bg={useColorModeValue("gray.50", "gray.800")}
                        position="absolute"
                        top="0"
                        left="0"
                        right="0"
                        bottom="0"
                        zIndex={1}
                        borderRadius="10px"
                      />
                    )}
                  </Box>
                );
              })}
          </HStack>
        </Flex>
      </Box>

      <HStack justifySelf="end" gridColumn={[3]} pr={['10px', 0]}>
        <Box display={['block', null, null, 'block']}><ChatButton /></Box>
        <IconButton
          alignSelf="center"
          justifySelf="end"
          color={useColorModeValue("gray.400", null)}
          variant="link"
          bg="transparent"
          aria-label="Toggle Night Mode"
          _hover={{
            color: 'brand.primary.300'
          }}
          icon={useColorModeValue(<BiMoon />, <BiSun />)}
          onClick={toggleColorMode}
        />
      </HStack>
    </Grid>
  );
}