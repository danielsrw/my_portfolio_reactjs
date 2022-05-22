import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then((data) => {
            setAbouts(data);
        });
    }, []);

    return (
        <>
            <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

            <div className="app__profiles">
                {/* {abouts.map((about, index) => ( */}
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        // key={about.title + index}
                    >
                        <img src={images.about01} alt='Web Development' />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>Web Development</h2>
                        <p className="p-text" style={{ marginTop: 10 }}>
                            Are you just beginning your website design journey? Or do you already have
                            a completed page that works fine and is just in need of some tuning up? 
                            No matter what stage you are currently at, I can step in and make 
                            some improvements that will improve your stats.
                        </p>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        // key={about.title + index}
                    >
                        <img src={images.about02} alt='Mobile Development' />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>Mobile Development</h2>
                        <p className="p-text" style={{ marginTop: 10 }}>
                            If you are trying to find progressive web app developers that can help you 
                            streamline your online presence and grow your success, consider your search over. 
                            You have found one entity that can perform all of your desired services. 
                            When it comes to the development services that we provide, there is almost no limit.
                        </p>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        // key={about.title + index}
                    >
                        <img src={images.about03} alt='Graphic Design' />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>Graphic Design</h2>
                        <p className="p-text" style={{ marginTop: 10 }}>
                            An image can say a thousand words, don’t let them be destructive. An important 
                            part of any website or piece of marketing is the quality of its design and images. 
                            High quality design portrays a high quality product or service, whereas low quality 
                            design shows laziness and negligence.
                        </p>
                    </motion.div>
                {/* ))} */}
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg',
);
