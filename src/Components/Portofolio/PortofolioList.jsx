import React from "react";
import PortofolioData from "./PortofolioData"
import Portofolio from "./Portofolio";
import classes from "./PortofolioList.module.css"


const PortofolioList = ()=>{
    let listItem=[];

    for(let i=0;i<PortofolioData.length; i++){
        listItem.push(<Portofolio item={PortofolioData[i]} key={PortofolioData[i].id}/>)
    }

    return(
        <div className={classes.portofolioList}>
            {listItem}
        </div>
    )

}

export default PortofolioList;