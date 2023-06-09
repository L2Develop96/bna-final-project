import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  VStack,
  useToast,
} from '@chakra-ui/react';
import AmazonLogo from '../../../assets/svg/amazon_logo.svg';
import Card from '../../../components/Card';
import { API_ENDPOINT, primaryColor } from '../../../utils/constant';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slice';

const Authentication = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const isFound = false;

  const onLogin = async (): Promise<void> => {
    if (!usernameRef.current || !passwordRef.current) return;

    if (
      usernameRef.current?.value.trim() === '' ||
      passwordRef.current?.value.trim() === ''
    ) {
      setIsError(true);
      return;
    }
    isError && setIsError(false);

    try {
      const res = await fetch(`${API_ENDPOINT}/users.json`, {
        method: 'GET',
      });

      if (!res.ok) {
        throw new Error('Something went wrong');
      }

      const data = await res.json();
      for (const userId in data) {
        if (
          data[userId].username === usernameRef.current?.value.trim() &&
          data[userId].password === passwordRef.current?.value.trim()
        ) {
          toast({
            title: 'Logged In Successfully',
            status: 'success',
            duration: 1000,
          });
          usernameRef.current.value = '';
          passwordRef.current.value = '';
          dispatch(
            login({
              id: userId,
              username: data[userId].username,
              email: data[userId].email,
            })
          );
          return;
        }
      }
      if (!isFound) {
        toast({
          title: 'Invalid Credentials',
          status: 'error',
          duration: 1000,
        });
      }
    } catch (err) {
      throw new Error('Something went wrong');
    }
  };

  const navigateTo = (path: 'sign-up' | 'products'): void => {
    navigate(`/${path}`);
  };

  return (
    <Card border={`1px solid ${primaryColor}`}>
      <form>
        <VStack gap={5} mt={5}>
          <Box w="40%">
            <Image src={AmazonLogo} />
          </Box>
          <FormControl isRequired>
            <FormLabel mb="8px">Username</FormLabel>
            <Input
              ref={usernameRef}
              required
              placeholder="Username"
              size="sm"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel mb="8px">Password</FormLabel>
            <Input
              ref={passwordRef}
              required
              placeholder="Password"
              size="sm"
              type="password"
            />
          </FormControl>
          <HStack>
            <Button onClick={onLogin}>Submit</Button>
            <Button onClick={(): void => navigateTo('sign-up')}>Sign up</Button>
          </HStack>
        </VStack>
      </form>
    </Card>
  );
};

export default Authentication;
