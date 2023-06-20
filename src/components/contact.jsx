import React, { useState } from 'react'
import { BiChevronRight } from "react-icons/bi";


const Contact = () => {

  return (
    <div name='contrate' className='w-full h-screen'>

        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-signature font-bold text-white
                inline border-b-2'>Contate:</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/e68f8267-0a0d-478b-9479-c996c5232d07" method="POST" className='flex flex-col w-full mt-5 md:w-1/2'>
                    <input type="text"  name='name' placeholder='coloque seu nome'
                    className='p-2 bg-gray-700/50 text-white border-2 focus:outline-none rounded-md' />

                    <input type="text" name='email' placeholder='coloque seu email'
                    className='p-2 bg-gray-700/50 text-white border-2 focus:outline-none rounded-md my-4' />

                    <textarea name="message" rows={10} placeholder='digite aqui sua mensagem'
                    className='p-2 bg-gray-700/50 text-white border-2 focus:outline-none rounded-md '></textarea>

                    <button type='submit' className='bg-gradient-to-t from-gray-200/90 from-45% to-neutral-100/40 px-6 py-2
                    rounded-md hover:px-10 duration-300 cursor-pointer mx-auto my-6 flex maior'>
                        <div className='flex items-center font-signature font-bold'>
                            Enviar <div className='menor'><BiChevronRight size={30}/></div>
                        </div>
                    </button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Contact