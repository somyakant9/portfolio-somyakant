import React from 'react';
import profile from '../images/professional.jpg';
import styles from './About.module.css';
import front from '../images/frontend.png';
import back from '../images/backend.png';
import dsa from '../images/dsa.png';
import comm from '../images/commu.png';

const About = () => {

    return (
        <div id='about' className={styles.container}>
            <div className={styles.leftdiv}>
                <div className={styles.imagediv}>
                    <img className={styles.image} src={profile} alt="profile_picture" />
                </div>
            </div>
            <div className={styles.profile}>

                <div className={styles.aboutdiv}>
                    <p>About</p>
                </div>
                {/* <hr size="2" width="50%" color='gray' /> */}
                <div className={styles.descdiv}>
                    <p>
                        An honest, quick learner with intuitive problem-solving skills and detail-oriented aspiring Full Stack Developer.Always embrace challenges and excited to try something new. I am looking forward to work with a company as a Full-stack developer and would love to contribute in the growth of the company.
                    </p>
                </div>
                <br />
                <hr size="2" width="90%" color='gray' />
                <br/>
                <p className={styles.skillhead}>Skills</p>
               
                <br/>
                <div className={styles.skillDiv}>
                    <div className={styles.inner}>
                        <div className={styles.logo}>
                            <img src={front} alt="frontend logo"/>
                        </div>
                        <div className={styles.contentDiv}>
                        <p className={styles.skillName}>Frontend Developer</p>
                        <p>When you visit a website, the design elements you see were created by a front-end devloper.</p>
                        </div>
                    </div>
                    <div className={styles.inner}>
                        <div className={styles.logo}>
                        <img src={back} alt="frontend logo"/>
                        </div>
                        <div className={styles.contentDiv}>
                            <p className={styles.skillName}>Backend Developer</p>
                        <p>Who Build and maintain the mechanisms that process data and perform actions on websites.</p>
                        </div>
                    </div>
                    <div className={styles.inner}>
                        <div className={styles.logo}>
                        <img src={dsa} alt="frontend logo"/>
                        </div>
                        <div className={styles.contentDiv}>
                            <p className={styles.skillName}>DSA</p>
                        <p>Data Structure and Algorithm(DSA) is applied in all diciplines of software development.</p>
                        </div>
                    </div>
                    <div className={styles.inner}>
                        <div className={styles.logo}>
                        <img src={comm} alt="frontend logo"/>
                        </div>
                        <div className={styles.contentDiv}>
                            <p className={styles.skillName}>Communication Skills</p>
                        <p>Ability to use when giving and reciving different kinds of information.</p>
                        </div>
                    </div>
                </div>
                {/* <hr size="2" width="90%" color='gray' /> */}
            </div>
        </div>
    )
}

export default About;