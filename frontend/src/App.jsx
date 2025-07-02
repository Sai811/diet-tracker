import './App.css'
import Signin from './components/signin'
import Signup from './components/signup'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signin" element={<Signin />}/>
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
