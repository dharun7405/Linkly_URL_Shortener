import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import {Toaster} from "react-hot-toast";
import LoginPage from "./components/LoginPage.jsx";
import DashboardLayout from "./components/Dashboard/DashboardLayout.jsx";

function App() {
  return (
    <>
      <Router>
          <NavBar/>
          <Toaster position="bottom-center"/>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/dashboard" element={<DashboardLayout/>} />
        </Routes>
          <Footer/>
      </Router>
    </>
  )
}

export default App
