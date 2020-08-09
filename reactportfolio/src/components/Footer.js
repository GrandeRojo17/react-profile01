import React from 'react';
import { Card } from 'reactstrap';


const Footer = () => {
    const navStyle = {
        color: 'black'
    }
    return (
        <Card className={navStyle.color}>
            <p>Email: David.Yennerell@gmail.com</p>
            <p> <a href="https://www.linkedin.com/in/david-yennerell-815a471a2/" >Thanks for dropping in!</a></p>
        </Card>

    )
}

export default Footer;