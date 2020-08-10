import React from 'react';
import {
    Card
} from 'reactstrap';


const Contact = () => {
    const navStyle = {
        color: 'black'
    }
    return (
        <Card className={navStyle.color}>

            <h1>Contact👽</h1>
            <button><a href="https://docs.google.com/document/d/1FqIyl6JFP37exl96-XmVJ710rYmlwGu_TfnKpJw8w18/edit">Resume</a></button>
            <p>linkedIn: <a href="https://www.linkedin.com/in/david-yennerell-815a471a2/" >LinkedIn</a></p>
        </Card>

    )
}

export default Contact;