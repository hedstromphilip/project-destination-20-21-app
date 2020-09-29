import React from 'react';
import { Team } from 'src/components';

import './home.css';

const Home = () => {
    return (
        <div>
            <div class="about-container page">
                <h1 class="title home-title light-text">About us</h1>
                <div class="about-grid">
                    <div class="about-grid-item">
                        <h5 class="subtitle light-text">Who we are</h5>
                        <p class="text light-text">Project Destination is an annual engagement at KTH Royal Institute of Technology in Stockholm. Our aim is to inspire and motivate students from KTH to seize the possibilities of spectacular career opportunities and business relations, both in Sweden and internationally. The project is a non-profit organisation run by 10 very talented students at KTH who work hard for the cause of this project.</p>
                    </div>
                    <div class="about-grid-item">
                        <h5 class="subtitle light-text">What we do</h5>
                        <p class="text light-text">We organize tailored events where students and companies meet and establish contact for future collaborations. Every company wants to hire the best employees, but finding them can be difficult. Through our wide network and marketing channels, we will reach out to the candidates you are looking for. Project Destination creates value for both companies and students.</p>
                    </div>
                </div>
                <h5 class="subtitle light-text">Our partners</h5>
                <h5 class="subtitle light-text">...</h5>
            </div>
            <div class="team-container page">
                <h1 class="title home-title">The team</h1>
                <h5 class="subtitle home-subtitle">20/21</h5>
                <Team />
            </div>
        </div>
    );
};

export default Home;