import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
