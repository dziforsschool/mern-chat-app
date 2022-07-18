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

const Register = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [pfp, setPfp] = useState();

  const handleClick = () => setShow(!show);
  const postDetails = pics => {};
  const submitHandler = () => {};
  const guestLoginHandler = () => {};

  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired color="black">
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={e => setName(e.target.value)}
        />
      </FormControl>

      <FormControl id="email" isRequired color="black">
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your email"
          onChange={e => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired color="black">
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? 'text' : 'password'}
            placeholder="Enter your password"
            onChange={e => setPassword(e.target.value)}
          />
          <InputRightElement w="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="confirm-password" isRequired color="black">
        <FormLabel>Confirm password</FormLabel>
        <InputGroup>
          <Input
            type={show ? 'text' : 'password'}
            placeholder="Enter your password once more"
            onChange={e => setConfirmpassword(e.target.value)}
          />
          <InputRightElement w="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="pfp">
        <FormLabel>Upload your profile picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={e => postDetails(e.target.files[0])}
        />
      </FormControl>

      <Button
        colorScheme="pink"
        w="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Register
      </Button>
    </VStack>
  );
};

export default Register;
