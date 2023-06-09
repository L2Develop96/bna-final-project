import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import AmazonLogo from '../../../assets/svg/amazon_logo.svg';
import Card from '../../../components/Card';
import { API_ENDPOINT, primaryColor } from '../../../utils/constant';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isValidEmail, isValidPassword } from '../../../utils/functions';

const SignUp = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);
  const [isError, setIsError] = useState(false);

  const onSignUp = async (): Promise<void> => {
    if (
      !emailRef.current ||
      !usernameRef.current ||
      !passwordRef.current ||
      !confirmPasswordRef.current
    )
      return;

    if (
      emailRef.current?.value.trim() === '' ||
      usernameRef.current?.value.trim() === '' ||
      passwordRef.current?.value.trim() === '' ||
      confirmPasswordRef.current?.value.trim() === ''
    ) {
      setIsError(true);
      return;
    }

    if (
      !isValidEmail(emailRef.current?.value) ||
      !isValidPassword(
        passwordRef.current?.value.trim(),
        confirmPasswordRef.current?.value.trim()
      )
    ) {
      setIsError(true);
      return;
    }
    isError && setIsError(false);

    const _data = {
      email: emailRef.current?.value,
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
    };

    try {
      const res = await fetch(`${API_ENDPOINT}/users.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(_data),
      });

      if (!res.ok) {
        throw new Error('Something went wrong');
      }
      toast({
        title: 'Your account has been created successfully',
        status: 'success',
        duration: 1000,
      });
      navigateToLogin();
    } catch (err) {
      throw new Error('Something went wrong');
    }
  };

  const navigateToLogin = (): void => {
    navigate('/login');
  };

  return (
    <Card border={`1px solid ${primaryColor}`}>
      <form>
        <VStack gap={5} mt={5}>
          <Box w="40%">
            <Image src={AmazonLogo} />
          </Box>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input required ref={emailRef} placeholder="Email" size="sm" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel mb="8px">Username</FormLabel>
            <Input
              required
              ref={usernameRef}
              placeholder="Username"
              size="sm"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel mb="8px">Password</FormLabel>
            <Input
              required
              ref={passwordRef}
              placeholder="Password"
              size="sm"
              type="password"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel mb="8px">Confirm Password</FormLabel>
            <Input
              isRequired
              ref={confirmPasswordRef}
              placeholder="Confirm Password"
              size="sm"
              type="password"
            />
          </FormControl>
          {isError && (
            <Text color="red.300">Invalid form data, please check again</Text>
          )}
          <HStack>
            <Button w="100%" onClick={onSignUp}>
              Register
            </Button>
            <Button w="100%" onClick={navigateToLogin}>
              Return
            </Button>
          </HStack>
        </VStack>
      </form>
    </Card>
  );
};

export default SignUp;
