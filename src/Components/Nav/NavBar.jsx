import React from 'react'
import Logo from '../Logo'
import Container from '../Container'
import NavLinks from './NavLinks'
import Button from '../Button'

const NavBar = () => {

    return(
        <div className="navbar-wrapper">
            <Container>
                <div className="navbar">
                    <Logo />
                    <NavLinks />
                    <Button link='/#' label='Hire Us' />
                </div>
            </Container>
        </div>
    )
}

export default NavBar