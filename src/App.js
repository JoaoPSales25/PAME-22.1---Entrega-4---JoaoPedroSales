
import React, { useState } from 'react'
import { Container } from './styles';
import LoginScreen from './components/loginScreen';
import Home from './components/homeScreen';

function App() {

  const [activeScreen, setActiveScreen] = useState("Login");

  const getCorrectScreen = (screen) => {
    switch(screen) {
        case "Login" :
            return <LoginScreen setActiveScreen = {setActiveScreen} activeScreen= {activeScreen}/>
        case "Home" :
            return <Home/>
        default:
            return <LoginScreen/>
    }
}

  return (
    <Container>
      {getCorrectScreen(activeScreen)}
    </Container>
      
    
  )
}



export default App;
