import React from "react";
import classes from "./Portofolio.module.css";

const Portofolio = (props)=>{

    const{item} = props;
    return (
        <>
            <div className={classes.portofolio}>
                    <div className={item.title === "TRAVELIST"? classes.travelist:classes.laforant} >
                        {item.title}
                    </div>
                    <div className={classes.containerContent}>
                        <div className={classes.portofolioDescription}>
                            <span>
                                Description
                            </span>
                        </div>
                        <div className={classes.portofolioContent}>
                            <p>
                            {item.description}
                            </p>
                        </div>
                        <div className={classes.portofolioImage}>
                            <div className={classes.portofolioImageStructure}>
                                <img
                                    src={item.image1}
                                />
                                <img
                                    src={item.image2}
                                />
                            </div>
                            <div className={classes.portofolioImageStructure}> 
                                <img
                                    src={item.image3}
                                />
                                <img
                                    src={item.image4}
                                />
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Portofolio;