// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from "./pages/Contact/Contact";

import Header from './sections/Header/Header'
import Footer from './sections/Footer/Footer'

import './assets/scss/main.scss';
import './assets/scss/themes/themes.scss';


function App() {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
