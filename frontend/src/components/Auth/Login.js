import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const submitHandler = () => {};

  const guestLoginHandler = () => {
    submitHandler();
  };

  return (
    <VStack spacing="5px">
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input type="text" placeholder="Enter your email" />
      </FormControl>

      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
          />
          <InputRightElement w="4.5rem">
            <Button h="1.75rem" size="sm" onClick={toggleShowPassword}>
              {showPassword ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        w="100%"
        colorScheme="pink"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Login
      </Button>

      <Button
        w="100%"
        style={{ marginTop: 15 }}
        onClick={guestLoginHandler}
        colorScheme="teal"
      >
        Login as Guest
      </Button>
    </VStack>
  );
};

export default Login;
