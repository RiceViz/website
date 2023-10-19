import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import CodeSpace from './Components/CodeSpace';
import HeroPage from './images/5184157.jpg';

const page = "Game Projects";

function App() {
  return (
    <div className="App">
      {/*Nav Bar + Hero Page*/}
      <div className="NavBar + HeroPage h-screen space-y-2" style={{
                backgroundImage: `url(${HeroPage})`,
                backgroundSize: "cover"
            }}>
        {/*Nav Bar*/}
        <Navbar></Navbar>
        <br></br>
        <span className="relative container mx-auto px-4 pr-24 pb-8 flex items-center justify-between">
          {/*Hero Page*/}
          <h1 className="text-left text-5xl font-serif text-black">
            Welcome To 
            <div className="h-4"></div>
            Tyran Rice Jr's Portfolio
          </h1>
          <img src="./IMG_5692.jpeg" alt='Headshot' width="213" height="320" className="border-black border-2 rounded"></img>
        </span>
        {/*Coding Animation - NOT YET IMPLEMENTED*/}
        {/*<CodeSpace></CodeSpace>*/}
      </div>
      <div className="border-black border-y-2 bg-gray-400 h-36">
        <h1 className="text-5xl text-middle font-serif text-black text-middle pt-2">
          Projects
        </h1>
        <span className="relative container mx-auto px-4 pt-8 text-l flex gap-x-40 items-center justify-center text-xl text-middle font-serif text-black">
          {/*Buttons To Change Page - NOT YET IMPLEMENTED*/}
          <div>
            Game Projects
          </div>
          <div>
            Software Dev Projects
          </div>
          <div>
            Modeling Portfolio
          </div>
        </span>
      </div>
    </div>
  );
}

export default App;
