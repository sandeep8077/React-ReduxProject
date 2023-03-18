
import './App.css';
import {useState} from 'react';

import User from './User';


function App() {
  const [data,setData]=useState("sandeep")
    

  console.warn("______")
  return (
    <div className="App">
      <h1>{data}</h1>
     <User name="sandeep user" email={"sk5576182@gmail"} other ={{adderes:"bharapur",city:"roorkee"}}  />
      
    </div>
  );
}

export default App;
