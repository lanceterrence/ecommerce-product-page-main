import React from 'react';
import { VStack } from "@chakra-ui/react"
import Header from './components/Header';
import MainLayout from './layouts/MainLayout';

function App() {
  return ( 
    <>
      <MainLayout>
        <Header />
      </MainLayout>
    </>
  );
}

export default App;
