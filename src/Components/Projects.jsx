import React from 'react';
import shopper from '../images/shopperStop.png';
import github from '../images/github.jpg';
import foreign from '../images/foreign.jpg';
import farfetch from '../images/farfetch.png';
import ideakart from '../images/ideakart.png';
import styles from './Projects.module.css';
import homepage from '../images/giphy4.gif';

const Projects = () => {

    return (
        <div id='projects' className={styles.container} 
        style={{
            backgroundImage: `url(${homepage})`, backgroundRepeat: "no-repeat",
            backgroundSize:"cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center center"
        }}
        >
            <div className={styles.projectdiv}>
                <p>Projects</p>
            </div>
            <hr size='3' width="50%" color="white" />
            <div className={styles.contentdiv}>
                <hr size='3' width="80%" color="white" />
                <div className={styles.childdiv}>
                    <div className={styles.imagediv}>
                        <p>Farfetch.com  Clone</p>
                        <img className={styles.pimage} src={farfetch} alt="shopperstop_homepage" />
                    </div>
                    <hr size="1" width='40%' color="white" />
                    <p className={styles.descdiv}>Farfetch is a British-Portuguese online luxury fashion retail platform that sells products from all around the world.</p>
                    <hr size="1" width='90%' color="white" />
                    <p className={styles.techstack}>TECH STACK : HTML | CSS | REACTJS</p>
                    <hr size="1" width='90%' color="white" />
                    <div className={styles.bottompart} >
                        <div className={styles.dLink}>
                            <a href="https://gaudy-pies-9937.vercel.app/" target="_blank" rel="noreferrer noopener" >
                                <img className={styles.dLinkLogo} src={foreign} alt="website-logo" />
                            </a>
                        </div>
                        <div className={styles.gLink}>
                            <a href="https://github.com/somyakant9/gaudy-pies-9937" target="_blank" rel="noreferrer noopener">
                                <img className={styles.gLinkLogo} src={github} alt="github-logo" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.childdiv}>
                    <div className={styles.imagediv}>
                        <p>IdeaKart.com  Clone</p>
                        <img className={styles.pimage} src={ideakart} alt="shopperstop_homepage" />
                    </div>
                    <hr size="1" width='40%' color="white" />
                    <p className={styles.descdiv}>Ideakart is a site that gives u an idea and a platform which offer a huge collection of books in diverse categories.</p>
                    <hr size="1" width='90%' color="white" />
                    <p className={styles.techstack}>TECH STACK : HTML | CSS | JAVASCRIPT</p>
                    <hr size="1" width='90%' color="white" />
                    <div className={styles.bottompart} >
                        <div className={styles.dLink}>
                            <a href="https://spectacular-sundae-7732ae.netlify.app/" target="_blank" rel="noreferrer noopener" >
                                <img className={styles.dLinkLogo} src={foreign} alt="website-logo" />
                            </a>

                        </div>
                        <div className={styles.gLink}>
                            <a href="https://github.com/sakshi611/IdeaKart-Clone" target="_blank" rel="noreferrer noopener" >
                                <img className={styles.gLinkLogo} src={github} alt="github-logo" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.childdiv}>
                    <div className={styles.imagediv}>
                        <p>Shopperstop.com Clone</p>
                        <img className={styles.pimage} src={shopper} alt="shopperstop_homepage" />
                    </div>
                    <hr size="1" width='40%' color="white" />
                    <p className={styles.descdiv}>Shoppers Stop is an Indian department store chain. Showed the basic flow of the website. It was a collaborative project.</p>
                    <hr size="1" width='90%' color="white" />
                    <p className={styles.techstack}>TECH STACK : HTML | CSS | JAVASCRIPT</p>
                    <hr size="1" width='90%' color="white" />
                    <div className={styles.bottompart} >
                        <div className={styles.dLink}>
                            <a href="https://adityasinghskit.github.io/shoppersStop-clone/" target="_blank" rel="noreferrer noopener" >
                                <img className={styles.dLinkLogo} src={foreign} alt="website-logo" />
                            </a>
                        </div>
                        <div className={styles.gLink}>
                            <a href="https://github.com/adityasinghskit/shoppersStop-clone" target="_blank" rel="noreferrer noopener">
                                <img className={styles.gLinkLogo} src={github} alt="github-logo" />
                            </a>
                        </div>
                    </div>
                </div>
                <hr size='3' width="80%" color="white" />
            </div>
            <hr size='3' width="50%" color="white" />
        </div>

    )
}

export default Projects;