import React from "react";
import classes from "./AboutMe.module.css"
import aboutMePicture from "../../Assets/AboutMePicture/AboutMe.jpg"

const AboutMe = () =>{

    return(
        <>
            <div className={classes.aboutMe}>
                <div className={classes.aboutMeImage}>
                    <img
                        src={aboutMePicture}
                    />
                </div>
                <div className={classes.aboutMeText}>
                    <div className={classes.aboutMeTitle}>
                        <span>
                            About Me
                        </span>
                        
                    </div>

                    <div className={classes.aboutMeContent}>
                        <span>
                            I am Undergraduate Student in Bina Nusantara University, Majoring Computer Science. I’m looking for internship opportunity in Software Development.
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;