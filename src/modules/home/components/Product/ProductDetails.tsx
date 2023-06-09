import {
  Box,
  Divider,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../app/store';
import Card from '../../../../components/Card';
import { secondaryColor } from '../../../../utils/constant';
import AddRemoveToCartButton from '../../../../components/AddRemoveToCartButton';

const ProductDetails = () => {
  const productSelector = useSelector(
    (state: AppState) => state.products.product
  );

  return (
    <HStack alignItems="flex-start" gap={10} w="100%">
      <Card
        borderRadius={0}
        w="300px"
        centerBody
        _hover={{
          cursor: 'pointer',
        }}
      >
        <Box>
          <Image
            src={productSelector?.imgUrl}
            alt=""
            objectFit="cover"
            maxH="100%"
            maxW="100%"
          />
        </Box>
      </Card>
      <VStack alignItems="flex-start" flex={1}>
        <HStack justifyContent="space-between" width="100%">
          <Heading>{productSelector?.name}</Heading>
          <Heading>{productSelector?.price}$</Heading>
        </HStack>
        <Divider borderColor={secondaryColor} />
        <Text>{productSelector?.description}</Text>
      </VStack>
      <AddRemoveToCartButton product={productSelector} />
    </HStack>
  );
};

export default ProductDetails;
