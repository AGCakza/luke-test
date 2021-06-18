import React from 'react'

const Button = ({
    label,
    link,
    type,
    icon,
    styles = {}
}) => {

    return(
        <a href={link} style={styles} className={`button${type ? ' ' + type : ''}`}>
            {icon && <img src={icon} alt={label} className='button_icon' />}{label}{icon && <div />}
        </a>
    )
}

export default Button