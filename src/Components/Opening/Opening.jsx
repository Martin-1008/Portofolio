import React from "react";
import classes from "./Opening.module.css"
import profilePicture from "../../Assets/ProfilePicture/Profile.jpg"
import AboutMe from "../AboutMe/AboutMe"

const Opening = () =>{
     
    return(
        <>
            <div className={classes.opening}>
                <div className={classes.openingText}>
                    <div className={classes.openingIntroduction}>
                        <div className={classes.firstIntroduction}>
                            <span>
                                Hello, it's me
                            </span>
                        </div>
                        <div className={classes.secondIntroduction}>
                            <span className={classes.secondIntroductionFirstWord}>
                                Martin
                            </span>
                            <span className={classes.secondIntroductionSecondWord}>
                                .
                            </span>
                        </div>
                    </div>
                    <div className={classes.openingButton}>
                        <a>
                            Know more about me
                        </a>

                    </div>
                </div>
                <div className={classes.openingImage}>
                    <img
                        src={profilePicture}
                    />
                </div>
            </div>
        </>
    )
}

export default Opening;