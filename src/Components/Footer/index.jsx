import React from 'react'
import NavLinks from '../Nav/NavLinks'
import { Container, Logo } from '..'
import SocLinks from './SocLinks'


const Footer = () => {

    return(
        <div className="footer-wrapper">
            <Container className='footer'>
                <div className="footer__logo">
                    <Logo color='fff' />
                    <p>OXIOS © 2020  All Rights Reserved</p>
                </div>
                <div className="footer__nav">
                    <p className='footer_title'>Links</p>
                    <NavLinks extended />
                </div>
                <div className="footer__social">
                    <p className='footer_title'>Follow Us</p>
                    <SocLinks />
                </div>
            </Container>
        </div>
    )
}

export default Footer