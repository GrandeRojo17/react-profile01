import React from "react";
import pro1 from '../images/projectImages/weatherDash_01.PNG';
import pro2 from '../images/projectImages/fitnessTracker_Pic02.PNG';

function PortfolioCard(props) {
    return (
        <div className="portfolio-card">
            <div className="img-container">
                <img className="img" alt={props.name} src={pro2} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <h2> {props.title} </h2>
                    </li>
                    <li>
                        <strong>{props.description}</strong>
                    </li>
                    <li><a href={props.link} >Try it out here!</a></li>
                    <li>
                        <a href={props.github}>Github Page </a>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default PortfolioCard;