
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Projects from './pages/Projects'
function App() {
 
  return (

    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path='/sign-in' element={<Signin/>}/>
        <Route path='/projects' element={<Projects/>}/>



    </Routes>
    
    </BrowserRouter>
    
  )
}

export default App
