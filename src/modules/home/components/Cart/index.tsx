import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../app/store';
import { Box, Flex, HStack, Heading, Text } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import { IProduct } from '../../../../model/product';
import { productGroupById } from '../../../../utils/functions';

const Cart = () => {
  const cartSelector = useSelector((state: AppState) => state.products.cart);
  const [productsList, setProductList] = useState<IProduct[]>();

  useEffect(() => {
    const filteredProductsObj = productGroupById(cartSelector);
    const _filteredProducts = [];
    for (const product in filteredProductsObj) {
      _filteredProducts.push(filteredProductsObj[product][0]);
    }
    setProductList(_filteredProducts);
  }, [cartSelector]);

  const getTotalPrice = useMemo(() => {
    return cartSelector?.reduce((prev, current) => prev + current?.price, 0);
  }, [cartSelector]);

  return (
    <HStack alignItems="flex-start" justifyContent="space-between">
      <Flex gap={5} flexWrap="wrap">
        {productsList?.length ? (
          productsList?.map((product) => (
            <CartItem
              key={product?.id}
              product={product}
              allProductsListFiltered={productGroupById(cartSelector)}
            />
          ))
        ) : (
          <Text alignSelf="center">No products found</Text>
        )}
      </Flex>
      {productsList?.length && (
        <Box>
          <Heading size="md">Total: {getTotalPrice?.toFixed(2)}$</Heading>
        </Box>
      )}
    </HStack>
  );
};

export default Cart;
