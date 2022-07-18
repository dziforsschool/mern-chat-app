import './App.css'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import ChatPage from './Pages/ChatPage'

function App() {
  return (
    <ChakraProvider>
      <div class="App">
        <Route path='/' component={Homepage} exact />
        <Route path='/chats' component={ChatPage} />
      </div>
    </ChakraProvider>
  )
}

export default App
