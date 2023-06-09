import { Box, Divider, HStack, Heading, Image, VStack } from '@chakra-ui/react';
import Card from '../../../../components/Card';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProduct } from '../../redux/slice';
import { IProduct } from '../../../../model/product';
import AddRemoveToCartButton from '../../../../components/AddRemoveToCartButton';
import { primaryColor } from '../../../../utils/constant';

const ProductCard = ({ product }: { product: IProduct }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateToDetails = () => {
    dispatch(setProduct(product));
    navigate(product?.id);
  };

  return (
    <Card
      header={
        <HStack w="100%" justifyContent="space-between">
          <Heading size="md">{product?.name}</Heading>
          <Heading size="sm">{product?.price}$</Heading>
        </HStack>
      }
      borderRadius={0}
      w="300px"
      centerBody
      _hover={{
        cursor: 'pointer',
      }}
      onClick={navigateToDetails}
    >
      <VStack justifyContent="space-between" h="100%">
        <Box>
          <Image
            src={product?.imgUrl}
            alt=""
            objectFit="cover"
            maxH="100%"
            maxW="100%"
          />
        </Box>
        <Box w="100%" textAlign="center">
          <Divider borderColor={primaryColor} mb={5} />
          <AddRemoveToCartButton product={product} />
        </Box>
      </VStack>
    </Card>
  );
};

export default ProductCard;
