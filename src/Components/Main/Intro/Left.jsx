import React from 'react'
import { Phone } from '../..'
import intro0 from '../../../assets/img/intro0.png'
import intro1 from '../../../assets/img/intro1.png'
import screen0 from '../../../assets/img/phone/screens/screen0.png'
import screen1 from '../../../assets/img/phone/screens/screen1.png'

const styles = {
    item0: {
        position: 'absolute',
        top: '70px',
        left: '309px',
        zIndex: 5
    },
    item1: {
        position: 'absolute',
        top: '120px',
        left: '440px',
        zIndex: 1,
    },
    item2: {
        position: 'absolute',
        bottom: '50px',
        left: '50px',
        zIndex: 10
    }
}

const Left = () => (
    <div className="intro_left">
        <img src={intro0} alt="intro" />
        <Phone phone='iphone' theme='light' image={screen0} height='350px' styles={styles.item0} shadow />
        <Phone phone='iphone' theme='light' image={screen1} height='320px' styles={styles.item1} shadow />
        <img src={intro1} alt='intro' style={styles.item2} />
    </div>
)

export default Left