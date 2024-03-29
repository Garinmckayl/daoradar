import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import { Flex, Heading, Center } from "@chakra-ui/react";

export default function Contact() {
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
          //   p="3%"
          flexDir="column"
          overflow="auto"
          minH="50vh"
          maxW="1200px"
          mx="auto"
        >
          <Heading
            mt={50}
            mb={[25, 50, 100]}
            fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
            alignSelf="center"
            letterSpacing="tight"
          >
            Contact Us
          </Heading>
          <Center py={12}>
            <iframe
              src="https://us4.list-manage.com/contact-form?u=a45ca27fcc08e4bed1fc56b51&form_id=5281af0ccb5217b698e205555387815a"
              title="Contact us"
              height="900"
              width="1000"
            ></iframe>
          </Center>
        </Flex>
      </Layout>
    </div>
  );
}
