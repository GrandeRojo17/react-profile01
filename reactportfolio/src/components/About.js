import React, { useState } from "react";

import ProfilePic from '../images/snapchat_bitmoji_clear_transparent_faceOnly_cropped.png'

import "../index.css"

const About = () => {
    return (
        <div className="about-container">
            <h1>HELLOO!👋</h1>
            <p>I'm <span>David Yennerell</span></p>
            <img src={ProfilePic} alt="My Pretty Cartoon Face." />
            <p>I am a aspiring web developer based out of Kansas City who is close to finishing up a coding bootcamp with Kansas University </p>
            <p>Born on the east coast and now in Kansas City, MO.</p>
            <p>I offer a creative mindset to projects related to boosting revenue.</p>
        </div>
    )
}

export default About;