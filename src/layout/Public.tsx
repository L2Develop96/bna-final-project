import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const Public = () => {
  return (
    <Flex
      h="100vh"
      alignItems="center"
      justifyContent="center"
      bg={'#ff99001a'}
    >
      <Outlet />
    </Flex>
  );
};

export default Public;
