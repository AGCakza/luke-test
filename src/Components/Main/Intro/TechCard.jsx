import React from 'react'
import reactnative from '../../../assets/img/icons/reactnative.png'
import nodejs from '../../../assets/img/icons/nodejs.png'
import mongodb from '../../../assets/img/icons/mongodb.png'


const TechCard = ({item}) => {
    const image = {
        reactnative,
        nodejs,
        mongodb
    }
    return(
        <div className='intro__tech_card'>
            <img src={image[item]} alt={item} />
        </div>
    )
}

export default TechCard