import './App.css'
import LandingPage from './components/LandingPage'  
import GetUserDetails from './components/GetUserDetails'
import Signin from './components/signin'
import Signup from './components/signup'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import FeatureSection from './components/FeatureSection'
import Pricing from './components/Pricing'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path='/getUserDetails' element={<GetUserDetails/>}/>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/features' element={<FeatureSection/>} /> 
        <Route path='/pricing' element={<Pricing/>}/>
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
