import React from 'react'
import { Container } from './styles';
import Produtos from '../tabs/produtos';
import Encomendas from '../tabs/encomendas';
import { useState } from 'react';
import Header from '../header';


const Home = () => {

    const [activeTab, setActiveTab] = useState("Produtos");

  return (
    <Container>
      <Header activeTab= {activeTab} setActiveTab = {setActiveTab} />
      {getCorrectScreen(activeTab)}
    </Container>
  )
}

const getCorrectScreen = (tab) => {
    switch(tab) {
        case "Produtos" :
            return <Produtos/>
        case "Encomendas" :
            return <Encomendas/>
        default:
            return <Produtos/>
    }
}

export default Home