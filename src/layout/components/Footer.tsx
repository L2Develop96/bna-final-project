import { Box, Flex, HStack, Image, Link } from '@chakra-ui/react';
import AmazonLogo from '../../assets/svg/amazon_logo_white.svg';

const Footer = () => {
  return (
    <Flex bg="#232f3e" p={5} alignItems="center" w="100%">
      <Box w="100px">
        <Image
          src={AmazonLogo}
          alt=""
          objectFit="cover"
          maxH="100%"
          maxW="100%"
        />
      </Box>
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        flex="1"
      >
        <HStack spacing={5}>
          <Link fontSize={12} color="white">
            Conditions of Use
          </Link>
          <Link fontSize={12} color="white">
            Privacy Notice
          </Link>
          <Link fontSize={12} color="white">
            Your Ads Privacy Choices
          </Link>
          <Link fontSize={12} color="white">
            Your Ads Privacy Choices
          </Link>
        </HStack>
        <Link fontSize={12} color="white" mt={2}>
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
