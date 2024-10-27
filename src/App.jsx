// import './App.css'
import Header from './sections/Header/Header'

import Showcase from './sections/Showcase/Showcase'
import Brands from './sections/Brands/Brands'
import Features from './sections/Features/Features'
import Testimonials from './sections/Testimonials/Testimonials'
import FAQ from './sections/FAQ/FAQ'
import Subscribe from './sections/Subscribe/Subscribe'
import Footer from './sections/Footer/Footer'

import './assets/scss/main.scss';
import './assets/scss/themes/themes.scss';


function App() {

    return (
        <>
            
            <div className="wrapper">
                <Header />
                
                <main>
                    <Showcase />
                    <Brands id="brands" />
                    <Features />
                    <Testimonials />
                    <FAQ />
                    <Subscribe />
                </main>
                
                <Footer />
            </div>

        </>
    )
}

export default App
