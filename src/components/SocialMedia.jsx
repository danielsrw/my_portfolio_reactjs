import React from 'react';
import { BsTwitter, BsInstagram, BsWhatsapp } from 'react-icons/bs';

const SocialMedia = () => (
    <div className="app__social">
        <a href="https://twitter.com/anonymousxviiii">
            <div>
                <BsTwitter />
            </div>
        </a>
        <a href="https://instagram.com/daniels_xvii">
            <div>
                <BsInstagram />
            </div>
        </a>
        <a href="">
            <div>
                <BsWhatsapp />
            </div>
        </a>
    </div>
);

export default SocialMedia;
