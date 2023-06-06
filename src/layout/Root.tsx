import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <Flex h="100vh" flexDir="column" justifyContent="space-between">
      {/* HEADER */}
      <Box w="100%" bg="whatsapp.100">
        Header
      </Box>
      {/*************/}

      {/* MAIN CONTENT */}
      <Box h="100%" bg="whatsapp.200">
        <Outlet />
      </Box>
      {/*************/}

      {/* FOOTER */}
      <Box w="100%" bg="whatsapp.300">
        Footer
      </Box>
      {/*************/}
    </Flex>
    // Footer
  );
};

export default Root;
