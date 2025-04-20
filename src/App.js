
import './App.css';
import Home from './Components/Home';
import Services from './Components/Services';
import Events from './Components/Events';
import Contact from './Components/Contact';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
console.log("Home:", Home);
console.log("Services:", Services);
console.log("Events:", Events);
console.log("Contact:", Contact);
console.log("Header:", Header);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/services" element = {<Services/>}/>
        <Route path = "/events" element = {<Events/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
