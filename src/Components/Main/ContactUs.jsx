import React from 'react'
import { Button } from '..'

const ContactUs = () => (
    <div className="contactus">
        <p>Do you want to discuss your project?</p>
        <Button styles={{boxShadow: '0px 5px 20px 0px #34315026', padding: '15px, 60px, 15px, 60px'}} label='Contact Us' link='/#' />
    </div>
)

export default ContactUs