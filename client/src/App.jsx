import { Routes, Route } from "react-router-dom";

import Login from './pages/login/login.route';
import Player from "./pages/player/player.route";
import SignIn from './pages/sign-in/sign-in.route';
import Tempura from './pages/tempura/tempura.route';


const App = () => {


  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Tempura/>}/>
          <Route path="/login"  element={<Login/>}/>
          <Route path="/sign-up" element={<SignIn/>}/>
          <Route exact path="/player" element={<Player/>}/>
      </Routes>
    </div>
  )
}

export default App
