import React,{useState} from 'react';
import './App.css';

function App() {
 
  let [counter , setCounter] = useState(15);

  function addNumber() {
    if( counter <20){
      setCounter(counter + 1);
    }
    
  }
  function removeNumber(){
    if( counter >0){
      setCounter(counter - 1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ravi APP</h1>
        <h1>Counter App</h1>
        <button type="button" onClick={addNumber}>+</button>
        <h3>Counter Number : {counter}</h3>
        <button type="button" onClick={removeNumber}>-</button>
      </header>

    </div>
  );
}

export default App;
