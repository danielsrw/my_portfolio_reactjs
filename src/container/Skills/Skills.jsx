import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';

        client.fetch(query).then((data) => {
            setExperiences(data);
        });

        client.fetch(skillsQuery).then((data) => {
            setSkills(data);
        });
    }, []);

    return (
        <>
            <h2 className="head-text">Skills & Experiences</h2>

            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {/* {skills.map((skill) => ( */}
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            // key={skill.name}
                        >
                            <div
                                className="app__flex"
                                // style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={ images.html } alt='' />
                            </div>
                            <p className="p-text">HTML</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            // key={skill.name}
                        >
                            <div
                                className="app__flex"
                                // style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={ images.css } alt='' />
                            </div>
                            <p className="p-text">CSS</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            // key={skill.name}
                        >
                            <div
                                className="app__flex"
                                // style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={ images.javascript } alt='' />
                            </div>
                            <p className="p-text">Javascript</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            // key={skill.name}
                        >
                            <div
                                className="app__flex"
                                // style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={ images.react } alt='' />
                            </div>
                            <p className="p-text">React JS</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            // key={skill.name}
                        >
                            <div
                                className="app__flex"
                                // style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={ images.laravel } alt='' />
                            </div>
                            <p className="p-text">Laravel</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            // key={skill.name}
                        >
                            <div
                                className="app__flex"
                                // style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={ images.python } alt='' />
                            </div>
                            <p className="p-text">Python</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            // key={skill.name}
                        >
                            <div
                                className="app__flex"
                                // style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={ images.sass } alt='' />
                            </div>
                            <p className="p-text">SCSS</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            // key={skill.name}
                        >
                            <div
                                className="app__flex"
                                // style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={ images.git } alt='' />
                            </div>
                            <p className="p-text">GitHub</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            // key={skill.name}
                        >
                            <div
                                className="app__flex"
                                // style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={ images.redux } alt='' />
                            </div>
                            <p className="p-text">REDUX</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            // key={skill.name}
                        >
                            <div
                                className="app__flex"
                                // style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={ images.mu5 } alt='' />
                            </div>
                            <p className="p-text">Material UI</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            // key={skill.name}
                        >
                            <div
                                className="app__flex"
                                // style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={ images.flutter } alt='' />
                            </div>
                            <p className="p-text">Flutter</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            // key={skill.name}
                        >
                            <div
                                className="app__flex"
                                // style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={ images.vue } alt='' />
                            </div>
                            <p className="p-text">Vue JS</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            // key={skill.name}
                        >
                            <div
                                className="app__flex"
                                // style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={ images.figma } alt='' />
                            </div>
                            <p className="p-text">Figma</p>
                        </motion.div>
                    {/* ))} */}
                </motion.div>

                <div className="app__skills-exp">
                    {/* {experiences.map((experience) => ( */}
                        <motion.div
                          className="app__skills-exp-item"
                        //   key={experience.year}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">2020 - Present</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {/* {experience.works.map((work) => ( */}
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            // data-for={work.name}
                                            // key={work.name}
                                        >
                                            <h4 className="bold-text">Fullstack Web Developer</h4>
                                            <p className="p-text">Nexcode</p>
                                        </motion.div>
                                        <ReactTooltip
                                            // id={work.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className="skills-tooltip"
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus quasi quaerat voluptatem fugit necessitatibus fuga est inventore, quibusdam excepturi!
                                        </ReactTooltip>
                                    </>
                                {/* ))} */}
                            </motion.div>
                        </motion.div>
                        <motion.div
                          className="app__skills-exp-item"
                        //   key={experience.year}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">2021 - 2022</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {/* {experience.works.map((work) => ( */}
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            // data-for={work.name}
                                            // key={work.name}
                                        >
                                            <h4 className="bold-text">Fullstack Web Developer</h4>
                                            <p className="p-text">SANTECH Ltd</p>
                                        </motion.div>
                                        <ReactTooltip
                                            // id={work.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className="skills-tooltip"
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus quasi quaerat voluptatem fugit necessitatibus fuga est inventore, quibusdam excepturi!
                                        </ReactTooltip>
                                    </>
                                {/* ))} */}
                            </motion.div>
                        </motion.div>
                    {/* ))} */}
                </div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills',
    'app__whitebg',
);
  
