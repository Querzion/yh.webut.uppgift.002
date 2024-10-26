// import './App.css'
import Header from './sections/Header/Header'

import Footer from './sections/Footer/Footer'
import Brands from './sections/Brands/Brands'
import Testimonials from './sections/Testimonials/Testimonials'
import FAQ from './sections/FAQ/FAQ'
import Subscribe from './sections/Subscribe/Subscribe'
import Features from './sections/Features/Features'

import './assets/scss/main.scss';
import './assets/scss/themes/themes.scss';


function App() {

    return (
        <>
            
            <Header />
            
            <div className="container">
                <Brands id="brands" />
            </div>

            <Features />
            <Testimonials />
            
            <div className="container">
                <FAQ />
                <Subscribe />
                <Footer />
            </div>
            
        </>
    )
}

export default App
