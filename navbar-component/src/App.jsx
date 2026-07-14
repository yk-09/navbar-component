import { useState } from 'react';
import './App.css';
import { NavBarDesktop, NavBarMobile, NavigationMenu } from "./Components/NavBar";

function App (){

  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <NavBarDesktop />
      <NavBarMobile setIsOn={setIsOn} isOn={isOn} />
      <NavigationMenu isOn={isOn} setIsOn={setIsOn}/>
    </>
  )
}

export default App