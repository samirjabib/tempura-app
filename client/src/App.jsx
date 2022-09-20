import { Routes, Route } from "react-router-dom"

import Login from './pages/login/login.route';
import SignUp from './pages/sign-up/sign-up.route';
import Tempura from './pages/tempura/tempura.route'




const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Tempura/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>

      </Routes>
    </div>
  )
}

export default App
