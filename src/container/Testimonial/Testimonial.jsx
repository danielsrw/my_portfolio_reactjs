import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonials, setTestimonials] = useState([]);
    const [brands, setBrands] = useState([]);

    const handleClick = (index) => {
    setCurrentIndex(index);
    };

    useEffect(() => {
        const query = '*[_type == "testimonials"]';
        const brandsQuery = '*[_type == "brands"]';

        client.fetch(query).then((data) => {
            setTestimonials(data);
        });

        client.fetch(brandsQuery).then((data) => {
            setBrands(data);
        });
    }, []);

    return (
        <>
            <h2 className="head-text">Testimonials</h2>

            {/* {testimonials.length && ( */}
                <>
                    <div className="app__testimonial-item app__flex">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt='' />
                        <div className="app__testimonial-content">
                            <p className="p-text">
                                There’s no need to explain our vision repeatedly. He have a clear, quick, and professional approach.
                            </p>
                            <div>
                                <h4 className="bold-text">Ntwali Olivier Martial</h4>
                                <h5 className="p-text">EAYT Ltd</h5>
                            </div>
                        </div>
                    </div>

                    <div className="app__testimonial-btns app__flex">
                        <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                            <HiChevronLeft />
                        </div>

                        <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                            <HiChevronRight />
                        </div>
                    </div>
                </>
            {/* )} */}

            <div className="app__testimonial-brands app__flex">
                {/* {brands.map((brand) => ( */}
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        // key={brand._id}
                    >
                        <img src={images.weforem} alt='' />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        // key={brand._id}
                    >
                        <img src={images.nexcode} alt='' />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        // key={brand._id}
                    >
                        <img src={images.ndahari} alt='' />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        // key={brand._id}
                    >
                        <img src={images.eaytLogo} alt='' />
                    </motion.div>
                {/* ))} */}
            </div>
        </>
    )
};

export default AppWrap(
    MotionWrap(Testimonial, 'app__testimonial'),
    'testimonial',
    'app__primarybg',
);