import React, { useState } from "react"
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import alagoano from "../assets/images/alagoano.png"
import site from "../assets/images/site.png"

const Feitos = () => {
    const [index, setIndex] = useState(0)
    const repositorio = [
        {
            img: site,
            child: (
                <div className="scale-25 md:scale-75 bg-gradient-to-t from-cyan-600 from-45% to-blue-400/90 p-4 rounded-md">
                    <a href="https://github.com/RafaelRaios/Portfolio" target="blank"><img src={site} alt="" link/></a>
                    <p className="text-white my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
                </div>
            )
            
        },
        {
            img: alagoano,
            child: (
                <div className="scale-25 md:scale-75 bg-gradient-to-t from-cyan-600 from-45% to-blue-400/90 p-4 rounded-md">
                    <a href="https://github.com/RafaelRaios/Alagoaninho-Adventures" target="blank"><img src={alagoano} alt="" link/></a>
                    <p className="text-white my-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
                </div>
            )
        }
    ]

    return (
        <div name="portfolio" className="w-full h-screen items-center">
            <div className="flex my-16">
                <button className="text-gray-700 md:hover:scale-110 bg-gray-100/50 rounded-full duration-200 scale-50 md:scale-100
                my-auto md:mx-5"
                onClick={() => {
                    
                    console.log(index)
                    if(index > 0) {
                        setIndex(index - 1)
                    }
                    else {
                        setIndex(repositorio.length - 1)
                    }
                    
                }}>
                    <div className="p-3"><BiArrowFromRight size={50}/></div>
                </button>
                
                {repositorio[index].child}

                <button className="text-gray-700 md:hover:scale-110 bg-gray-100/50 rounded-full duration-200 scale-50 md:scale-100 
                my-auto md:mx-5"
                onClick={() => {
                    
                    console.log(index)
                    if(index < repositorio.length - 1) {
                        setIndex(index + 1)
                    }
                    else {
                        setIndex(0)
                    }
                    
                }}>
                    <div className="p-3"><BiArrowFromLeft size={50}/></div>
                </button>
            </div>
        </div>
    )

}

export default Feitos
