import React from 'react';
import { BsTwitter, BsInstagram, BsWhatsapp } from 'react-icons/bs';

const SocialMedia = () => (
    <div className="app__social">
        <a href="https://twitter.com/dvniels_">
            <div>
                <BsTwitter />
            </div>
        </a>
        <a href="https://www.instagram.com/dvniels_xx">
            <div>
                <BsInstagram />
            </div>
        </a>
        <a href="https://wa.me/250781862349">
            <div>
                <BsWhatsapp />
            </div>
        </a>
    </div>
);

export default SocialMedia;
