import React from "react";
import ProjectBox from "../Components/ProjectBox";
import Map from "../images/henhacks project/map.png";

function SoftwareDevelopmentPage() {

    return(
        <div>
            <br className="h-16"></br>
            <ProjectBox 
                title="U-GO" 
                description="Local GPS Application"
                text="During Henhacks Spring 2023, U-GO was created—an innovation emerging from the one-day hackathon hosted by the University 
                of Delaware Computer Science Department and UD CPUs, a prominent student-led computer science club. The primary aim of U-GO is 
                to provide students with a more precise GPS experience while navigating the diverse halls and buildings on the university's campus.
                Unlike mainstream GPS applications such as Google Maps, U-GO offers specific routes that others may overlook. Additionally, our
                vision includes implementing a GPS system for the interior of every building, facilitating easy navigation to room numbers. The 
                project secured the coveted first place in its category, earning a prize pool of $1,600, triumphing over 30 other competing teams."
                PIC1={Map}
                teamSize="3"
                duration="1 Day"
                awards="1st Place ($1,600)">
            </ProjectBox>
            <br className="h-16"></br>
            <br className="h-16"></br>
            <br className="h-16"></br>
        </div>
    );
}

export default SoftwareDevelopmentPage;