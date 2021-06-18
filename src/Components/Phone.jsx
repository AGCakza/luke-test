import React from 'react'
import iphone_dark from '../assets/img/phone/iphonex_dark.png'
import iphone_light from '../assets/img/phone/iphonex_light.png'
import samsung_dark from '../assets/img/phone/samsung_dark.png'

const Phone = ({
    phone,
    theme,
    image,
    height,
    styles,
    shadow
}) => {
    styles.height = height
    const Phone = {
        iphone: {
            dark: iphone_dark,
            light: iphone_light
        },
        samsung: {dark: samsung_dark}
    }
    return(
        <div className={`phone-wrapper${shadow ? ' shadow' : ''}`} style={styles}>
            <div className="phone">
                <img className="phone__body" src={Phone[phone][theme]} alt='phone' />
                <div><img src={image} alt="screen" className={`phone__img${phone === 'samsung' ? ' samsung' : ''}${theme === 'light' ? ' light' : ''}`} /></div>
            </div>     
        </div>
    )
}

export default Phone