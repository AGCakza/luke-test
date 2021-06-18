import React from 'react'
import twitter from '../../assets/img/icons/twitter.svg'
import instagram from '../../assets/img/icons/instagram.svg'
import facebook from '../../assets/img/icons/facebook.svg'
import linkedin from '../../assets/img/icons/linkedin.svg'

const soc = [
    {label: 'twitter', link: '/#', icon: twitter},
    {label: 'instagram', link: '/#', icon: instagram},
    {label: 'facebook', link: '/#', icon: facebook},
    {label: 'linkedin', link: '/#', icon: linkedin},
]

const SocLinks = () => (
    <ul className='footer__social_list'>
        {soc.map((item, index) =>
            <li key={index} className="footer__social_link">
                <a href={item.link}>
                    <img src={item.icon} alt={item.label} />
                    {item.label}
                </a>
            </li>)}
    </ul>
)

export default SocLinks