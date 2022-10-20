import {Link} from "react-router-dom";
import React from "react";
import classes from "./NavigationBar.module.css"

const NavigationBar = () =>{


    return(
        <>
            <div className={classes.navigation}>
                <div className={classes.navigationContainer}>
                    <div className={classes.navigationLogo}>
                        <span>
                            {/* <Link>HOME</Link> */}
                            <a>MARTIN</a>
                        </span>
                    </div>
                    <div className={classes.navigationLeft}>  
                        <div className={classes.navigationButton}>
                            {/* <Link>HOME</Link> */}
                            <a>HOME</a>
                        </div>
                        <div className={classes.navigationButton}>
                            {/* <Link>RESUME</Link> */}
                            <a href="https://bit.ly/3CO0th6" target="_blank">RESUME</a>
                        </div>
                        <div className={classes.navigationButton}>
                            {/* <Link>CONTACT</Link> */}
                            <a href="https://api.whatsapp.com/send?phone=089693969044" target="_blank">CONTACT</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavigationBar;
