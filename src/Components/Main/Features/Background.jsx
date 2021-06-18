import React from 'react'
import intro2 from '../../../assets/img/intro2.png'
import intro3 from '../../../assets/img/intro3.png'
import intro4 from '../../../assets/img/intro4.png'

const Background = () => (
    <div className="features__bg">
        <img src={intro2} alt='bg' className='features__bg_0' />
        <img src={intro3} alt='bg' className='features__bg_1' />
        <img src={intro4} alt='bg' className='features__bg_2' />
        <img src={intro4} alt='bg' className='features__bg_3' />
    </div>
)

export default Background