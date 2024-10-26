import React from 'react'
import Navbar from './Navbar/Navbar'
import Showcase from './Showcase/Showcase'

const Header = () => {
    return (
        <header>
            <div className="container">
                <Navbar id="" />
            </div>
            {/* <Navbar id="" /> */}
            <Showcase />
        </header>
    )
}

export default Header
