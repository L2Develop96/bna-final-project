import { Button } from '@chakra-ui/react';
import { secondaryColor } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../modules/home/redux/slice';
import { IProduct } from '../model/product';

const AddRemoveToCartButton = ({
  product,
  type = 'add',
}: {
  product: IProduct;
  type?: 'add' | 'remove';
}) => {
  const dispatch = useDispatch();

  const AddRemoveToCartHandler = (
    e: React.SyntheticEvent<HTMLButtonElement>
  ): void => {
    e.stopPropagation();
    dispatch(type === 'add' ? addToCart(product) : removeFromCart(product));
  };

  return (
    <Button
      bg={secondaryColor}
      _hover={{ bg: `${secondaryColor}a5` }}
      onClick={AddRemoveToCartHandler}
    >
      {type === 'add' ? 'Add to cart' : 'Remove from cart'}
    </Button>
  );
};

export default AddRemoveToCartButton;
