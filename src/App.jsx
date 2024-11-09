// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRef } from 'react';

import Home from './pages/Home/Home';
import Contact from "./pages/Contact/Contact";

import Header from './sections/Header/Header'
import Footer from './sections/Footer/Footer'

import './assets/scss/main.scss';
import './assets/scss/themes/themes.scss';
import DataProvider from './contexts/DataProvider';

// reference is chatgpt. "/
function App() {

    const featuresRef = useRef(null);

    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <DataProvider>
            <BrowserRouter>
                <div className="wrapper">
                    <Header scrollToFeatures={() => scrollToSection(featuresRef)} />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/Contact" element={<Contact />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </DataProvider>
    )
}

export default App
