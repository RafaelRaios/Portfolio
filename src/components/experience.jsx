import React from 'react';
import {SiCplusplus, SiAdobephotoshop, SiCss3, SiReact, SiTailwindcss, SiAssemblyscript, SiSwift, SiAdobeillustrator} from 'react-icons/si';
import {AiFillHtml5} from 'react-icons/ai';
import {DiJavascript, DiPython} from 'react-icons/di'
import cIcon from '../assets/images/cIcon.png'


const Experience = () => {

  const skills = [
    {
      nome: "Python",
      lin: (<DiPython/>)
    },
    {
      nome: "C",
      lin: <img src={cIcon} alt="" />
    },
    {
      nome: "C++",
      lin: (<SiCplusplus/>)
    },
    {
      nome: "HTML",
      lin: (<AiFillHtml5/>)
    },
    {
      nome: "CSS",
      lin: (<SiCss3/>)
    },
    {
      nome: "JS",
      lin: (<DiJavascript/>)
    },
    {
      nome: "Assembly MIPS",
      lin: (<SiAssemblyscript/>)
    },
  ]

  return (
    <div name="experiências" className='w-full h-screen'> </div>
  )
}

export default Experience