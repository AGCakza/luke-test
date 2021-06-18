import React from 'react'
import { Phone } from '../..'

const FeatureItem = ({
    item
}) => (
    <div className="features__item">
        <div className="features__item_text">
            <div className="features__item_line" />
            <div>
                <h2 className="features__item_title">{item.title}</h2>
                <p className="features__item_description">{item.description}</p>
            </div>            
        </div>
        <Phone {...item.phone} height='460px' styles={{}}/>
    </div>
)

export default FeatureItem