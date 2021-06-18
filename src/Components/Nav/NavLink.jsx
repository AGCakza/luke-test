import React from 'react'

const NavLink = ({
    item,
    extended
}) => {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.dropdown-trigger');
        window.M.Dropdown.init(elems, {coverTrigger: false});
      });
    if(item.extends && !extended) return(
        <li className='navlist__item'>
            <a style={{display: 'flex', alignItems: 'center'}} className='dropdown-trigger navlist__item_link' href='/#' data-target='dropdown1'>{item.label} <i className="material-icons">arrow_drop_down</i></a>
            <ul id='dropdown1' className='dropdown-content'>
                {item.extends.map((item, index) => <li  className='navlist__item' key={index}><a className='navlist__item_link' href={item.link}>{item.label}</a></li>)}
            </ul>
        </li>
    )

    return(
        <li className='navlist__item'>
            <a className='navlist__item_link' href={item.link}>{item.label}</a>
        </li>
    )
}

export default NavLink