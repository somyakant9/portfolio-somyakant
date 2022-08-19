import React from 'react';
import styles from './Welcome.module.css';
import { Link } from 'react-scroll';
import homepage from '../images/blur.jpg';
const Welcome = () => {

    return (
        <>
            <div style={{
                height: "100vh", width: "100rw",
                backgroundImage: `url(${homepage})`
                , backgroundSize: "cover",
            }}>

                <div className={styles.navbar}>
                    <Link to='about' spy={true} smooth={true}><div className={styles.link}>About</div></Link>
                    <Link to='projects' spy={true} smooth={true}><div className={styles.link}>Projects</div></Link>
                    <Link to='skills' spy={true} smooth={true}><div className={styles.link}>Skills</div></Link>
                    <Link to='contacts' spy={true} smooth={true}><div className={styles.link}>Contact</div></Link>
                    <a className={styles.resume} href="https://drive.google.com/file/d/1ArE3omG-pFBczFy_uPuEPeGEXs-YTfIk/view?usp=sharing" target="_blank" rel="noreferrer noopener"><div>Resume</div></a>
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

