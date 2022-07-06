import React from 'react'
import ExplorerCard from '../explorerCard'
import { ExplorerContainer, SearchBar} from './styles'

const Explorer = ({productsList}) => {
  return (
    <ExplorerContainer>
        <SearchBar placeholder='Busque algum produto'></SearchBar>
        {productsList.map((product) => {
          return <ExplorerCard key = {product.id} product = {product}/>
          })}
    </ExplorerContainer>
  )
}

export default Explorer