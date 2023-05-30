import React from "react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { AiFillFileText } from "react-icons/ai"

const SocialLinks = () => {
    
    const links = [
        {   
            id: 1,
            child: (
                <>
                    <FaGithub size={30}/> <samp className="hidden md:flex">Github</samp>
                </>
            ),
            href: "https://github.com/RafaelRaios",
            style: "rounded-tr-md"
        },
        {   
            id: 2,
            child: (
                <>
                   <FaInstagram size={30}/> <samp className="hidden md:flex">Instagram</samp>
                </>
            ),
            href: "https://www.instagram.com/rios.d.rafael/",
            style: "rounded-tr-md"
        },
        {   
            id: 3,
            child: (
                <>
                   <FaLinkedin size={30}/> <samp className="hidden md:flex">Linkedin</samp>
                </>
            ),
            href: "https://www.linkedin.com/in/rafael-rios-937645267/",
            style: "rounded-tr-md"
        },
        ,
        
    ]

    const socialL = links.map((link) => 
                
                <li className={" text-white hover:text-yellow-100 md:my-2 mx-3 md:mx-0 " + " " + link.style} 
                key={link.id}>

                    <a href={link.href} target="blank"> {link.child} </a>
                
                </li>
               )

    return (
        <div className=" items-center w-full text-white fixed px-4 md:top-[70%] top-[90%]
           flex">
            <ul className="flex md:inline ">
                {socialL}
            </ul>

            
        </div>
    )
}

export default SocialLinks