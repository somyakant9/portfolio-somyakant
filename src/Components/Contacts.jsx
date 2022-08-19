import React from 'react';
import github from '../images/github.jpg';
import linkedin from '../images/linkedin.jpg';
import gmail from '../images/gmail.png';
import styles from './Contacts.module.css';

const Contacts = () => {

    return (
        <div id='contacts' className={styles.container}>
            <div className={styles.contactDiv}>
                <p>Contacts</p>
                <hr size='1' width='30%' color='grey' />
                <hr size='1' width='50%' color='grey' />
                <div className={styles.contentDiv}>
                    <a href="https://github.com/somyakant9" target="_blank" rel="noreferrer noopener">
                        <img className={styles.logo} src={github} alt="github-link" />
                    </a>
                    <a href="https://www.linkedin.com/in/somyakant-mohapatra/" target="_blank" rel="noreferrer noopener">
                        <img className={styles.logo} src={linkedin} alt="linkedIn-link" />
                    </a>
                    <div className={styles.emailDiv}>
                        <img className={styles.emailImg} src={gmail} alt="gmail-link" />
                        <p >msomya143@gmail.com</p>
                    </div>
                </div>
                <hr size='1' width='50%' color='grey' />
                <hr size='1' width='30%' color='grey' />
            </div>
        </div>
    )
}

export default Contacts;