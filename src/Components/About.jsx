import React from 'react';
import profile from '../images/professional.jpg';
import styles from './About.module.css';
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
                <hr size="2" width="50%" color='gray' />
                <div className={styles.descdiv}>
                    <p>
                        An honest, quick learner with intuitive problem-solving skills and detail-oriented aspiring Full Stack Developer.Always embrace challenges and excited to try something new. I am looking forward to work with a company as a Full-stack developer and would love to contribute in the growth of the company.
                    </p>
                </div>
                <br />
                <hr size="2" width="90%" color='gray' />

            </div>
        </div>
    )
}

export default About;