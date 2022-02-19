import React from 'react';
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
