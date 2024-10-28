import React from 'react'

import CTablet from "./CTablet"
import CDesktop from "./CDesktop"
import CMobile from './cMobile'


const Carousel = () => {
    return (
        <>
            <CMobile />
            <CTablet />
            <CDesktop />
        </>
    )
}

export default Carousel