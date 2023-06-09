import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

//TODO Follow the instructions below

const Root = () => {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Box as="header">
        {/* Create Header Component and call it */}
        {/*  <Header /> */}
        <Box w="100%" bg="whatsapp.200" h={20}>
          Header
        </Box>
      </Box>

      <Box as="main" flex="1">
        {/* Create a Container Component (from chakra) and wrap it with Outlet and set it's max width to 8xl */}
        <Outlet />
      </Box>

      <Box as="footer" bg="whatsapp.500">
        {/* Create Footer Component and call it */}
        {/* <Footer /> */}
        <Box w="100%" bg="whatsapp.400" h={20}>
          Footer
        </Box>
      </Box>
    </Flex>
  );
};

export default Root;
