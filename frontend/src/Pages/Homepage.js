import {
  Box,
  Button,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

const Homepage = () => {
  // const [darkTheme, setDarkTheme] = useState(false);

  // const darkThemeSwitcher = () => setDarkTheme(!darkTheme);
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Rubik">
          MERN Chat
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded" colorScheme="pink">
          <TabList mb="1em">
            <Tab w="50%">Login</Tab>
            <Tab w="50%">Register</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{<Login />}</TabPanel>

            <TabPanel>{<Register />}</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      {/* dark theme for my eyes at night bashing my head against the table because why is this thing not working
      <Button pos="fixed" top="5%" right="5%" onClick={darkThemeSwitcher}>
        {darkTheme ? 'go light(masochist)' : 'go dark (please do that)'}
      </Button> */}
    </Container>
  );
};

export default Homepage;
