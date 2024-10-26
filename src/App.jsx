import './App.css'
import Header from './sections/Header/Header'

import Footer from './sections/Footer/Footer'
import Brands from './sections/Brands/Brands'
import Testimonials from './sections/Testimonials/Testimonials'
import FAQ from './sections/FAQ/FAQ'
import Subscribe from './sections/Subscribe/Subscribe'
import Features from './sections/Features/Features'



function App() {

    return (
        <>
            <Header />
            <main>
                <Brands />
                <Features />
                <Testimonials />
                <FAQ />
                <Subscribe />
            </main>
            <Footer /> 
        </>
    )
}

export default App
