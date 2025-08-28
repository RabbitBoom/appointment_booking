import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router'

import Navbar from 'components/Navbar/Navbar.jsx'
import LandingPage from "components/Landing_Page/LandingPage.jsx";
import Login from 'components/Login/Login.jsx'
import SignUp from "components/Sign_Up/Sign_Up.jsx";

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/" element={<LandingPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
