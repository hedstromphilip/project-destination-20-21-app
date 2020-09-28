import React from 'react';
import { Link } from 'react-router-dom';

import './error.css';

const Events = () => {
    return (
        <div class="errorPage page">
            <h1 class="title">404: Page Not Found</h1>
            <h6 class="subtitle">The URL you requested was not found. You can visit our <Link to="/">homepage</Link> instead.</h6>
        </div>
    );
};

export default Events;