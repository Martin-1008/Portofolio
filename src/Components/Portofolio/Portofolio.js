import React from "react";
import classes from "./Portofolio.module.css";
import travelist1 from "../../Assets/Travelist/travelist1.png"

const Portofolio = ()=>{
    return (
        <>
            <div className={classes.portofolio}>
                <div className={classes.portofolioContainer}>
                    <div className={classes.containerTitle}>
                        TRAVELIST
                    </div>
                    <div className={classes.containerContent}>
                        <div className={classes.portofolioDescription}>
                            <span>
                                Description
                            </span>
                        </div>
                        <div className={classes.portofolioContent}>
                            <p>
                            I am Undergraduate Student in Bina Nusantara University, Majoring Computer Science. I’m looking for internship opportunity in Software Development.
                            </p>
                        </div>
                        <div className={classes.portofolioImage}>
                            <div className={classes.portofolioFirstImage}>
                                <img
                                    src={travelist1}
                                />
                                <img
                                    src={travelist1}
                                />
                            </div>
                            <div className={classes.portofolioSecondImage}> 
                                <img
                                    src={travelist1}
                                />
                                <img
                                    src={travelist1}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portofolio;