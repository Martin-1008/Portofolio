import React from "react";
import classes from "./Footer.module.css";
import githubIcon from "../../Assets/Icon/githubIcon.svg";
import instagramIcon from "../../Assets/Icon/instagramIcon.svg";
import linkedinIcon from "../../Assets/Icon/linkedinIcon.svg";

const Footer = ()=>{
    return(
        <>
            <div className={classes.footer}>
                <div className={classes.footerContainer}>
                    <div className={classes.name}>
                        Martin
                    </div>
                    <div className={classes.copyright}>
                        Martin &copy; 2022
                    </div>
                    <div className={classes.socialMedia}>
                        <a href="https://github.com/Martin-1008" target="_blank">
                            <img
                                src={githubIcon}
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/martin-martin-392a741b6/" target="_blank">
                            <img
                                src={linkedinIcon}
                            />
                        </a>
                        <a href="https://www.instagram.com/mrtinlo/?hl=id" target="_blank">
                            <img
                                src={instagramIcon}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;