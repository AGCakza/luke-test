import React from 'react'
import { Container } from '..'
import intro5 from '../../assets/img/intro5.png'
import { Button } from '..'

const Panel = () => (
    <Container className='panel'>
        <h2 className="panel__title" style={{textAlign: 'center'}}>Для владельцев ресторанов</h2>
        <div className="panel__flex">
            <div className="panel__left">
                <div className="panel__text">
                    <h2 className="panel__title">Удобная админ панель для владельцев ресторанов</h2>
                    <p className="panel__label">Для владельцев ресторанов WEB-приложение с возможностью управлять всеми своими сервисами.</p>
                </div>
                <Button styles={{width: 420}} label='Владеете рестораном? Попробуйте Vilka' link='/#' type='light' />
            </div>
            <div className="panel__img"><img src={intro5} alt='hero' /></div>
        </div>
    </Container>
)

export default Panel