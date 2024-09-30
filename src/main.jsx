import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Resources from './Pages/Resources.jsx'
import Support from './Pages/Support.jsx'
import Community from './Pages/Community.jsx'
import About from './Pages/About.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
       <Routes>
       <Route  exact path='/' Component={App} />
        <Route  exact path='/Resources' Component= {Resources}/>
        <Route  exact path='/Support' Component= {Support}/>
        <Route  exact path='/Community' Component= {Community}/>
        <Route  exact path='/About' Component= {About}/>
       </Routes>
 </BrowserRouter>
)
