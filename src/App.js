import './App.css';
import React from "react";
import NavBar from './Elements/Navigationbar';
import ProfilePicture from "./Elements/ProfilePicture";
import Footer from "./Elements/Footer";
import SectionOne from "./Elements/SectionOne";
import SectionTwo from "./Elements/SectionTwo";
import SectionThree from "./Elements/SectionThree";
function App() {
  return (
    <div className="App">

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
  );
}

export default App;
