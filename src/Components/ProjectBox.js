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
        <div className="relative container w-2/3 h-screen bg-neutral-400 flex items-center justify-center border-2 border-black rounded top-0.5 left-0.5 shadow-2xl">
            <div className="flex flex-col justify-center gap-4">
                <div className="flex flex-row justify-center gap-4">
                    <div className="w-3/5">
                        <span className="inset-0  font-sans text-6xl left-16 border-y-4 border-black border-double space-y-4">
                        {title}
                        <p className="text-2xl pt-4">
                            {description}
                        </p>
                        </span>
                        <p className="text-center font-sans left-0 text-sm m-3 p-auto">
                            {text}
                        </p>
                    </div>
                    <div className="w-2/5">
                        <span className="space-y-4">
                            <img src={PIC1} alt='PIC1' width="300" height="500" className="border-black border-2 rounded"></img>
                        </span>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="w-3/5">
                        <span className="left-2 bottom-16 text-2xl grid grid-cols-3 font-bold">
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
                    </div>
                    <div className="w-2/5">
                        <a href={linktoProject}>
                            <button className="text-xl text-middle font-serif text-black rounded-full font-bold border-8 border-slate-400 bg-slate-400 hover:border-white hover:border-8 hover:rounded-full hover:bg-white" 
                                type="button" 
                                onClick={null}>
                                Read More
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectBox;