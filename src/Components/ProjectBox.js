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
        <div className="relative container w-auto lg:w-2/3 h-screen bg-neutral-400 flex items-center justify-center border-2 border-black rounded top-0.5 left-0.5 shadow-2xl">
            <div className="flex flex-col justify-center gap-4">
                <div className="flex flex-row justify-center gap-4">
                    {/*Large Screen Size*/}
                    <div className="hidden lg:block lg:w-3/5">
                        <div>
                            <span className="inset-0 font-sans text-2xl sm:text-4xl md:text-6xl left-16 border-y-4 border-black border-double space-y-4">
                            {title}
                            <p className="text-base sm:text-xl md:text-2xl pt-4">
                                {description}
                            </p>
                            </span>                       
                        </div>
                        <p className="text-center font-sans left-0 text-xs md:text-sm m-3 p-auto">
                            {text}
                        </p>    
                    </div>
                    <div className="hidden lg:block lg:w-2/5">
                        <span className="hidden lg:block space-y-4 px-4">
                            <img src={PIC1} alt='PIC1' width="300" height="500" className="border-black border-2 rounded"></img>
                        </span>
                    </div>
                    {/*Small-Medium Screen Size*/}
                    <div className="hidden w-full max-lg:block">
                        <div className="columns-2">
                            <div className="text-left pl-8">
                                <span className="font-sans text-xl md:text-2xl border-y-4 border-black border-double space-y-2">
                                    {title}
                                    <p className="text-lg md:text-xl pt-4">
                                        {description}
                                    </p>
                                </span>                       
                            </div>
                            <div className="hidden md:max-lg:block right-0 translate-x-48">
                                <span className="">
                                    <img src={PIC1} alt='PIC1' width="150" height="200" className="border-black border-2 rounded object-contain right-0"></img>                           
                                </span>
                            </div>
                            <div className="md:hidden right-0 translate-x-24">
                                <span className="">
                                    <img src={PIC1} alt='PIC1' width="100" height="150" className="border-black border-2 rounded object-contain right-0"></img>                           
                                </span>
                            </div>
                        </div>
                        <p className="text-center font-sans left-0 text-xs md:text-sm m-3 p-auto">
                            {text}
                        </p>    
                    </div>
                </div>
                {/*Large Screen Size*/}
                <div className="hidden lg:flex lg:flex-row">
                    <div className="w-3/5">
                        <span className="left-2 bottom-16 text-base sm:text-lg md:text-xl lg:text-2xl grid grid-cols-3 font-bold">
                            <span className="">
                                Team Size
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal">
                                {teamSize}
                                </p>
                            </span>
                            <span className="mx-4">
                                Duration
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal">
                                    {duration}
                                </p>
                            </span>
                            <span className="">
                                Awards
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal">
                                    {awards}
                                </p>
                            </span>
                        </span>                   
                    </div>
                    <div className="w-2/5">
                        <a href={linktoProject}>
                            <button className="text-base md:text-l lg:text-xl text-middle font-serif text-black rounded-full font-bold border-8 border-slate-400 bg-slate-400 hover:border-white hover:border-8 hover:rounded-full hover:bg-white" 
                                type="button" 
                                onClick={null}>
                                Read More
                            </button>
                        </a>
                    </div>
                </div>
                {/*Small Medium Screen Size*/}
                <div className="lg:hidden flex flex-row">
                    <div className="w-full">
                        <span className="left-2 bottom-16 text-base sm:text-lg md:text-xl lg:text-2xl grid grid-cols-4 font-bold">
                            <span className="">
                                Team Size
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal">
                                {teamSize}
                                </p>
                            </span>
                            <span className="mx-4">
                                Duration
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal">
                                    {duration}
                                </p>
                            </span>
                            <span className="">
                                Awards
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal">
                                    {awards}
                                </p>
                            </span>
                            <a href={linktoProject}>
                                <button className="text-base md:text-l lg:text-xl text-middle font-serif text-black rounded-full font-bold border-8 border-slate-400 bg-slate-400 hover:border-white hover:border-8 hover:rounded-full hover:bg-white" 
                                    type="button" 
                                    onClick={null}>
                                    More
                                </button>
                            </a>
                        </span>                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectBox;