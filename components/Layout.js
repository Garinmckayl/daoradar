import React, { useState } from "react";
// import Link from "next/link";
import { useRouter } from "next/router";
import {
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Link,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import {
  FiHome,
  FiPieChart,
  FiDollarSign,
  FiBox,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiCreditCard,
  FiSearch,
  FiBell,
} from "react-icons/fi";
import {
  FaQuestionCircle,
  FaCompressAlt,
  FaRegClock,
  FaArrowsAlt,
  FaMailBulk,
} from "react-icons/fa";
import MyChart from "../components/MyChart";
import DaoStat from "../components/Daostat";

export default function Layout(props) {
  const [display, changeDisplay] = useState("hide");
  const [value, changeValue] = useState(1);
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      h={[null, null, "100vh"]}
      maxW="2000px"
      flexDir={["column", "column", "row"]}
      overflow="hidden"
    >
      {/* Column 1 */}
      <Flex
        w={["100%", "100%", "10%", "15%", "15%"]}
        flexDir="column"
        alignItems="center"
        backgroundColor="#020202"
        color="#fff"
      >
        <Flex
          flexDir="column"
          h={[null, null, "100vh"]}
          justifyContent="space-between"
        >
          <Flex flexDir="column" as="nav">
            <Heading
              mt={50}
              mb={[25, 50, 100]}
              fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
              alignSelf="center"
              letterSpacing="tight"
            >
              DAORADAR
            </Heading>
            <Flex
              flexDir={["row", "row", "column", "column", "column"]}
              align={["center", "center", "center", "flex-start", "flex-start"]}
              wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
              justifyContent="center"
            >
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon
                    as={FiHome}
                    fontSize="2xl"
                    className={router.pathname == "/" ? "active-icon" : ""}
                  />
                </Link>
                <Link
                  href="/"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text className={router.pathname == "/" ? "active" : ""}>
                    Overview
                  </Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon
                    as={FiPieChart}
                    fontSize="2xl"
                    className={router.pathname == "/daos" ? "active-icon" : ""}
                  />
                </Link>
                <Link
                  href="/daos"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text className={router.pathname == "/daos" ? "active" : ""}>
                    DAOs
                  </Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon
                    as={FaArrowsAlt}
                    fontSize="2xl"
                    className={
                      router.pathname == "/catagories" ? "active-icon" : ""
                    }
                  />
                </Link>
                <Link
                  href="#"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text
                    className={router.pathname == "/catagories" ? "active" : ""}
                  >
                    Catagories
                  </Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FaRegClock} fontSize="2xl" />
                </Link>
                <Link
                  href="#"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text>Recent</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FaCompressAlt} fontSize="2xl" />
                </Link>
                <Link
                  href="#"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text>Comparision</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon
                    as={FaQuestionCircle}
                    fontSize="2xl"
                    className={router.pathname == "/about" ? "active-icon" : ""}
                  />
                </Link>
                <Link
                  href="/about"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text className={router.pathname == "/about" ? "active" : ""}>
                    About
                  </Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon
                    as={FaMailBulk}
                    fontSize="2xl"
                    className={
                      router.pathname == "/contact" ? "active-icon" : ""
                    }
                  />
                </Link>
                <Link
                  href="/contact"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text
                    className={router.pathname == "/contact" ? "active" : ""}
                  >
                    Contact
                  </Text>
                </Link>
              </Flex>
              <IconButton
                mt={4}
                aria-label="Toggle Mode"
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </IconButton>
            </Flex>
          </Flex>
          {/* <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
            <Avatar my={2} src="avatar-1.jpg" />
            <Text textAlign="center">Nate</Text>
          </Flex> */}
        </Flex>
      </Flex>

      {/* Column 2 */}

      {props.children}
    </Flex>
  );
}
