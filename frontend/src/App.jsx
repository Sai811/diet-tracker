import './App.css'
import Dashboard from './components/Dashboard'
import GetUserDetails from './components/GetUserDetails'
import Signin from './components/signin'
import Signup from './components/signup'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/" element={<Signin />}/>
        <Route path='/getUserDetails' element={<GetUserDetails/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
