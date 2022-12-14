import React, {useState} from "react";
import classes from "./Portofolio.module.css";

const Portofolio = (props)=>{

    const{item} = props;
    const[isVisible, setIsVisible] = useState(false);

    const descriptionHandler =(event)=>{
        setIsVisible(current=> !current);
    }
    return (
        <>
            <div className={classes.portofolio}>
                    <div className={item.title === "TRAVELIST"? classes.travelist:classes.laforant} onClick={descriptionHandler}>
                        {item.title}
                    </div>
                    <div className={isVisible?classes.containerContent:classes.invalidContainerContent}>
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