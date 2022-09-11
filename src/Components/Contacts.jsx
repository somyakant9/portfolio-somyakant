import React from 'react';
import github from '../images/github.jpg';
import linkedin from '../images/linkedin.jpg';
import gmail from '../images/gmail.png';
import phone from '../images/phone.jpg';
import styles from './Contacts.module.css';
import flower from '../images/flower.jpg';
const Contacts = () => {

    return (
        <div id='contacts' className={styles.container} style={{backgroundImage:`url(${flower})`,backgroundSize:"cover"}}>
            <div className={styles.contactDiv}>
                <p>Contacts</p>
                <hr size='1' width='30%' color='black' />
                <hr size='1' width='50%' color='black' />
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
                    <div className={styles.emailDiv}>
                        <img className={styles.emailImg} src={phone} alt="phone" />
                        <p >+91 7377286791</p>
                    </div>
                </div>
                <hr size='1' width='50%' color='black' />
                <hr size='1' width='30%' color='black' />
            </div>
        </div>
    )
}

export default Contacts;