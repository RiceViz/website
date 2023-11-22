import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
//import CodeSpace from './Components/CodeSpace';
import HeroPage from './images/5184157.jpg';
import GamePage from './Pages/GamePage';
import ModelingPage from './Pages/ModelingPage';
import SoftwareDevPage from './Pages/SoftwareDevelopmentPage';

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
          <h1 className="text-left text-5xl font-serif text-black border-y-4 border-black border-double">
            Welcome To 
            <div className="h-4"></div>
            Tyran Rice Jr's Portfolio
          </h1>
          <img src={require('./images/IMG_5692.jpeg')} alt='Headshot' width="213" height="320" className="border-black border-2 rounded"></img>
        </span>
        {/*Coding Animation - NOT YET IMPLEMENTED*/}
        {/*<CodeSpace></CodeSpace>*/}
      </div>
      <div className="border-black border-y-2 bg-slate-400 h-36">
        <h1 id="projects" className="text-5xl text-middle font-serif text-black text-middle pt-2">
          Projects
        </h1>
        <span className="relative container mx-auto px-4 pt-6 text-l flex gap-x-24 items-center justify-center text-xl text-middle font-serif text-black">
          {/*Buttons To Change Page*/}
          <div>
            <button className="border-2 border-double border-black rounded-lg px-1 hover:rounded-md hover:bg-white" 
                    type="button" 
                    onClick={() => setPage("Game Projects")}>
               Game Projects 
            </button>
          </div>
          <div>
          <button className="border-2 border-double border-black rounded-lg px-1 hover:rounded-md hover:bg-white" 
                    type="button" 
                    onClick={() => setPage("Software Dev Projects")}>
               Software Dev Projects 
            </button>
          </div>
          <div>
          <button className="border-2 border-double border-black rounded-lg px-1 hover:rounded-md hover:bg-white m-4" 
                    type="button" 
                    onClick={() => setPage("Modeling Portfolio")}>
               Modeling Portfolio 
            </button>
          </div>
        </span>
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
      <div className="border-black border-y-2 bg-slate-400 h-1/2">
        <h1 id="about" className="text-5xl text-middle font-serif text-black text-middle pt-2">
          About Me
        </h1>
        <div className="relative container flex items-center justify-center pt-6 pb-2">
          <div>

          </div>
          <div className="mx-auto text-middle text-2xl font-serif text-black">
            My name is Tyran Rice Jr, a junior at The University Of Delaware studying computer science.
            I am currently a Resident Assistant at UD guiding first-year students through there first two semesters.
            I am also highly interested in game development and programming, which is why my friend and I founded a club
            at UD called Game Design and Development Club (GDDC). At the name suggests, it's all about
            creating video games. I am also part of the ESports Program at UD, competitively playing Overwatch 2.
            In the future I want to create video games as my main job or as a hobby!
          </div>
          <div>

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
