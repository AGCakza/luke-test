import React from 'react'
import { Button } from '../..'
import gplay from '../../../assets/img/icons/gplay.png'
import appstore from '../../../assets/img/icons/appstore.svg'
import Stack from './Stack'


const Right = () => (
    <div className="intro_right">
        <h2>Технолгии реализации :</h2>
        <Stack label='backend' />
        <Stack label='frontend' />
        <div className="intro__buttons">
            <Button label='Перейти на сайт' link='/#' type='light' />
            <Button label='App Store' link='/#' type='dark' icon={appstore} />
            <Button label='Google Play' link='/#' type='dark' icon={gplay} />
        </div>
    </div>
)

export default Right