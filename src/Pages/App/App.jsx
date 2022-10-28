
import classes from "./App.module.css";
import React from "react";
import NavigationBar from "../../Components/Header/NavigationBar"
import Opening from "../../Components/Opening/Opening"
import AboutMe from "../../Components/AboutMe/AboutMe"
import PortofolioList from "../../Components/Portofolio/PortofolioList"
import Footer from "../../Components/Footer/Footer"

const App = ()=> {

  return(
    <>
    <div className={classes.container}>
      <div className={classes.navigation}>
        <NavigationBar/>
      </div>
      <div className={classes.navigationFill}>

      </div>
      
      <div className={classes.section}>
        <div className={classes.opening}>
          <Opening/>
        </div>

        <div className={classes.aboutMe}>
          <AboutMe/>
        </div>

        <div className={classes.portofolio}>
          <div className={classes.portofolioTitle}>
            <span>
              Portofolio
            </span>
          </div>
          <PortofolioList/>
        </div>
      </div>
      <div className={classes.footer}>
          <Footer/>
      </div>



    
    </div>
    </>
  )
}

export default App;
