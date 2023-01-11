import { Route, Routes } from "react-router-dom"
import Home from './Home'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Resume from './Resume'

export default function Main () {

  return(
    <div className="main">
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="/portfolio" element={<Portfolio/>}/>
        <Route path ="/Resume" element={<Resume/>}/>
      </Routes>
    </div>
  )
}