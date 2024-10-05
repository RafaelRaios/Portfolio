import React from 'react';
import {SiCplusplus, SiTypescript, SiCss3, SiReact, SiTailwindcss, SiAngular} from 'react-icons/si';
import {AiFillHtml5} from 'react-icons/ai';
import {DiJava} from 'react-icons/di';
import {DiJavascript, DiPython} from 'react-icons/di'
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
      nome: "Typescript",
      lin: (<SiTypescript size={tamanho -15}/>)
    },
    {
      id: 9,
      nome: "React",
      lin: (<SiReact size={tamanho}/>)
    },
    {
      id: 10,
      nome: "Angular",
      lin: (<SiAngular size={tamanho -10}/>)
    },
    {
      id: 11,
      nome: "Tailwind",
      lin: (<SiTailwindcss size={tamanho}/>)
    }
  ]

  

  const exp = skills.map((link) => 
    <li key={link.id} className='flex md:flex-row items-center px-5 my-10 text-gray-300 hover:text-yellow-100'>
      <div className='flex flex-col items-center'>
        {link.lin}
        <samp className='hidden md:flex'>{link.nome}</samp>
      
      </div>
      <h1 className='scale-150 px-2 '>,</h1>
    </li>
  );


  return (
    <div name="experiências" className='w-full md:h-screen items-center'>
      <div className='bg-gradient-to-b from-gray-800/90 from-0.02% md:from-2% to-gray-600/90 scale-75 items-center 
      flex flex-row rounded-md ' onClick={() => {
        
      }}>
        <div className=' flex flex-col py-10'>
          <div class="top mb-2 flex scale-115 px-10 ">
            <div class="h-3 w-3 bg-red-500 rounded-full hover:scale-110 cursor-pointer"></div>
            <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full hover:scale-110 cursor-pointer"></div>
            <div class="ml-2 h-3 w-3 bg-green-500 rounded-full hover:scale-110 cursor-pointer"></div>
          </div>
          <h1 className='flex flex-row items-center text-3xl my-10 px-2'>
            <samp className='text-indigo-800 px-3'>const </samp> <samp className='px-2 text-blue-600'>Experiences</samp> 
            <samp className='text-gray-800'>=</samp> <TbBracketsContainStart size={tamanho}/>
          </h1>
          <div className='grid md:grid-cols-5 grid-cols-1 pl-20 md:pl-44 justify-between items-center'>
              {exp}
          </div>

          <h1 className='px-10'>
            <TbBracketsContainEnd size={tamanho} />
          </h1>
          
          
        </div>
        
      </div>
    </div>
  )
}

export default Experience