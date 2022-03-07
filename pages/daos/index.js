import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import { SiCheckmarx } from "react-icons/si";
import Layout from "../../components/Layout";
import {
  Heading,
  Text,
  Flex,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Avatar,
  StatArrow,
  Spinner,
  Center,
} from "@chakra-ui/react";

import {
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiXCircle,
} from "react-icons/fi";
const IMAGE =
  "https://suplar.com/wp-content/uploads/2021/11/ProfilePixNathaniel2-300x300.png";

export default function Daos() {
  const [isLoading, setLoading] = useState(true);
  const [daos, setDaos] = useState();

  useEffect(() => {
    axios.get("https://daoproxyapi.herokuapp.com/daos").then((response) => {
      setDaos(response.data.data.coins);
      setLoading(false);
      console.log("daos", daos);
    });
  }, []);

  //   new Promise(async (resolve, reject) => {
  //     try {
  //       response = await axios.get("https://daos.zealsham.repl.co/daos", {});
  //     } catch (ex) {
  //       response = null;
  //       // error
  //       console.log(ex);
  //     }
  //     if (response) {
  //       // success
  //       const json = response.data;
  //       //   alert(json);
  //       console.log(json.data.coins);
  //       daos.push(json.data.coins);
  //       resolve(json);
  //       allDaos = daos[0];
  //       console.log("daos", daos[0]);
  //     }
  //   });

  const [display, changeDisplay] = useState("hide");
  if (isLoading) {
    return (
      <Center bg="#fff" height="100vh" color="white">
        <Spinner
          thickness="4px"
          speed="0.35s"
          emptyColor="gray.200"
          color="pink.500"
          size="xl"
        />
      </Center>
    );
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Flex
          w={["100%", "100%", "100%", "100%", "100%"]}
          p="3%"
          flexDir="column"
          overflow="auto"
          minH="50vh"
          //   maxW="1400px"
          mx="auto"
        >
          <Flex justifyContent="space-between" mt={8}>
            <Flex align="flex-end">
              <Heading as="h2" size="lg" letterSpacing="tight">
                DAOs
              </Heading>
              <Text fontSize="small" color="gray" ml={4}>
                Apr 2021
              </Text>
            </Flex>
            <IconButton icon={<FiCalendar />} />
          </Flex>

          <Flex flexDir="column">
            <Flex overflow="auto">
              <Table variant="unstyled" mt={4}>
                {/* {daos &&
                  daos.length > 0 &&
                  daos.map((dao, index) => (
                    <div key={index}>
                      <text>sex</text>
                      <h1>{dao.name}</h1>
                      <p>{dao.symbol}</p>
                    </div>
                  ))} */}

                <Thead>
                  <Tr color="gray">
                    <Th>Name of DAO</Th>
                    <Th>Category</Th>
                    <Th isNumeric>Price</Th>
                    <Th>1d Change</Th>
                    <Th>Treasury Balance</Th>
                    <Th>Chain</Th>
                    <Th>Active</Th>
                    <Th>circulating supply</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {daos &&
                    daos.length > 0 &&
                    daos.map((dao, index) => (
                      // <div key={index}>
                      //   <text>sex</text>
                      //   <h1>{dao.name}</h1>
                      //   <p>{dao.symbol}</p>
                      // </div>

                      <Tr>
                        <Td>
                          <Flex align="center">
                            <Avatar
                              size="sm"
                              mr={2}
                              src="https://s2.coinmarketcap.com/static/img/coins/64x64/11221.png"
                            />
                            <Flex flexDir="column">
                              <Heading size="sm" letterSpacing="tight">
                                {dao.name}
                              </Heading>
                              <Text fontSize="sm" color="gray">
                                Updated:{" "}
                                {new Date(dao.last_updated).toLocaleDateString(
                                  "en-us",
                                  {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  }
                                )}
                              </Text>
                            </Flex>
                          </Flex>
                        </Td>
                        <Td>{dao.tags[0]}</Td>
                        <Td>
                          $
                          {dao.quote.USD.price
                            .toFixed(2)
                            .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                        </Td>
                        <Td>
                          {dao.quote.USD.percent_change_24h < 0 ? (
                            <Text display="inline-table" color="red.500">
                              {/* <StatArrow type="decrease" />{" "} */}
                              {dao.quote.USD.percent_change_24h}
                            </Text>
                          ) : (
                            <Text display="inline-table" color="green.500">
                              {/* <StatArrow type="increase" />{" "} */}
                              {dao.quote.USD.percent_change_24h}
                            </Text>
                          )}
                        </Td>
                        <Td>{dao.symbol}</Td>
                        <Td>{dao.platform ? dao.platform.name : "unknown"}</Td>
                        <Td isNumeric>
                          {dao.is_active ? (
                            <Text display="inline-table" color="green.500">
                              <SiCheckmarx />
                            </Text>
                          ) : (
                            <Text display="inline-table" color="red.500">
                              <FiXCircle />
                            </Text>
                          )}
                        </Td>
                        <Td isNumeric>
                          <Text fontWeight="bold" display="inline-table">
                            $
                            {dao.circulating_supply
                              .toFixed(2)
                              .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                          </Text>
                        </Td>
                      </Tr>
                    ))}

                  {/* <Tr>
                    <Td>
                      <Flex align="center">
                        <Avatar
                          size="sm"
                          mr={2}
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/11221.png"
                        />
                        <Flex flexDir="column">
                          <Heading size="sm" letterSpacing="tight">
                            bitdao
                          </Heading>
                          <Text fontSize="sm" color="gray">
                            Apr 24, 2021 at 1:40pm
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>Electronic Devices</Td>
                    <Td isNumeric>+$2</Td>
                    <Td isNumeric>
                      <Text fontWeight="bold" display="inline-table">
                        $1,980,299,036
                      </Text>
                      .00
                    </Td>
                  </Tr> */}
                  {/* <Tr>
                    <Td>
                      <Flex align="center">
                        <Avatar
                          size="sm"
                          mr={2}
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png"
                        />
                        <Flex flexDir="column">
                          <Heading size="sm" letterSpacing="tight">
                            Uniswap
                          </Heading>
                          <Text fontSize="sm" color="gray">
                            Apr 22, 2021 at 2:43pm
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>DEX</Td>
                    <Td isNumeric>+$23</Td>
                    <Td isNumeric>
                      <Text fontWeight="bold" display="inline-table">
                        -$32
                      </Text>
                      .00
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Flex align="center">
                        <Avatar
                          size="sm"
                          mr={2}
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/7278.png"
                        />
                        <Flex flexDir="column">
                          <Heading size="sm" letterSpacing="tight">
                            Aave
                          </Heading>
                          <Text fontSize="sm" color="gray">
                            Apr 13, 2021 at 11:23am
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>DeFi</Td>
                    <Td isNumeric>+$4</Td>
                    <Td isNumeric>
                      <Text fontWeight="bold" display="inline-table">
                        -$112
                      </Text>
                      .00
                    </Td>
                  </Tr> */}
                  {/* {display == "show" && (
                    <> */}
                  {/* <Tr>
                    <Td>
                      <Flex align="center">
                        <Avatar
                          size="sm"
                          mr={2}
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/1518.png"
                        />
                        <Flex flexDir="column">
                          <Heading size="sm" letterSpacing="tight">
                            Maker
                          </Heading>
                          <Text fontSize="sm" color="gray">
                            Apr 12, 2021 at 9:40pm
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>DeFi</Td>
                    <Td isNumeric>+$2</Td>
                    <Td isNumeric>
                      <Text fontWeight="bold" display="inline-table">
                        -$242
                      </Text>
                      .00
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Flex align="center">
                        <Avatar
                          size="sm"
                          mr={2}
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/6538.png"
                        />
                        <Flex flexDir="column">
                          <Heading size="sm" letterSpacing="tight">
                            Curve
                          </Heading>
                          <Text fontSize="sm" color="gray">
                            Apr 10, 2021 at 2:10pm
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>DeFi</Td>
                    <Td isNumeric>+$23</Td>
                    <Td isNumeric>
                      <Text fontWeight="bold" display="inline-table">
                        -$32
                      </Text>
                      .00
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Flex align="center">
                        <Avatar
                          size="sm"
                          mr={2}
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/131.png"
                        />
                        <Flex flexDir="column">
                          <Heading size="sm" letterSpacing="tight">
                            Dash
                          </Heading>
                          <Text fontSize="sm" color="gray">
                            Apr 7, 2021 at 9:03am
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>Social Media</Td>
                    <Td isNumeric>+$4</Td>
                    <Td isNumeric>
                      <Text fontWeight="bold" display="inline-table">
                        -$112
                      </Text>
                      .00
                    </Td>
                  </Tr> */}
                  {/* </>
                  )} */}
                </Tbody>
              </Table>
            </Flex>
            <Flex align="center">
              <Divider />
              <IconButton
                icon={display == "show" ? <FiChevronUp /> : <FiChevronDown />}
                onClick={() => {
                  if (display == "show") {
                    changeDisplay("none");
                  } else {
                    changeDisplay("show");
                  }
                }}
              />

              <Divider />
            </Flex>
          </Flex>
        </Flex>
      </Layout>
    </div>
  );
}
