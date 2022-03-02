import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Flex,
} from "@chakra-ui/react";

export default function DaoStat() {
  return (
    <>
      <Flex
        flexDir={["row", "row", "row", "column"]}
        //   flexDirection="column"
      >
        <Flex w="300px">
          <Stat
            px={{ base: 2, md: 4 }}
            py={"5"}
            shadow={"xl"}
            border={"1px solid"}
            borderColor={"gray.800"}
            rounded={"lg"}
          >
            <StatLabel>TOTAL TREASURY LOKED</StatLabel>
            <StatNumber>£0.00</StatNumber>
            <StatHelpText>Feb 12 - Feb 28</StatHelpText>
          </Stat>
        </Flex>
        <Flex w="100%">
          <Stat
            px={{ base: 2, md: 4 }}
            py={"5"}
            shadow={"xl"}
            border={"1px solid"}
            borderColor={"gray.800"}
            rounded={"lg"}
          >
            <StatLabel>Change (24h)</StatLabel>
            <StatNumber>£0.00</StatNumber>
            <StatHelpText>Feb 12 - Feb 28</StatHelpText>
          </Stat>
        </Flex>
      </Flex>
    </>
  );
}
