import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Login } from './components/Login';
import SignUp from './components/SignUp'
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element ={<Login/>}/>
          <Route path='home' element = {<Home/>}/>
          <Route path='signup' element = {<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
