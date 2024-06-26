import { useEffect, useState } from "react";
import styles from "./Welcome.module.css";
import { Link } from "react-scroll";
import homepage from "../images/giphy4.gif";
import menuIcon from "../images/app-menu-icon-sign-symbol-design-free-png.webp";

const Welcome = () => {

  const [isOpen , setIsOpen] = useState(false);
  const [viewportSize , setViewportSize] = useState({width:0, height:0});

  const handleDownload = (event) => {
    event.preventDefault(); // Prevent the default anchor click behavior

    // Open the document in a new tab
    const newTab = window.open(event.currentTarget.href, "_blank");
    if (newTab) {
      newTab.focus();
    }

    // Trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href =
      "https://drive.google.com/uc?export=download&id=1EstWmBqMIp1BXl6i4g82FHbkDQKbtVjZ";
    downloadLink.download = "";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    closeMenu();
  };

  const openMenu= () => {
     setIsOpen(!isOpen);
  };

  const closeMenu = ()=>{
    setIsOpen(false);
  }

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(()=>{

    if(viewportSize.width > 450){
      setIsOpen(false);
    };

  },[viewportSize])
  

  return (
    <>
      <div
        className={styles.container}
        style={{
          height: "100vh",
          width: "100rw",
          backgroundImage: `url(${homepage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
        }}
      >
        <div>
          <div className={`${isOpen ? styles.navbarSmall : styles.navbar}`}>
            <Link to="about" spy={true} smooth={true} className={styles.links} onClick={closeMenu}>
              About
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              className={styles.links}
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link to="skills" spy={true} smooth={true} className={styles.links} onClick={closeMenu}>
              Skills
            </Link>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              className={styles.links}
              onClick={closeMenu}
            >
              Contact
            </Link>
            <a
              className={styles.resume}
              href="https://drive.google.com/file/d/1EstWmBqMIp1BXl6i4g82FHbkDQKbtVjZ/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              onClick={handleDownload}
              
            >
              Resume
            </a>
            {/* https://drive.google.com/uc?export=download&id=1EstWmBqMIp1BXl6i4g82FHbkDQKbtVjZ */}
          </div>
          <div className={styles.menu} onClick={openMenu}>
            <img src={menuIcon} alt="menu" className={styles.icon} />
          </div>
        </div>
        <div className={styles.nameDiv}>
          <p className={styles.text1}>I am Somyakant Mohapatra</p>
          <hr size="8" width="90%" color="grey" />
          <p className={styles.role}>FULL STACK WEB DEVELOPER</p>
        </div>
      </div>
    </>
  );
};

export default Welcome;
