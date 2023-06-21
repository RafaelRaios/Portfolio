import React, { useState } from "react"
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import alagoano from "../assets/images/alagoano.png"
import site from "../assets/images/site.png"

const Feitos = () => {
    const [index, setIndex] = useState(0)
    const [text1, setText1] = useState(false)

    

    const repositorio = [
        {
            img: site,
            child: (
                <div className="scale-25 md:scale-75 bg-gradient-to-t from-gray-900/90 from-45% to-neutral-800/90 p-4 rounded-md
                max-w-screen-lg mx-auto ">
                    <h2 className="text-white text-3xl md:text-4xl font-signature py-3 mx-4 md:mx-10 md:my-4">Porftolio</h2>
                    <a href="https://github.com/RafaelRaios/Portfolio" target="blank"><img src={site} alt="" link/></a>
                    <p className="text-white my-4 font-base justify-center items-center">Esse é um site pessoal, ou um portfolio, com o intuito de listar minhas habilidades
                    como programador assim como links sociais que ajudem a me mostrar melhor quem é Rafael Rios, de modo a facilitar para alguem que esteja
                     interessado em me contratar como profissional verificar se sou a pessoa adequada ao trabalho, assim como funcionar como uma maneira de colocar 
                     parte dessas habilidadesem prática</p>
                </div>
            )
            
        },
        {
            img: alagoano,
            child: (
                <div className="scale-25 md:scale-75 bg-gradient-to-t from-gray-900/90 from-45% to-neutral-800/90 p-4 rounded-md items-center
                max-w-screen-lg mx-auto">
                    <h2 className="text-white text-2xl md:text-4xl font-signature py-3 mx-4 md:mx-10 md:my-4">Alagoaninho Adventures</h2>
                    <a href="https://github.com/RafaelRaios/Alagoaninho-Adventures" target="blank"
                    className="flex ">
                        <img src={alagoano} alt="" link/>
                    </a>
                    <p className="text-white my-4 font-base justify-center items-center">
                    
                    <div >
                    {!text1 && <p className="">Alagoaninho adventures é um mini jogo feito em grupo para a disciplina de introdução a programação na UFPE, Alagoaninho
                    Adventures é um jogo de plataforma baseado em jogos como I Wanna be The Guy e cat mario, assim como um toque cômico do 
                    jogo brasileiro Mineirinho Ultra Adventures,  em resumo esse jogo é um 
                    jogo de plataforma voltado para proporcionar grandes dificuldades o jogador, de maneiras inusitada
                    s  ... <samp className="text-cyan-400 cursor-pointer" onClick={() => setText1(!text1)}>Read More</samp></p> }
                    
                    {text1 && <p>Alagoaninho adventures é um mini jogo feito em grupo para a disciplina de introdução a programação na UFPE, Alagoaninho
                    Adventures é um jogo de plataforma baseado em jogos como I Wanna be The Guy e cat mario, assim como um toque cômico do 
                    jogo brasileiro Mineirinho Ultra Adventures,  em resumo esse jogo é um 
                    jogo de plataforma voltado para proporcionar grandes dificuldades o jogador, de maneiras inusitadas 
                    <samp className=" cursor-pointer" onClick={() => setText1(!text1)}> como plataformas que  matam o jogador ao pousar nela.
                         Nesse jogo eu fui responsável pelo game desing, pelos sprites, 
                         pela programação do atirador,do personagem principal e pelas
                          telas de vitória e derrota</samp></p> }
                    </div>
                    </p>
                </div>
            )
        }
    ]

    return (
        <div name="portfolio" className="items-center">
            <div className="my-16 md:my-0 md:mx-20">
                <div className="flex ">
                <button className="hidden md:flex text-gray-700 md:hover:scale-110 bg-gray-100/50 rounded-full duration-200 scale-50 md:scale-100
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

                <button className=" inline-block md:flex text-gray-700 md:hover:scale-110 bg-gray-100/50 rounded-full duration-200 scale-50 md:scale-100 
                md:my-auto md:mx-5"
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
        </div>
    )

}

export default Feitos
