
import './App.css';
import {useState} from 'react';

import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer'


function App() {
  const [data,setData]=useState("sandeep")
    

  return (
    <div className="App">
     <HeaderContainer/>
    <HomeContainer/>
      
    </div>
  );
}

export default App;
