import React from 'react';
import github from '../images/github.jpg';
import css from '../images/css.jpg';
import chakra from '../images/chakara.jpg';
import html from '../images/html.jpg';
import javascript from '../images/javascript.png';
import react from '../images/react.png';
import redux from '../images/redux.png';
import styles from './Skills.module.css';
import crystal from '../images/crystal.jpg';
const Skills = () => {

    return (
        <div id='skills' className={styles.container} style={{backgroundImage:`url(${crystal})`}}>
            <div className={styles.skilldiv}>
                <p>Skills</p>
                <hr size='3' width="50%" color="white" />
                <hr size='3' width="80%" color="white" />
            </div>

            <div className={styles.contentdiv}>
                <div className={styles.skillOuterDiv}>
                    <img className={styles.imageDiv} src={html} alt="html-logo" />
                    <p className={styles.textDiv}>HTML 5</p>
                </div>
                <div className={styles.skillOuterDiv}>
                    <img className={styles.imageDiv} src={javascript} alt="js-logo" />
                    <p className={styles.textdiv1}>JAVASCRIPT</p>
                </div>
                <div className={styles.skillOuterDiv}>
                    <img className={styles.imageDiv} src={css} alt="css-logo" />
                    <p className={styles.textDiv}>CSS 3</p>
                </div>
                <div className={styles.skillOuterDiv}>
                    <img className={styles.imageDiv} src={react} alt="react-logo" />
                    <p className={styles.textDiv}>REACT JS</p>
                </div>
                <div className={styles.skillOuterDiv}>
                    <img className={styles.imageDiv} src={github} alt="github-logo" />
                    <p className={styles.textDiv}>GITHUB</p>
                </div>
                <div className={styles.skillOuterDiv}>
                    <img className={styles.imageDiv} src={redux} alt="redux-logo" />
                    <p className={styles.textDiv}>REDUX</p>
                </div>
                <div className={styles.skillOuterDiv}>
                    <img className={styles.imageDiv} src={chakra} alt="chakra-logo" />
                    <p className={styles.textDiv}>CHAKRA-UI</p>
                </div>
                <hr size='3' width="95%" color="white" />
            </div>

            <hr size='3' width="50%" color="white" />
        </div>
    )
}

export default Skills;