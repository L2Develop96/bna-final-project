import { Flex, Text } from '@chakra-ui/react';
import ItemCard from './Product/ProductCard';
import { API_ENDPOINT } from '../../../utils/constant';
import { useEffect, useState } from 'react';
import { IProduct } from '../../../model/product';

const HomePage = () => {
  const [productList, setProductList] = useState<IProduct[]>();

  const getProductList = async (): Promise<void> => {
    try {
      const res = await fetch(`${API_ENDPOINT}/products.json`);
      if (!res.ok) {
        throw new Error('Error has occurred');
      }
      const data = await res.json();

      const products = [];
      for (const product in data) {
        products.push(data[product]);
      }
      setProductList(products);
    } catch (error) {
      throw new Error(`Error has occurred, ${error}`);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <Flex gap={5} flexWrap="wrap">
      {productList?.length ? (
        productList?.map((product) => (
          <ItemCard key={product?.id} product={product} />
        ))
      ) : (
        <Text alignSelf="center">No products found</Text>
      )}
    </Flex>
  );
};

export default HomePage;
