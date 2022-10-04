import React from "react";
import profile from "../images/professional.jpg";
import styles from "./About.module.css";
import front from "../images/frontend.png";
import back from "../images/backend.png";
import dsa from "../images/dsa.png";
import comm from "../images/commu.png";

const About = () => {
  return (
    <>
      <div className={styles.aboutdiv}>
        <p>About</p>
        <hr size="2" width="80%" color='gray' />
      </div>
      <div id="about" className={styles.container}>
        <div className={styles.leftdiv}>
          <div className={styles.imagediv}>
            <img className={styles.image} src={profile} alt="profile_picture" />
          </div>
        </div>
        <div className={styles.profile}>
          {/* <hr size="2" width="50%" color='gray' /> */}
          <div className={styles.descdiv}>
            <p>
              An honest, quick learner with intuitive problem-solving skills and
              detail-oriented aspiring Full Stack Developer.Always embrace
              challenges and excited to try something new. I am looking forward
              to work with a company as a Full-stack developer and would love to
              contribute in the growth of the company.
            </p>
            <div className={styles.contact}>
            <div>
            <h5>Gmail : msomya143@gmail.com</h5>
            </div>
            <div className={styles.phone}>
            <h5>Mobile : +91-7377286791</h5>
            </div>
            </div>
           
          </div>
          <br />
          <br />
          {/* <hr size="2" width="90%" color='gray' /> */}
        </div>
      </div>
      <hr size="2" width="80%" color="gray" />
      <p className={styles.skillhead}>Skills</p>
      
         <br />
      <div className={styles.skillDiv}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <img src={front} alt="frontend logo" />
          </div>
          <div className={styles.contentDiv}>
            <p className={styles.skillName}>Frontend Developer</p>
            <p className={styles.points}>
              When you visit a website, the design elements you see were created
              by a front-end devloper.
            </p>
          </div>
          <div className={styles.spinner}>
              <h2>1500+</h2>
              <h3>Hrs</h3>
          </div>
        </div>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <img src={back} alt="frontend logo" />
          </div>
          <div className={styles.contentDiv}>
            <p className={styles.skillName}>Backend Developer</p>
            <p className={styles.points}>
              Who Build and maintain the mechanisms that process data and
              perform actions on websites.
            </p>
          </div>
          <div className={styles.spinner}>
              <h2>500+</h2>
              <h3>Hrs</h3>
          </div>
        </div>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <img src={dsa} alt="frontend logo" />
          </div>
          <div className={styles.contentDiv}>
            <p className={styles.skillName}>DSA</p>
            <p className={styles.points}>
              Data Structure and Algorithm(DSA) is applied in all diciplines of
              software development.
            </p>
          </div>
          <div className={styles.spinner}>
              <h2>500+</h2>
              <h3>ques</h3>
          </div>
        </div>
        <div className={styles.inner}>
          <div className={styles.logo1}>
            <img src={comm} alt="frontend logo" />
          </div>
          <div className={styles.contentDiv}>
            <p className={styles.skillName}>Communication Skills</p>
            <p className={styles.points}>
              Ability to use when giving and recieving different kinds of
              information.
            </p>
          </div>
          <div className={styles.spinner}>
              <h2>100+</h2>
              <h3>Hrs</h3>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default About;
