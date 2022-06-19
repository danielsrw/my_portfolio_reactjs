import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    useEffect(() => {
        const query = '*[_type == "works"]';
    
        client.fetch(query).then((data) => {
            setWorks(data);
            setFilterWork(data);
        });
    }, []);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);
    
        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);
        
            if (item === 'All') {
                setFilterWork(works);
            } else {
                setFilterWork(works.filter((work) => work.tags.includes(item)));
            }
        }, 500);
    };

    return (
        <>
            <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

            <div className="app__work-filter">
            {['Web App', 'Mobile App', 'Clones', 'Certificates', 'All'].map((item, index) => (
                <div
                    key={index}
                    onClick={() => handleWorkFilter(item)}
                    className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                >
                    {item}
                </div>
            ))}
            </div>

            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >
                {/* {filterWork.map((work, index) => ( */}
                    <div className="app__work-item app__flex">
                        <div className="app__work-img app__flex" >
                            <img src={images.gym} alt='Name' />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href='https://gym-react-app-250.vercel.app/' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href='https://github.com/danielsrw/gym-react-app' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                    <AiFillGithub />
                                </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">GYM React JS App</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quaerat?
                            </p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">Web App</p>
                            </div>
                        </div>
                    </div>
                    <div className="app__work-item app__flex">
                        <div className="app__work-img app__flex" >
                            <img src={images.netflix} alt='Name' />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href='http://netflix-clone-250.vercel.app/' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href='https://github.com/danielsrw/netflix-clone-250' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                    <AiFillGithub />
                                </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">Netflix Clone (Next JS)</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quaerat?
                            </p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">Web App</p>
                            </div>
                        </div>
                    </div>
                    <div className="app__work-item app__flex">
                        <div className="app__work-img app__flex" >
                            <img src={images.shoppy} alt='Name' />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href='https://reactjs-dashboard-syncfusion.vercel.app/' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href='https://github.com/danielsrw/reactjs_dashboard_syncfusion' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                    <AiFillGithub />
                                </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">Shoppy Admin Dashboard (React JS)</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quaerat?
                            </p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">Web App</p>
                            </div>
                        </div>
                    </div>
                    <div className="app__work-item app__flex">
                        <div className="app__work-img app__flex" >
                            <img src={images.phinix} alt='Name' />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href='https://nextjs-commerce-kappa-red.vercel.app/' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href='https://github.com/danielsrw/nextjs-commerce' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                    <AiFillGithub />
                                </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">E-commerce Phinix (React JS)</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quaerat?
                            </p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">Web App</p>
                            </div>
                        </div>
                    </div>
                    <div className="app__work-item app__flex">
                        <div className="app__work-img app__flex" >
                            <img src={images.shareme} alt='Name' />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href='https://loving-galileo-39dd30.netlify.app/' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href='https://github.com/danielsrw/shareme-sanity-reactjs-project' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                    <AiFillGithub />
                                </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">ShareMe (React JS)</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quaerat?
                            </p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">Web App</p>
                            </div>
                        </div>
                    </div>
                    <div className="app__work-item app__flex">
                        <div className="app__work-img app__flex" >
                            <img src={images.eayt} alt='Name' />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href='' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href='' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                    <AiFillGithub />
                                </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">EAYT Ltd (PHP)</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quaerat?
                            </p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">Web App</p>
                            </div>
                        </div>
                    </div>
                    <div className="app__work-item app__flex">
                        <div className="app__work-img app__flex" >
                            <img src={images.beachresort} alt='Name' />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href='https://sharp-hotel-888bec.netlify.app/' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href='https://github.com/danielsrw/beach-resort-hotel-reactjs' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                    <AiFillGithub />
                                </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">Beach Resort (React JS)</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quaerat?
                            </p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">Web App</p>
                            </div>
                        </div>
                    </div>
                    <div className="app__work-item app__flex">
                        <div className="app__work-img app__flex" >
                            <img src={images.cocktaildb} alt='Name' />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href='https://cocktailsearchtestapp.netlify.app/' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href='' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                    <AiFillGithub />
                                </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">Cocktail (React JS)</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quaerat?
                            </p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">Mobile App</p>
                            </div>
                        </div>
                    </div>
                    <div className="app__work-item app__flex">
                        <div className="app__work-img app__flex" >
                            <img src={images.nac} alt='Name' />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href='https://www.nacrwanda.rw/' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href='' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                    <AiFillGithub />
                                </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">NAC Rwanda (PHP)</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quaerat?
                            </p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">Web App</p>
                            </div>
                        </div>
                    </div>
                    <div className="app__work-item app__flex">
                        <div className="app__work-img app__flex" >
                            <img src={images.geritcht} alt='Name' />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href='https://gracious-swirles-3e0951.netlify.app/' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href='https://github.com/danielsrw/restaurant-app-with-reactjs-250' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                    <AiFillGithub />
                                </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">Geritcht Resto (React JS)</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quaerat?
                            </p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">Web App</p>
                            </div>
                        </div>
                    </div>
                    <div className="app__work-item app__flex">
                        <div className="app__work-img app__flex" >
                            <img src={images.grocerybud} alt='Name' />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href='https://grocerybudtestapp.netlify.app/' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href='' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                    <AiFillGithub />
                                </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">Grocery Bud (React JS)</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quaerat?
                            </p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">Mobile App</p>
                            </div>
                        </div>
                    </div>
                    <div className="app__work-item app__flex">
                        <div className="app__work-img app__flex" >
                            <img src={images.rvc} alt='Name' />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href='' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href='https://github.com/danielsrw/Real-E-state-Laravel-Project-RVC' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                    <AiFillGithub />
                                </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">Real Value Corp (Laravel)</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quaerat?
                            </p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">Web App</p>
                            </div>
                        </div>
                    </div>
                    <div className="app__work-item app__flex">
                        <div className="app__work-img app__flex" >
                            <img src={images.kimomosafaris} alt='Name' />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href='https://test-kimo-safa.netlify.app/' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href='https://github.com/danielsrw/test-travel-safaris' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                    <AiFillGithub />
                                </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">Kimomo Safaris (HTML & CSS)</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quaerat?
                            </p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">Web App</p>
                            </div>
                        </div>
                    </div>
                    <div className="app__work-item app__flex">
                        <div className="app__work-img app__flex" >
                            <img src={images.royal} alt='Name' />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href='https://clever-kilby-8c3772.netlify.app/' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href='https://github.com/danielsrw/hotel-web-reactjs' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                    <AiFillGithub />
                                </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">Royal Hotel (React JS)</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quaerat?
                            </p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">Web App</p>
                            </div>
                        </div>
                    </div>
                    <div className="app__work-item app__flex">
                        <div className="app__work-img app__flex" >
                            <img src={images.spotify} alt='Name' />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href='https://laughing-mayer-10fece.netlify.app/' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href='https://github.com/danielsrw/spotify-clone-reactjs' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                    <AiFillGithub />
                                </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">Spotify Clone (React JS)</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quaerat?
                            </p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">Clone</p>
                            </div>
                        </div>
                    </div>
                    <div className="app__work-item app__flex">
                        <div className="app__work-img app__flex" >
                            <img src={images.nfred} alt='Name' />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href='' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href='https://github.com/danielsrw/Ntirenganya-Frederick' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                    <AiFillGithub />
                                </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">N. Fred (HTML & CSS)</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quaerat?
                            </p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">Web App</p>
                            </div>
                        </div>
                    </div>
                    <div className="app__work-item app__flex">
                        <div className="app__work-img app__flex" >
                            <img src={images.techme} alt='Name' />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href='https://flamboyant-dubinsky-f01af3.netlify.app/' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href='' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                    <AiFillGithub />
                                </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">TechMe (React JS)</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quaerat?
                            </p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">Web App</p>
                            </div>
                        </div>
                    </div>
                    <div className="app__work-item app__flex">
                        <div className="app__work-img app__flex" >
                            <img src={images.tesla} alt='Name' />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href='https://optimistic-spence-6e8388.netlify.app/' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href='https://github.com/danielsrw/tesla-website-clone-reactjs' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                    <AiFillGithub />
                                </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">Tesla Clone (React JS)</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quaerat?
                            </p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">Clone</p>
                            </div>
                        </div>
                    </div>
                    <div className="app__work-item app__flex">
                        <div className="app__work-img app__flex" >
                            <img src={images.kundubuzima} alt='Name' />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href='https://kundubuzima.rw/' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href='' target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                    <AiFillGithub />
                                </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">Kundubuzima (PHP)</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quaerat?
                            </p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">Web App</p>
                            </div>
                        </div>
                    </div>
                {/* ))} */}
            </motion.div>
        </>
    )
};

export default AppWrap(
    MotionWrap(Work, 'app__works'),
    'work',
    'app__primarybg',
);
