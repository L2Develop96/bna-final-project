import { Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { AppState } from '../app/store';

const Public = () => {
  const _isAuthenticated = useSelector(
    (state: AppState) => state.auth.isAuthenticated
  );

  if (_isAuthenticated) {
    return <Navigate to="products" />;
  }
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
