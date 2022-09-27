import React from 'react';
import github from '../images/github.jpg';
import css from '../images/css.jpg';
import chakra from '../images/chakara.jpg';
import html from '../images/html.jpg';
import javascript from '../images/javascript.png';
import react from '../images/react.png';
import redux from '../images/redux.png';
import styles from './Skills.module.css';
// import giphy from '../images/giphy4.gif';
import node from '../images/node.jpg';
import mongo from '../images/mongo.png';
import express from '../images/express.png';
const Skills = () => {

    return (
        <div id='skills' className={styles.container}>
            <div className={styles.skilldiv}>
                <p>Skills</p>
                <hr size='3' width="50%" color="black" />
                <hr size='3' width="80%" color="black" />
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
                <div className={styles.skillOuterDiv}>
                    <img className={styles.imageDiv} src={node} alt="chakra-logo" />
                    <p className={styles.textDiv}>NODE JS</p>
                </div>
                <div className={styles.skillOuterDiv}>
                    <img className={styles.imageDiv} src={express} alt="chakra-logo" />
                    <p className={styles.textDiv}>EXPRESS</p>
                </div>
                <div className={styles.skillOuterDiv}>
                    <img className={styles.imageDiv} src={mongo} alt="chakra-logo" />
                    <p className={styles.textDiv}>MONGO DB</p>
                </div>
                <hr size='3' width="95%" color="black" />
            </div>

            <hr size='3' width="50%" color="black" />
        </div>
    )
}

export default Skills;