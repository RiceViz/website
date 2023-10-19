import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import CodeSpace from './Components/CodeSpace';
import HeroPage from './images/5184157.jpg';

function App() {
  return (
    <div className="App">
      <div className="NavBar + HeroPage h-screen space-y-2" style={{
                backgroundImage: `url(${HeroPage})`,
                backgroundSize: "cover"
            }}>
        <Navbar></Navbar>
        <br></br>
        <span className="relative container mx-auto px-4 pr-24 pb-8 flex items-center justify-between">
          <h1 className="text-left text-5xl font-serif text-black">
            Welcome To 
            <div className="h-4"></div>
            Tyran Rice Jr's Portfolio
          </h1>
          <img src="./IMG_5692.jpeg" alt='Headshot' width="213" height="320" className="border-black border-2 rounded"></img>
        </span>
        <CodeSpace></CodeSpace>
      </div>
    </div>
  );
}

export default App;
