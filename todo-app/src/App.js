// import logo from './logo.svg';
import "./App.css";
import Title from "./components/title";
import List from "./components/list";
import Counter from "./components/counter";
import { useState } from "react";

function App() {
  const[completedCount, setCompletedCount] = useState(0);
  return (
    <div className="App">
      <div>completed = {completedCount}</div>
      <div><Title title="Shalini's Todo List"/>
      <List updateCount = {setCompletedCount}/>
      <Counter /></div>    
    </div>
  );
}

export default App;
