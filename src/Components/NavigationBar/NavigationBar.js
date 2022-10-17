import {Link} from "react-router-dom";
import React,{Fragment} from "react";
import classes from "./NavigationBar.module.css"

const NavigationBar = () =>{


    return(
        <>
        <div className={classes.navigation}>
            <div>
                <span className={classes.navigationLogo}>
                    MARTIN
                </span>
            </div>
            <div className={classes.navigationLeft}>  
                <div className={classes.navigationButton}>
                    {/* <Link>HOME</Link> */}
                    <a>HOME</a>
                </div>
                <div className={classes.navigationButton}>
                    {/* <Link>RESUME</Link> */}
                    <a>RESUME</a>
                </div>
                <div className={classes.navigationButton}>
                    {/* <Link>CONTACT</Link> */}
                    <a>CONTACT</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavigationBar;
