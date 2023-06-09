import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  VStack,
} from '@chakra-ui/react';
import AmazonLogo from '../../../assets/svg/amazon_logo.svg';
import Card from '../../../components/Card';
import { primaryColor } from '../../../utils/constant';

//TODO: The Authentication Card is already created, all you need to do is create the logic behind it and create the <SignUp /> page.
//? Add references using useRef() hook and attach them to the inputs so you can access the value.
//? ENDPOINT URL can be found in the utils/constants.ts file.
//! Please create the sign up component in another file and not in here (Best Practice).

const Authentication = () => {
  return (
    <Card border={`1px solid ${primaryColor}`}>
      <form>
        <VStack gap={5} mt={5}>
          <Box w="40%">
            <Image src={AmazonLogo} />
          </Box>
          <FormControl isRequired>
            <FormLabel mb="8px">Username</FormLabel>
            <Input required placeholder="Username" size="sm" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel mb="8px">Password</FormLabel>
            <Input required placeholder="Password" size="sm" type="password" />
          </FormControl>
          <HStack>
            <Button onClick={() => console.log('submit clicked')}>
              Submit
            </Button>
            <Button onClick={() => console.log('Sign up clicked')}>
              Sign up
            </Button>
          </HStack>
        </VStack>
      </form>
    </Card>
  );
};

export default Authentication;
