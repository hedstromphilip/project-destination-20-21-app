import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div class="footer-container">
                <div>
                    <p class="title footer-title"><span class="symbol">&copy;</span> PROJECT DESTINATION</p>
                </div>
                <p class="subtitle footer-subtitle">follow us</p>
                <div>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/projectdestination/">
                        <div class="follow-icon-container">
                            <i class='fab fa-instagram follow-icon'></i>
                        </div>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/projectdestination/">
                        <div class="follow-icon-container">
                            <i class='fab fa-facebook-f follow-icon'></i>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;