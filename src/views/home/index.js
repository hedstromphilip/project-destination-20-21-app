import React from 'react';
import { Button } from 'react-bootstrap'

import './home.css';

const Home = () => {
    return (
        <div>
            <p>home</p>
            <Button variant="primary" className="button">Events</Button>
            <Button variant="primary" className="button">Products</Button>
        </div>
    );
};

export default Home;