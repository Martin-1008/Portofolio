
import classes from "./App.module.css";
import React, { useRef } from "react";
import { Link } from "react-router-dom"
import NavigationBar from "../../Components/Header/NavigationBar"
import PortofolioList from "../../Components/Portofolio/PortofolioList"
import Footer from "../../Components/Footer/Footer"
import profilePicture from "../../Assets/ProfilePicture/Profile.jpg"
import aboutMePicture from "../../Assets/AboutMePicture/AboutMe.jpg"

const App = ()=> {

  const aboutMeRef = useRef(null);
  const doScroll = () =>{
    aboutMeRef.current.scrollIntoView(); 
  }
  return(
    <>
    <div className={classes.container}>
      <div className={classes.navigation}>
        <NavigationBar/>
      </div>
      <div className={classes.navigationFill}>

      </div>
      
      <div className={classes.section}>
        <div className={classes.openingSection}>
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
                        <a onClick={doScroll}>
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
        </div>

        <div className={classes.aboutMeSection} ref={aboutMeRef}>
          <div className={classes.aboutMe}>
                <div className={classes.aboutMeImage}>
                    <img
                        src={aboutMePicture}
                    />
                </div>
                <div className={classes.aboutMeText}>
                    <div className={classes.aboutMeTitle}>
                        <span>
                            About Me
                        </span>
                        
                    </div>

                    <div className={classes.aboutMeContent}>
                        <span>
                            I am Undergraduate Student in Bina Nusantara University, Majoring Computer Science. I’m looking for internship opportunity in Software Development.
                        </span>
                    </div>
                </div>
            </div>
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
