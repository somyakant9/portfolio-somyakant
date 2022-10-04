import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import styles from "./Calendar.module.css";

const Calender =()=>{
    return (
        <div className={styles.mainDiv}>
            <h1 className={styles.heading}>GitHub Calendar & Stats</h1>
            <hr width={"50%"} color={"white"} size={3} />
            <br />
            <br />
         <GitHubCalendar 
             style={{
                margin:"auto",
                color:"rgb(60, 118, 60)"
             }}
               blockSize={16}
               fontSize={14}
               username="somyakant9" 
               year={new Date().getFullYear()}
               
            />
            <div className={styles.statsDiv}>
            <img align="center" src="https://github-readme-stats.vercel.app/api?username=somyakant9&show_icons=true&locale=en&theme=onedark" alt="somyakant9" />
            <img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=somyakant9&theme=onedark" alt="somyakant9" />
            </div>
            
        </div>
    )

}

export default Calender;
