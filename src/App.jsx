import React, { useState } from 'react'
import './App.css'
import LoadingScreen from "./Elements/LoadingScreen.jsx";
import NavBar from "./Elements/Navigationbar.jsx";
import ProfilePicture from "./Elements/ProfilePicture.jsx";
import SectionThree from "./Elements/SectionThree.jsx";
import SectionOne from "./Elements/SectionOne.jsx";
import SectionTwo from "./Elements/SectionTwo.jsx";
import Footer from "./Elements/Footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"/>
          <div className="App">
              <LoadingScreen/>
              <header className={'websiteHeader'}>
                  <NavBar/>
              </header>
              <body className={'websiteBody'}>
              <ProfilePicture/>
              <SectionThree/>
              <SectionOne/>
              <SectionTwo/>
              </body>
              <Footer/>
          </div>
      </>
  )
}

export default App
