import React from "react"
import Typewriter from "typewriter-effect"


const Home = () => {
    const skills = ['Python', 'C', ' C++', 'HTML', "CSS", "JavaScript", "React", "Tailwind"]

    const write = (typewriter) => {
    
        typewriter.typeString().pauseFor(2500).start();
        
    }

    return (
        <div name="home" className="w-full h-screen z-1">
            <div className="mx-auto flex maw-w-screen-lg px-10 h-full flex-col justify-center items-center">
                
            <div className="flex py-2 md:scale-150 my-7 flex-col items-center hover:cursor-default scale-110">
                <h1 className="text-white font-signature scale-125 md:text-4xl"> 
                    <samp>Hello. </samp>
                    <samp className="hover:text-yellow-100 hover:cursor-pointer">I'm Rafael Rios</samp>
                </h1>
                <h2 className="text-emerald-100/25 mx-10 scale-110 font-base my-2 md:my-5 font-bold md:text-2xl
                hover:text-sky-400">Software Developer</h2>
            </div>

            <div className="flex flex-row ">
                <div className="box-content bg-stone-900 w-80 md:px-4 py-2 md:scale-125 scale-75 px-2
                 border-b-transparent border-r-transparent rounded-md flex shadow-xl">
                    <h2 className="text-white"> $ </h2>
                    <h2 className="text-white scale-75 font-signature"> 
                        
                        <Typewriter options={{loop: true, strings: skills, autoStart: true,}} onInit={write}/>

                    </h2>
                </div>

                
            </div>
        
                
            </div>
        </div>
    )
}

export default Home