import React, {useState} from "react"
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const Links = [
        {
            id: 1,
            lin: "home",
        },
        {
            id: 2,
            lin: "sobre mim",
        },
        {
            id: 3,
            lin: "portfolio",
        },
        {
            id: 4,
            lin: "contrate",
        },
    ];
    
    const menusO = Links.map((link) => 
        <li key={link.id} className="flex font-base px-4 text-gray-400 hover:text-yellow-100 hover:scale-110 cursor-pointer">
            <Link to={link.lin} smooth duration={500}>{link.lin}</Link>
        </li>
    )

    const menusV = Links.map((link) => 
        <li key={link.id} className="flex text-4xl font-base py-6 capitalize text-gray-400 hover:text-yellow-100 hover:scale-110 cursor-pointer">
            <Link to={link.lin} smooth duration={500} onClick={() => {setNav(!nav)}}>{link.lin}</Link>
        </li>
    )

    return (

        <div className="flex justify-between items-center w-full h-20 text-white fixed px-4 z-10">
            
            <div>
                <h1 className="font-signature scale-125 px-6"></h1>
            </div>

            <ul className="hidden md:flex">
                {menusO}
            </ul>

            <div onClick={() => setNav(!nav)} className="cursor z-10 pr-4 text-gray-200 hover:text-yellow-200 md:hidden">
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>

            {nav && <ul className=" flex flex-col justify-center items-center md:hidden top-0 left-0 w-full h-screen bg-gradient-to-b
            from-black to-slate-800 absolute ">
                {menusV}
            </ul>}

        </div>
    )
}

export default Navbar