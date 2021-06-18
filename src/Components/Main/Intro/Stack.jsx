import React from 'react'
import TechCard from './TechCard'

const tech = {
    backend: [
        'nodejs',
        'mongodb'
    ],
    frontend: [
        'reactnative'
    ]
}

const Stack = ({label}) => (
    <div className='intro__stack'>
        <div className='intro__stack_title'>
            <div className="intro__line" />
            <span>{label}</span>
        </div>
        {tech[label].map((item, index) => <TechCard key={index} item={item} />)}
    </div>
)

export default Stack