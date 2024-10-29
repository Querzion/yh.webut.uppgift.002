import React from 'react';

import Showcase from '../../sections/Showcase/Showcase'
import Brands from '../../sections/Brands/Brands'
import Features from '../../sections/Features/Features'
import Testimonials from '../../sections/Testimonials/Testimonials'
import FAQ from '../../sections/FAQ/FAQ'
import Subscribe from '../../sections/Subscribe/Subscribe'


const Home = () => {
   

    return (
        <>
            <Showcase />
            <Brands id="brands" />
            <Features />
            <Testimonials />
            <FAQ />
            <Subscribe />
        </>
    )
}

export default Home