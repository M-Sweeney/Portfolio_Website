import { Route, Routes } from "react-router-dom"
import Home from './Home'
import Contact from './Contact'
import Portfolio from './Portfolio'

export default function Main () {

  return(
    <div className="main">
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="/portfolio" element={<Portfolio/>}/>
      </Routes>
    </div>
  )
}