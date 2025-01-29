import Navbar from "./components/Navbar"
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import LoginSignup from "./pages/LoginSignup"

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="/account-actions" element={<LoginSignup/>}></Route>
      </Routes>
      </main>
    </div>
  )
}

export default App
