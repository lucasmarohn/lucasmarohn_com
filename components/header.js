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
      title: "Team",
      icon: BiUserCircle,
      href: "/about",
    },
    {
      title: "Say Hi",
      icon: BiEnvelope,
      href: "/contact",
    },
  ];
  return <HeaderDesktop router={router}
  bg={bg}
  borderColor={borderColor}
  boxShadow={boxShadow}
  boxShadowBottom={boxShadowBottom}
  navItems={navItems} />
  return (
    <AnimateSharedLayout>
      {useBreakpointValue({
        base: (
          <HeaderMobile
            router={router}
            bg={bg}
            borderColor={borderColor}
            boxShadow={boxShadow}
            boxShadowBottom={boxShadowBottom}
            navItems={navItems}
          />
        ),
        lg: (
          <HeaderDesktop
            router={router}
            bg={bg}
            borderColor={borderColor}
            boxShadow={boxShadow}
            boxShadowBottom={boxShadowBottom}
            navItems={navItems}
          />
        ),
      })}
    </AnimateSharedLayout>
  );
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
          >
            emergence
          </Heading>
        </Link>

        <IconButton
          display={["none"]}
          icon={useColorModeValue(<BiMoon />, <BiSun />)}
          onClick={toggleColorMode}
        />
      </Flex>

      
      <Box 
      position={["fixed", null, null, "static"]}
      bottom="0" w="100%" zIndex="100">
        <Flex
          justify="space-between"
          align="center"
          width="100%"
          p={['.5rem', null, "2rem"]}
          bg={bg}
        >
          <HStack
            justifyContent={["space-around", "space-between"]}
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
                        zIndex="5"
                        variant="ghost"
                        bg="transparent"
                        border="0"
                        px="1rem"
                        _hover={{
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
                        bg={useColorModeValue("gray.50", "gray.900")}
                        position="absolute"
                        top="0"
                        left="0"
                        right="0"
                        bottom="0"
                        zIndex="1"
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
        <Link id="chat" href="/contact" passHref>
          <Button 
            display={['none', null, null, 'flex']}
            as="a"
            alignSelf="center"
            h="40px"
            py={['10px', "20px"]}
            px={['20px', '20px']}
            justifySelf="center"
            bg={useColorModeValue('gray.25', 'gray.900')}
            border="2px solid"
            borderColor={useColorModeValue('brand.primary.400', 'brand.primary.300')}
            fontSize={['12px', "14px"]}
            color={useColorModeValue('gray.900', 'white.100')}
            borderRadius="3rem"
            flexDirection="row-reverse"
            alignContent="center"
            justifyContent="center"
            textDecoration="none"
            w="auto"
            id="chat"
            fontWeight="300"
            _hover={{
              bg: 'brand.primary.300',
              color: "gray.900",
              borderColor: useColorModeValue('brand.primary.300', 'brand.primary.300'),
            }}
            _active={{
              bg: 'brand.primary.300',
              color: "gray.900"
            }}
          >
            <Box as="span" className="label" transform="translateY(1px)">Talk to us</Box>
            <Box as="span" className="typing" transform="translateY(1px)">
              <Box as="span" className="circle" bg={useColorModeValue('brand.primary.400', 'white')}></Box>
              <Box as="span" className="circle" bg={useColorModeValue('brand.primary.400', 'white')}></Box>
              <Box as="span" className="circle" bg={useColorModeValue('brand.primary.400', 'white')}></Box>
            </Box>
          </Button>
        </Link>
        <IconButton
          alignSelf="center"
          justifySelf="end"
          color={useColorModeValue("gray.400", null)}
          variant="link"
          bg="transparent"
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

function HeaderMobile({
  navItems,
  router,
  bg,
  borderColor,
  boxShadow,
  boxShadowBottom,
}) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <AnimateSharedLayout>
      <Grid
      layoutId="nav"
      templateColumns="100%"
      px="0"
      borderBottom="1px solid"
      borderColor={useColorModeValue("gray.100", "gray.900")}
      top="0"
    >
      <Flex
        position="sticky"
        top="0"
        justify="space-between"
        align="center"
        p="1rem"
        zIndex="100"
        bg={bg}
      >
      <Link href="/" passHref>
          <Heading
            as="a"
            fontSize="22px"
            className={useColorModeValue('', "gradient-mask-primary")}
            w="auto"
          >
            emergence
          </Heading>
        </Link>
        <IconButton
          alignSelf="center"
          justifySelf="end"
          border="0"
          bg={useColorModeValue("gray.50", null)}
          icon={useColorModeValue(<BiMoon />, <BiSun />)}
          onClick={toggleColorMode}
        />
      </Flex>

      <Box
        position={["fixed", null, "static"]}
        bottom="0"
        w="100%"
        zIndex="100"
      >
        {/* <BackToWorkButton /> */}
        <Flex
          justify="space-between"
          align="center"
          width="100%"
          p="1rem .5rem"
          borderTop="1px solid"
          borderColor={borderColor}
          bg={bg}
          boxShadow={boxShadow}
        >
          <HStack
            justifyContent="space-between"
            w="100%"
            size="md"
            spacing="0"
            divider={<StackDivider borderColor={borderColor} />}
          >
            {navItems &&
              navItems.map(({ title, icon, href }, idx) => {
                const isActive = router.pathname.includes(href);
                return (
                  <Box position="relative" key={idx} mx="auto">
                    <Link href={href} scroll={false}>
                      <Button
                        as="a"
                        cursor="pointer"
                        position="relative"
                        zIndex="5"
                        variant="ghost"
                        bg="transparent"
                        border="0"
                        _hover={{
                          bg: "transparent",
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
                        bg={useColorModeValue("brand.primary.400", "gray.700")}
                        position="absolute"
                        initial={useColorModeValue(
                          {
                            opacity: 0.1,
                          },
                        )}
                        animate={useColorModeValue(
                          {
                            opacity: 0.1,
                          },
                          {}
                        )}
                        top="0"
                        left="0"
                        right="0"
                        bottom="0"
                        zIndex="1"
                        borderRadius="10px"
                      />
                    )}
                  </Box>
                );
              })}
          </HStack>
        </Flex>
      </Box>
    </Grid>
    </AnimateSharedLayout>
  );
}

function BackToWorkButton({ display }) {
  const router = useRouter();
  if (router.pathname.includes("/work/")) {
    return (
      <Flex p="1rem" w="100%" justifyContent="flex-end" display={display}>
        <Link href="/work" passHref scroll={false}>
          <MotionButton
            initial={{ opacity: 0, transform: "translateY(1rem)" }}
            animate={{ opacity: 1, transform: "translateY(0%)" }}
            transition={{ duration: 0.5, delay: 1 }}
            as="a"
            size="sm"
            leftIcon={<BiArrowBack />}
            variant="tertiary"
          >
            Case Studies
          </MotionButton>
        </Link>
      </Flex>
    );
  }
  return null;
}
