import React from "react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { AiFillFileText } from "react-icons/ai"

const SocialLinks = () => {
    
    const links = [
        {   
            id: 1,
            child: (
                <>
                    <FaGithub size={20}/> <samp className="hidden md:flex">Github </samp>
                </>
            ),
            href: "https://github.com/RafaelRaios",
            style: "rounded-tr-md"
        },
        {   
            id: 2,
            child: (
                <>
                   <FaLinkedin size={20}/> <samp className="hidden md:flex">Linkedin</samp>
                </>
            ),
            href: "https://www.linkedin.com/in/rafael-rios-937645267/",
            style: "rounded-tr-md"
        },
        {   
            id: 3,
            child: (
                <>
                   <FaInstagram size={20}/> <samp className="hidden md:flex">Instagram</samp>
                </>
            ),
            href: "https://www.instagram.com/rios.d.rafael/",
            style: "rounded-tr-md"
        },
        
    ]

    const socialL = links.map((link) => 
                
                <li className=" text-white hover:text-yellow-100 md:my-2 mx-3 md:mx-0" key={link.id}>

                    <a href={link.href} target="blank"> {link.child} </a>
                
                </li>
               )

    return (
        <div className=" items-center w-full text-white fixed px-4 md:top-[75%] top-[90%]
         md:scale-110 md:ml-20 flex">
            <ul className="inline-block">
                {socialL}
            </ul>
        </div>
    )
}

export default SocialLinks