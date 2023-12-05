import React from "react";
import ProjectBox from "../Components/ProjectBox";
import TaroMama from "../images/taromama project/TaroMama.png";


function GameDesignPage() {

    return(
        <div>
            <br className="h-16"></br>
            <ProjectBox 
                title="Taro Mama" 
                description="Short Educational Web Game"
                text="Taro Mama is a single-player game that was created during a study abroad trip hosted by the University of Delaware. 
                The main objective of the game is to teach elementary school students, specifically 3rd to 5th graders, the fundamentals of 
                algorithms, sequencing, and scaling. The game features unlimited time and rewards players with points for completing algorithms 
                correctly in the fewest tries. It incorporates several food-themed levels, each with a series of tasks. If a user misplaces a step, 
                the game provides helpful hints to encourage students to keep attempting to solve the game. Additionally, players have the option 
                to view the original recipe for the dish at any time. Taro Mama was successfully tested by students at Queen Kaahumanu School in 
                Hawaii and Thomas Jefferson, with positive responses."
                PIC1={TaroMama}
                teamSize="5"
                duration="2.5 Weeks"
                awards="N/A"
                linktoProject="https://github.com/RiceViz/TaroMama">
            </ProjectBox>
            <br className="h-16"></br>
            <br className="h-16"></br>
        </div>
    );
}

export default GameDesignPage;
