import React from 'react';
import github from '../images/github.jpg';
import linkedin from '../images/linkedin.jpg';
import gmail from '../images/gmail.png';
// import phone from '../images/phone.jpg';
import styles from './Contacts.module.css';
// import flower from '../images/flower.jpg';
const Contacts = () => {

    return (
        <div id='contacts' className={styles.container}>
            <div className={styles.contactDiv}>
                <p>Contact</p>
                <hr size={2} color={"black"} width={"30%"}/>
                <div className={styles.contentDiv}>
                    <a href="https://github.com/somyakant9" target="_blank" rel="noreferrer noopener">
                        <img className={styles.logo} src={github} alt="github-link" />
                    </a>
                    <a href="https://www.linkedin.com/in/somyakant-mohapatra/" target="_blank" rel="noreferrer noopener">
                        <img className={styles.logo} src={linkedin} alt="linkedIn-link" />
                    </a>
                    <a href="mailto:msomya143@gmail.com" target="_blank" rel="noreferrer noopener">
                        <img className={styles.logo1} src={gmail} alt="gmail-link" />
                    </a>
                </div>
                <hr size={1} color={"black"} width={"30%"}/>
            </div>
        </div>
    )
}

export default Contacts;