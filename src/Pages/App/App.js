
import classes from "./App.module.css";
import React, {Fragment} from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar"
import Opening from "../../Components/Opening/Opening"
import AboutMe from "../../Components/AboutMe/AboutMe"


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
      </div>



    
    </div>
    </>
  )
}

export default App;
