import React from 'react';
import styles from './Welcome.module.css';
import { Link } from 'react-scroll';
import homepage from '../images/giphy4.gif';
const Welcome = () => {

    return (
        <>
            <div className={styles.container} style={{
                height: "100vh", width: "100rw",
                backgroundImage: `url(${homepage})`
                , backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPosition: "center center"
            }}>

                <div className={styles.navbar}>
                    <Link to='about' spy={true} smooth={true}><div className={styles.link}>About</div></Link>
                    <Link to='projects' spy={true} smooth={true}><div className={styles.link}>Projects</div></Link>
                    <Link to='skills' spy={true} smooth={true}><div className={styles.link}>Skills</div></Link>
                    <Link to='contacts' spy={true} smooth={true}><div className={styles.link}>Contact</div></Link>
                    <a className={styles.resume} href="https://drive.google.com/file/d/1EstWmBqMIp1BXl6i4g82FHbkDQKbtVjZ/view?usp=sharing" target="_blank" rel="noreferrer noopener"><div className={styles.link}>Resume</div></a>
                </div>
                <div className={styles.nameDiv}>
                    <p className={styles.text1}>I am Somyakant Mohapatra</p>
                    <hr size="8" width="90%" color="grey" />
                    <p className={styles.role}>FULL STACK WEB DEVELOPER</p>
                </div>
            </div>
        </>
    )
}

export default Welcome;

