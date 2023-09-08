import React from 'react';
import {SiCplusplus, SiAdobephotoshop, SiCss3, SiReact, SiTailwindcss, SiSwift, SiAdobeillustrator} from 'react-icons/si';
import {AiFillHtml5} from 'react-icons/ai';
import {DiJava} from 'react-icons/di';
import {DiJavascript, DiPython} from 'react-icons/di'
import cIcon from '../assets/images/cIcon.png'
import {TbBracketsContainStart, TbBracketsContainEnd} from 'react-icons/tb';

const Experience = () => {
  const tamanho = 60;
  const skills = [
    {
      id: 1,
      nome: "Python",
      lin: (<DiPython size={tamanho}/>)
    },
    {
      id: 3,
      nome: "C++",
      lin: (<SiCplusplus size={tamanho - 5}/>)
    }, 
    {
      id: 4,
      nome: "java",
      lin: (<DiJava size={tamanho}/>)
    },
    {
      id: 5,
      nome: "HTML",
      lin: (<AiFillHtml5 size={tamanho}/>)
    },
    {
      id: 6,
      nome: "CSS",
      lin: (<SiCss3 size={tamanho -10}/>)
    },
    {
      id: 7,
      nome: "JS",
      lin: (<DiJavascript size={tamanho}/>)
    },
    {
      id: 8,
      nome: "React",
      lin: (<SiReact size={tamanho}/>)
    },
    {
      id: 9,
      nome: "Tailwind",
      lin: (<SiTailwindcss size={tamanho}/>)
    },
    {
      id: 10,
      nome: "Photoshop",
      lin: (<SiAdobephotoshop size={tamanho - 5}/>)
    },
    {
      id: 11,
      nome: "Ilustrator",
      lin: (<SiAdobeillustrator size={tamanho - 5}/>)
    }
  ]

  const exp = skills.map((link) => 
    <li key={link.id} className='flex flex-row items-center px-5 my-10 text-gray-300 hover:text-yellow-100'>
      <div className='flex flex-col items-center'>
        {link.lin}
        {link.nome}
      </div>
      <h1 className='scale-150 px-2'>,</h1>
    </li>
  );

  return (
    <div name="experiências" className='w-full h-screen items-center'>
      <div className='bg-gray-600/90 scale-75 items-center flex flex-row rounded-md '>
        <div className=' flex flex-col my-20 px-10'>
          
          <h1 className='flex flex-row items-center text-3xl'>
            <samp className='text-indigo-800 px-3'>const </samp> <samp className='px-4 text-blue-600'>Experiences</samp> 
            <samp className='text-gray-800'>=</samp> <TbBracketsContainStart size={60}/>
          </h1>
          <div className='flex flex-row py-10 px-14'>
              {exp}
          </div>
          <TbBracketsContainEnd size={60} />
          
        </div>
        
      </div>
    </div>
  )
}

export default Experience