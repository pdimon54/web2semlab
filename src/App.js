import { useState } from 'react';
import style from './App.module.css'
import List from "./Components/List";
import PopUp from './Components/PopUp'

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [popUpData, setPopUpData] = useState()

  return (
    <div className={style.App} >
      <PopUp isOpen = {isOpen} close={setIsOpen} data={popUpData}/> 
      <List setPopUpData={setPopUpData} setIsOpen={setIsOpen}/>
    </div>
  );
}

export default App;