import React from 'react';
import { Team } from 'src/components';

import './home.css';

const Home = () => {
    return (
        <div class="homePage page">
            <h1 class="title home-title">The team</h1>
            <h5 class="subtitle home-subtitle">20/21</h5>
            <Team />
        </div>
    );
};

export default Home;