import { ChakraProvider } from '@chakra-ui/react';
import { Container, Flex, Spacer } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import MenuDrawer from './components/drawers/MenuDrawer';
import UserDrawer from './components/drawers/UserDrawer';


export default function App() {
  return (
    <ChakraProvider>
      <Flex>
        <MenuDrawer />
        <Spacer />
        <UserDrawer />
      </Flex>
      <Container marginTop="15px">
        <Outlet />
      </Container>
    </ChakraProvider>
  );
}
