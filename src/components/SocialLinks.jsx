import React from "react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const SocialLinks = () => {
    
    const links = [
        {   
            id: 1,
            child: (
                <div className="flex items-center ">
                    <FaGithub size={30}/> <span className="hidden nome mx-3 ">Github</span>
                </div>
            ),
            href: "https://github.com/RafaelRaios",
            style: "rounded-tr-md"
        },
        {   
            id: 2,
            child: (
                <div className="flex items-center">
                   <FaInstagram size={30}/> <span className="hidden nome mx-3 ">Instagram</span>
                </div>
            ),
            href: "https://www.instagram.com/rios.d.rafael/",
            style: "rounded-tr-md"
        },
        {   
            id: 3,
            child: (
                <div className="flex items-center">
                   <FaLinkedin size={30}/> <span className="hidden nome mx-3 ">Linkedin</span>
                </div>
            ),
            href: "https://www.linkedin.com/in/rafael-rios-937645267/",
            style: "rounded-tr-md"
        },
        ,
        
    ]

    const socialL = links.map((link) => 
                
                <li className={" text-white md:hover:text-yellow-100 md:my-2 mx-3 md:mx-0 icone" + " " + link.style} 
                key={link.id}>

                    <a href={link.href} target="blank"> {link.child} </a>
                
                </li>
               )

    return (
        <div className=" items-center  text-white fixed px-4 md:top-[80%] top-[90%] 2xl:top-[95%]
           flex flex-col">
            <ul className="flex md:inline ">
                {socialL}
            </ul>

            
        </div>
    )
}

export default SocialLinks
