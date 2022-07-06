import React from 'react'
import { OptionsContainer, OptionsEncomendas, OptionsProdutos } from './styles'

const TabOptions = ({setActiveTab}) => {
  return (
    <OptionsContainer>
      <OptionsProdutos onClick={() => setActiveTab('Produtos')}>Produtos </OptionsProdutos>
      <OptionsEncomendas onClick={() => setActiveTab('Encomendas')}>Encomendas </OptionsEncomendas>
    </OptionsContainer>
  )
}

export default TabOptions