import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  StackDivider,
  HStack,
  Grid,
} from "@chakra-ui/react";
import {
  Icon,
  Box,
  Flex,
  Button,
  IconButton,
  Heading,
  ButtonGroup,
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
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");
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

  return (
    <Grid
      templateColumns={["100%", null, "1fr auto 1fr"]}
      px={[0, null, "1rem"]}
      borderBottom="1px solid"
      borderColor={useColorModeValue("gray.100","gray.900")}
      top="0"
      position={[null, null, "sticky"]}
      zIndex={[null, null, 10]}
      bg={[null, null, bg]}
    >
      <Flex
        position={["sticky", null, "static"]}
        top="0"
        justify="space-between"
        p={["1rem", null, '2rem']}
        zIndex="100"
        bg={bg}
      >
        <Heading as="span" size="lg">
          <Link href="/">
            <a>voidmade</a>
          </Link>
        </Heading>
        <IconButton
          display={[null, null, "none"]}
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
        <BackToWorkButton display={[null, null, "none"]} />
        <Flex
          justify="space-between"
          align="center"
          width="100%"
          p={["1rem", null, '2rem']}
          borderTop="1px solid"
          borderColor={borderColor}
          bg={bg}
          boxShadow={[boxShadow, null, "none"]}
        >
          <HStack
            justifyContent="space-between"
            w="100%"
            size="md"
            divider={
              <StackDivider
                display={["block", null, "none"]}
                borderColor={borderColor}
              />
            }
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
                        opacity=".1"
                        layoutId="nav-active"
                        bg={useColorModeValue("brand.primary.400", "gray.700")}
                        position="absolute"
                        initial={useColorModeValue(
                          {
                            opacity: 0.1,
                          },
                          {}
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
                        borderRadius=".5rem"
                      />
                    )}
                  </Box>
                );
              })}
          </HStack>
        </Flex>
      </Box>
      <IconButton
        alignSelf="center"
        justifySelf="end"
        display={["none", null, "flex"]}
        icon={useColorModeValue(<BiMoon />, <BiSun />)}
        onClick={toggleColorMode}
      />
    </Grid>
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
