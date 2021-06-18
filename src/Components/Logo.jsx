import React from 'react'
import icon from '../assets/img/icons/logo.svg'
import iconFFF from '../assets/img/icons/logo_fff.svg'

const Logo = ({color}) => (
    <a href='/#' className={`logo${color ? ' ' + color : ''}`}>
        <img src={color === 'fff' ? iconFFF : icon} alt="logo" />
        <span>Oxios</span>
    </a>
)

export default Logo