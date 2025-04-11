import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./components/home"
import About from "./components/about"
import Team from "./components/team"
import Contact from "./components/contact"

function App() { 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
