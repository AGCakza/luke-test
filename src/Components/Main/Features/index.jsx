import React from 'react'
import screen2 from '../../../assets/img/phone/screens/screen2.png'
import screen3 from '../../../assets/img/phone/screens/screen3.png'
import screen4 from '../../../assets/img/phone/screens/screen4.png'
import screen5 from '../../../assets/img/phone/screens/screen5.png'
import { Container } from '../..'
import FeatureItem from './FeatureItem'
import Background from './Background'

const items = [
    {title: 'Удобство', description: 'Все легко, быстро и понятно', phone: {phone: 'samsung', theme: 'dark', image: screen2}},
    {title: 'Надежность', description: 'Ваши данные в полной безопасности!', phone: {phone: 'iphone', theme: 'dark', image: screen3}},
    {title: 'Поиск по названию', description: 'Мы даём возможность найти ваш любимый ресторан или блюдо.', phone: {phone: 'iphone', theme: 'dark', image: screen4}},
    {title: 'Оставляй отзывы ', description: 'Вы можете оставить отзыв о ресторане в котором сделали заказ', phone: {phone: 'iphone', theme: 'dark', image: screen5}},
]

const Features = () => {

    return(
        <Container className='features'>
            <Background />
            <p className='features__title'>Для пользователей приложения</p>
            <div className="features__list">
                {items.map((item, index) => <FeatureItem item={item} key={index} />)}
            </div>
        </Container>
    )
}

export default Features