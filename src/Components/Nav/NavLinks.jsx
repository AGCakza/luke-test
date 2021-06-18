import React from 'react'
import NavLink from './NavLink'

const links = [
    [
        {label: 'Our Works', link: '/#'},
        {label: 'Technologies', link: '/#'},
        {label: 'About Us', link: '/#', extends: [
            {label: 'Ext 1', link: '/#'},
            {label: 'Ext 2', link: '/#'},
        ]},
        {label: 'Blog', link: '/#'},
    ],
    [
        {label: 'Contact Us', link: '/#'},
        {label: 'Get Checklist', link: '/#'},
        
    ],
]

const NavLinks = ({
    extended,
}) => {

    return(
        <ul className={`navlist${extended ? ' extended' : ''}`}>
            {links[0].map((item, index) => <NavLink item={item} key={index} extended={extended} />)}
            {extended ? links[1].map((item, index) => <NavLink item={item} key={index} extended={extended} />) : null}
        </ul>
    )
}

export default NavLinks