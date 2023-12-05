import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
//import CodeSpace from './Components/CodeSpace';
import HeroPage from './images/5184157.jpg';
import GamePage from './Pages/GamePage';
import ModelingPage from './Pages/ModelingPage';
import SoftwareDevPage from './Pages/SoftwareDevelopmentPage';
import Carousel from './Components/Carousel';

function App() {

  const [page, setPage] = useState("Game Projects"); 

  return (
    <div className="App">
      {/*Nav Bar + Hero Page*/}
      <div id="home" className="NavBar + HeroPage h-screen space-y-2" style={{
                backgroundImage: `url(${HeroPage})`,
                backgroundSize: "cover"
            }}>
        {/*Nav Bar*/}
        <Navbar></Navbar>
        <br></br>
        <span className="relative container mx-auto px-4 pr-24 pb-8 flex items-center justify-between">
          {/*Hero Page*/}
          <h1 className="text-left text-xl md:text-3xl lg:text-5xl font-serif text-black border-y-4 border-black border-double">
            Welcome To 
            <div className="h-4"></div>
            Tyran Rice Jr's Portfolio
          </h1>
          <div className="hidden lg:block">
            <img src={require('./images/IMG_5692.jpeg')} alt='Headshot' width="213" height="320" className="border-black border-2 rounded"></img>
          </div>
          <div className="hidden md:max-lg:block">
            <img src={require('./images/IMG_5692.jpeg')} alt='Headshot' width="183" height="290" className="border-black border-2 rounded"></img>
          </div>
          <div className="hidden max-md:block">
            <img src={require('./images/IMG_5692.jpeg')} alt='Headshot' width="153" height="260" className="border-black border-2 rounded"></img>
          </div>
        </span>
        {/*Coding Animation - NOT YET IMPLEMENTED*/}
        {/*<CodeSpace></CodeSpace>*/}
      </div>
      <div className="border-black border-y-2 bg-slate-400 h-40">
        <h1 id="projects" className="text-5xl  font-serif text-black text-middle pt-2 underline">
          Projects
        </h1>
        <div className="relative container px-4 pt-6 flex items-center justify-center text-xl text-middle font-serif text-black space-x-4 lg:space-x-24">
          {/*Buttons To Change Page*/}
          <div>
            <button className="border-2 border-double border-black rounded-lg px-1 hover:rounded-md hover:bg-white md:m-4 m-2" 
                    type="button" 
                    onClick={() => setPage("Game Projects")}>
                Game Projects 
            </button>
          </div>
          <div>
          <button className="border-2 border-double border-black rounded-lg px-1 hover:rounded-md hover:bg-white md:m-4 m-2" 
                    type="button" 
                    onClick={() => setPage("Software Dev Projects")}>
                Software Dev Projects 
            </button>
          </div>
          <div>
          <button className="border-2 border-double border-black rounded-lg px-1 hover:rounded-md hover:bg-white md:m-4 m-2" 
                    type="button" 
                    onClick={() => setPage("Modeling Portfolio")}>
                Modeling Portfolio 
            </button>
          </div>
        </div>
      </div>
      <br></br>
      {/*Page Types*/}
      {page === "Game Projects" ? (
        <div>
          <GamePage></GamePage>
        </div>
      ) : null}
      {page === "Software Dev Projects" ? (
        <div>
          <SoftwareDevPage></SoftwareDevPage>
        </div>
      ) : null}
      {page === "Modeling Portfolio" ? (
        <div>
          <ModelingPage></ModelingPage>
        </div>
      ) : null}
      <br></br>
      {/*About Me*/}
      <div id="about" className="border-black border-y-2 bg-slate-400 h-1/3 w-full">
        <span className="grid grid-cols-5">
          <div className="col-span-2">
            <Carousel></Carousel>
          </div>
          <div className="text-xl md:text-3xl lg:text-5xl font-serif text-black text-right pt-12 col-span-3 mx-4 md:mx-16 pb-4">
            About Me
            <div className="text-right text-sm md:text-xl lg:text-2xl font-serif text-black pt-6">
              My name is Tyran Rice Jr, and I am a junior studying computer science at The University of Delaware. Apart from my studies, 
              I also work as a Resident Assistant at UD, where I guide first-year students through their first two semesters. My passion lies 
              in game development and programming, which led me to co-found the Game Design and Development Club (GDDC) at UD. As the name suggests, 
              the club focuses on creating video games. Additionally, I am actively involved in the ESports Program at UD, where I compete in 
              Overwatch 2. Looking ahead, I aspire to pursue a career in video game development, either as my primary job or as a fulfilling hobby.
            </div>
          </div>
        </span>
      </div>
      <br></br>
      {/*Contact*/}
      <h1 id="contact" className="flex text-xl md:text-3xl lg:text-5xl font-serif text-black text-middle underline pl-12 pt-12 md:pl-48 md:pt-24">
          Contact Information
      </h1>
      <div className="relative container flex mx-auto items-center justify-center pt-2 md:pb-6">
        <div className="text-black text-middle font-serif no-underline text-lg lg:text-xl w-3/5">
          If you would like to see my resume or get in touch with me, please feel free to send me an email. 
          Additionally, you can also check out my social media profiles and explore external links to view my projects.
        </div>
        <div className="w-2/5 columns-1 items-center text-right text-lg md:text-xl font-serif">
          <div className="flex justify-end pt-4">
            Email
            <a href="mailto:tyranricejr@gmail.com">
              <img src={require( './images/icons/4202011_email_gmail_mail_logo_social_icon.png')} alt='Email' width="35" height="35" className="pl-2"></img>
            </a>
          </div>
          <div className="flex justify-end pt-4">
            LinkedIn
            <a href="https://www.linkedin.com/in/tyran-ricejr-0bb9461a7/">
              <img src={require( './images/icons/download.png')} alt='LinkedIn' width="35" height="35" className="pl-2"></img>
            </a>
          </div>
          <div className="flex justify-end pt-4">
            GitHub
            <a href="https://github.com/RiceViz">
              <img src={require( './images/icons/download (1).png')} alt='GitHub' width="35" height="35" className="pl-2"></img>
            </a>
          </div>
          <div className="flex justify-end pt-4">
            Itch.io
            <a href="https://riceviz.itch.io">
              <img src={require( './images/icons/download (2).png')} alt='Itch.io' width="35" height="35" className="pl-2"></img>
            </a>
          </div>
          <div className="flex justify-end pt-4">
            Instagram
            <a href="https://www.instagram.com/kingricejr/">
              <img src={require( './images/icons/downloadInstagram.jpg')} alt=' Email' width="35" height="35" className="pl-2"></img>
            </a>
          </div>
        </div>


      </div>
      <br></br>
      {/*Footer*/}
      <div className="border-black border-y-2 bg-gray-300 h-16">
        <Navbar></Navbar>        
      </div>
    </div>
  );
}

export default App;
