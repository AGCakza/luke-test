import React from 'react'
import Left from './Left'
import Right from './Right'
import { Container } from '../..'

const Intro = () => (
    <Container className='intro'>
            <h1><span>Vilka APP -</span> Доставка еды со всех ресторанов в ваш дом</h1>
            <div className="intro_content">
                <Left />
                <Right />
            </div>
    </Container>
)

export default Intro