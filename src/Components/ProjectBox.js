import React from "react";

function ProjectBox({
    title,
    description,
    text,
    PIC1,
    teamSize,
    duration,
    awards,
    linktoProject
}) {
    return (
        <div className="relative container w-2/3 h-screen bg-neutral-400 mx-auto flex items-center justify-center border-2 border-black rounded top-0.5 left-0.5 shadow-2xl">
            <span className="absolute text-center font-sans text-6xl top-8 left-16 w-2/5 border-y-4 border-black border-double">
                {title}
                <p className="text-2xl pt-2">
                    {description}
                </p>
            </span>
            <p className="absolute text-center font-sans w-1/2 left-0 text-sm mx-4 p-auto">
                {text}
            </p>
            <span className="absolute top-8 right-8">
                <img src={PIC1} alt='PIC1' width="300" height="500" className="border-black border-2 rounded"></img>
            </span>
            <span className="absolute left-2 bottom-16 text-2xl grid grid-cols-3 font-bold">
                <span className="">
                    Team Size
                    <p className="text-xl font-normal">
                        {teamSize}
                    </p>
                </span>
                <span className="mx-4">
                    Duration
                    <p className="text-xl font-normal">
                        {duration}
                    </p>
                </span>
                <span className="">
                    Awards
                    <p className="text-xl font-normal">
                        {awards}
                    </p>
                </span>
            </span>
            <button className="absolute right-32 bottom-16 text-xl text-middle font-serif text-black rounded-full font-bold  border-8 border-slate-400 bg-slate-400 hover:rounded-md hover:bg-white" 
                    type="button" 
                    onClick={null}>
                Read More
            </button>
        </div>
    )
}

export default ProjectBox;