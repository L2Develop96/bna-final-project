import { Box, Container, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Root = () => {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Box as="header">
        <Header />
      </Box>
      <Box as="main" flex="1" bgGradient="linear(to-b, #E3E6E6, white)" p={5}>
        <Container maxW="8xl">
          <Outlet />
        </Container>
      </Box>
      <Box as="footer">
        <Footer />
      </Box>
    </Flex>
  );
};

export default Root;
