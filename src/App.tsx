import React from 'react';
import { VStack } from "@chakra-ui/react"
import Header from './components/Header';
import MainLayout from './layouts/MainLayout';
import Body from './components/Body'

function App() {
  return ( 
    <>
      <MainLayout>
        <Header />
        <Body />
      </MainLayout>
    </>
  );
}

export default App;
