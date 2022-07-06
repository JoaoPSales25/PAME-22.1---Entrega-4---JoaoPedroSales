import React from 'react'
import TabOptions from '../tabOptions'
import { HeaderContainer, Img } from './styles'
import farmais from '../../Assets/farmais.png'

const Header = ({activeTab, setActiveTab}) => {
  return (
    <HeaderContainer>
        <Img src={farmais} alt=''/>
        <TabOptions setActiveTab = {setActiveTab} activeTab = {activeTab } />
    </HeaderContainer>
  )
}

export default Header