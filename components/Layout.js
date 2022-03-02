import React, { useState } from "react";
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
                  <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                </Link>
                <Link
                  href="/"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text className="active">Overview</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FiPieChart} fontSize="2xl" />
                </Link>
                <Link
                  href="/daos"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text>DAOs</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FaArrowsAlt} fontSize="2xl" />
                </Link>
                <Link
                  href="/catagories"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text>Catagories</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FaRegClock} fontSize="2xl" />
                </Link>
                <Link
                  href="/recent"
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
                  href="/comparision"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text>Comparision</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FaQuestionCircle} fontSize="2xl" />
                </Link>
                <Link
                  href="/about"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text>About</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FaMailBulk} fontSize="2xl" />
                </Link>
                <Link
                  href="/contact"
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text>Contact</Text>
                </Link>
              </Flex>
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
