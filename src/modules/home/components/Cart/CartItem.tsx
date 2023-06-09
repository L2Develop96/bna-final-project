import {
  Heading,
  VStack,
  Divider,
  Box,
  Image,
  HStack,
  Button,
} from '@chakra-ui/react';
import AddToCartButton from '../../../../components/AddRemoveToCartButton';
import { primaryColor } from '../../../../utils/constant';
import Card from '../../../../components/Card';
import { IProduct } from '../../../../model/product';
import { useDispatch } from 'react-redux';
import { reduceQuantity } from '../../redux/slice';
import { useEffect, useState } from 'react';

const CartItem = ({
  product,
  allProductsListFiltered,
}: {
  product: IProduct;
  allProductsListFiltered: Record<string, IProduct[]>;
}) => {
  const [productQuantity, setProductQuantity] = useState(0);
  const dispatch = useDispatch();

  const reduceQuantityHandler = (): void => {
    dispatch(reduceQuantity(product));
  };

  useEffect(() => {
    setProductQuantity(allProductsListFiltered[product?.id]?.length);
  }, [allProductsListFiltered, product?.id]);

  return (
    <Card
      header={
        <HStack w="100%" justifyContent="space-between">
          <Heading size="md">
            {product?.name}[{productQuantity}]
          </Heading>
          <Heading size="sm">
            {(product?.price * productQuantity).toFixed(2)}$
          </Heading>
        </HStack>
      }
      borderRadius={0}
      w="300px"
      centerBody
      _hover={{
        cursor: 'pointer',
      }}
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
          <HStack justifyContent="center">
            <AddToCartButton type="remove" product={product} />
            {productQuantity > 1 && (
              <Button onClick={reduceQuantityHandler}>-</Button>
            )}
          </HStack>
        </Box>
      </VStack>
    </Card>
  );
};

export default CartItem;
