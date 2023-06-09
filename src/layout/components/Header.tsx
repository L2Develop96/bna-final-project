import {
  Box,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  VStack,
  styled,
} from '@chakra-ui/react';
import AmazonLogo from '../../assets/svg/amazon_logo_white.svg';
import LocationSvg from '../../assets/svg/location.svg';
import SearchSvg from '../../assets/svg/search.svg';
import CartSvg from '../../assets/svg/cart.svg';
import ListSvg from '../../assets/svg/list.svg';
import { secondaryColor } from '../../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../app/store';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../modules/auth/redux/slice';
import { clearState } from '../../modules/home/redux/slice';

const BoldText = styled(Text, {
  baseStyle: {
    fontWeight: 'bold',
    color: 'white',
  },
});

const HoverBox = styled(Box, {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    h: '100%',
    borderWidth: '1px',
    borderColor: 'transparent',
    p: 2,
    _hover: {
      cursor: 'pointer',
      borderColor: '#fff',
    },
  },
});

const hoverStyle = {
  cursor: 'pointer',
  border: '1px solid #fff',
};

const TopHeader = (): JSX.Element => {
  const userSelector = useSelector((state: AppState) => state.auth.user);
  const dispatch = useDispatch();
  const cartLength = useSelector(
    (state: AppState) => state.products.cart.length
  );
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(clearState());
  };
  return (
    <HStack w="100%" bg="#131921" minH="50px" p={4} alignItems="center" gap={3}>
      <Box flex={0.07} onClick={() => navigate('/products')}>
        <Image src={AmazonLogo} />
      </Box>
      <HStack gap={1} alignItems="flex-end">
        <Image w="20px" src={LocationSvg} />
        <VStack lineHeight={'15px'} gap={0} alignItems="start">
          <Text color="#CCCCCC">Deliver to</Text>
          <Text as="span" fontWeight="bold" color="white">
            Tunisia
          </Text>
        </VStack>
      </HStack>
      <HStack
        borderRadius={4}
        flex={1}
        bg="white"
        alignItems={'center'}
        h="100%"
      >
        <Flex
          px={5}
          h="40px"
          borderRight={'1px solid'}
          borderRightColor="gray"
          bg="#f3f3f3"
          alignItems="center"
          borderStartRadius={4}
        >
          <Text>All</Text>
        </Flex>

        <Box flex={1}>
          <Input variant="unstyled" placeholder="Search Amazon" type="text" />
        </Box>
        <Flex
          px={5}
          h="40px"
          borderRight={'1px solid'}
          borderRightColor="gray"
          bg="#febd69"
          alignItems="center"
          borderEndRadius={4}
        >
          <Image w="20px" src={SearchSvg} />
        </Flex>
      </HStack>

      <VStack
        gap={0}
        alignItems="flex-start"
        border={'1px'}
        _hover={hoverStyle}
        p={1}
        onClick={logoutHandler}
      >
        <Text color="white">Hello, {userSelector?.username}</Text>
        <Text color="white" fontWeight="bold">
          Account & Lists
        </Text>
      </VStack>

      <VStack
        gap={0}
        alignItems="flex-start"
        border={'1px'}
        _hover={hoverStyle}
        p={1}
      >
        <Text color="white">Returns</Text>
        <Text color="white" fontWeight="bold">
          & Orders
        </Text>
      </VStack>
      <HStack
        border={'1px'}
        _hover={hoverStyle}
        p={1}
        gap={1}
        alignItems="flex-end"
        onClick={() => navigate('cart')}
      >
        <Box pos="relative" display="flex">
          <Image w="30px" src={CartSvg} />
          <Text
            left={cartLength > 9 ? '9px' : '14px'}
            top={-1}
            pos="absolute"
            fontWeight="bold"
            color={secondaryColor}
          >
            {cartLength}
          </Text>
        </Box>
        <Text fontSize={15} fontWeight="bold" color="#CCCCCC">
          Cart
        </Text>
      </HStack>
    </HStack>
  );
};

const BottomHeader = (): JSX.Element => {
  return (
    <HStack px={5} gap={5} minH="40px" bg="#232f3e" w="100%">
      <HoverBox gap={1}>
        <Image w="20px" src={ListSvg} />
        <BoldText fontWeight="bold" color="white">
          All
        </BoldText>
      </HoverBox>
      <HoverBox>
        <BoldText fontWeight="bold" color="white">
          Today's Deals
        </BoldText>
      </HoverBox>
      <HoverBox>
        <BoldText fontWeight="bold" color="white">
          Customer Service
        </BoldText>
      </HoverBox>
      <HoverBox>
        <BoldText fontWeight="bold" color="white">
          Registry
        </BoldText>
      </HoverBox>
      <HoverBox>
        <BoldText fontWeight="bold" color="white">
          Gift Cards
        </BoldText>
      </HoverBox>
      <HoverBox>
        <BoldText fontWeight="bold" color="white">
          Sell
        </BoldText>
      </HoverBox>
    </HStack>
  );
};

const Header = () => {
  return (
    <Flex flexDir="column">
      <TopHeader />
      <BottomHeader />
    </Flex>
  );
};

export default Header;
