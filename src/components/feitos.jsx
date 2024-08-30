import React, { useState } from "react"
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import alagoano from "../assets/images/alagoano.png"
import site from "../assets/images/site.png"
import splotify from "../assets/images/splotify.png"
import paine_cards from "../assets/images/painel-cards.png"
import filter_project from "../assets/images/filter-project.png"
import bd_cinema from "../assets/images/BDCInema.png"
import alagoano2 from "../assets/images/alagoano2.png"

const Feitos = () => {
    const [index, setIndex] = useState(0)
    const upIndex = () => {
        console.log(index)
                    if(index < repositorio.length - 1) {
                        setIndex(index + 1)
                    }
                    else {
                        setIndex(0)
                    }
    }

    const downIndex = () => {
        console.log(index)
                    if(index > 0) {
                        setIndex(index - 1)
                    }
                    else {
                        setIndex(repositorio.length - 1)
                    }
    }

    const [text1, setText1] = useState(false)

    const alagon_text = {
        true: (<>...<samp className="text-cyan-400 cursor-pointer" onClick={() => {setText1(!text1)}}>Read More</samp></>),
        false: (<><samp className="text-white my-4 font-base justify-center items-center cursor-pointer" onClick={() => setText1(!text1)}> como plataformas que  matam o jogador ao pousar nela.
        Nesse jogo eu fui responsável pelo game desing, pelos sprites, 
        pela programação do atirador,do personagem principal e pelas
         telas de vitória e derrota</samp></>),
    }
    

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
                   <p className="">Alagoaninho adventures é um mini jogo feito em grupo para a disciplina de introdução a programação na UFPE, Alagoaninho
                    Adventures é um jogo de plataforma baseado em jogos como I Wanna be The Guy e cat mario, assim como um toque cômico do 
                    jogo brasileiro Mineirinho Ultra Adventures,  em resumo esse jogo é um 
                    jogo de plataforma voltado para proporcionar grandes dificuldades o jogador, de maneiras inusitadas 
                   {alagon_text[text1]}</p>
                    
                    
                    </div>
                    </p>
                </div>
            )
        },
        {
            img: paine_cards,
            child: (
                <div className="scale-25 md:scale-75 bg-gradient-to-t from-gray-900/90 from-45% to-neutral-800/90 p-4 rounded-md items-center
                max-w-screen-lg mx-auto">
                    <h2 className="text-white text-2xl md:text-4xl font-signature py-3 mx-4 md:mx-10 md:my-4">Painel Cards</h2>
                    <a href="https://github.com/RafaelRaios/painel-cards" target="blank"
                    className="flex scale-95 items-center">
                        <img src={paine_cards} alt="" link/>
                    </a>
                    <a href="https://painel-cards.vercel.app/" target="blank">
                        <p className="text-white my-4 font-base justify-center items-center cursor-pointer hover:text-cyan-200" >
                        Painel Cards é um mini site feito por mim para treinar a componentização no Angular. Clicando na imagem, você será direcionado para o link do repositório no GitHub, e clicando neste texto, você irá para o site diretamente.
                        </p>
                    </a>
                </div>
            )
        },
        {
            img: splotify,
            child: (
                <div className="scale-25 md:scale-75 bg-gradient-to-t from-gray-900/90 from-45% to-neutral-800/90 p-4 rounded-md items-center
                max-w-screen-lg mx-auto">
                    <h2 className="text-white text-2xl md:text-4xl font-signature py-3 mx-4 md:mx-10 md:my-4">Splotify</h2>
                    <a href="https://github.com/RafaelRaios/Splotify" target="blank"
                    className="flex scale-95 items-center">
                        <img src={splotify} alt="" link/>
                    </a>
                    <p className="text-white my-4 font-base justify-center items-center">
                    Splotify é um tocador de músicas feito em Java com o auxílio da biblioteca Java Swing, desenvolvido na cadeira de Infraestrutura de Software. O intuito principal desse pequeno tocador de músicas é aplicar na prática o conceito de Threads nas diversas funcionalidades paralelas do player.
                    </p>
                </div>
            )
        },
        {
            img: filter_project,
            child: (
                <div className="scale-25 md:scale-75 bg-gradient-to-t from-gray-900/90 from-45% to-neutral-800/90 p-4 rounded-md items-center
                max-w-screen-lg mx-auto">
                    <h2 className="text-white text-2xl md:text-4xl font-signature py-3 mx-4 md:mx-10 md:my-4">Filter Project</h2>
                    <a href="https://github.com/RafaelRaios/filter-project" target="blank"
                    className="flex scale-95 items-center">
                        <img src={filter_project} alt="" link/>
                    </a>
                    <a href="https://filter-project-ashy.vercel.app/" target="blank">
                        <p className="text-white my-4 font-base justify-center items-center cursor-pointer hover:text-cyan-200" >
                        Filter Project é um projeto em Angular de um site que filtra as pessoas cadastradas no banco de dados local e disponibiliza as informações da pessoa selecionada. Clicando na imagem, você será direcionado para o link do repositório no GitHub, e clicando neste texto, você irá para o site diretamente.
                        </p>
                    </a>
                </div>
            )
        },
        {
            img: bd_cinema,
            child: (
                <div className="scale-25 md:scale-75 bg-gradient-to-t from-gray-900/90 from-45% to-neutral-800/90 p-4 rounded-md items-center
                max-w-screen-lg mx-auto">
                    <h2 className="text-white text-2xl md:text-4xl font-signature py-3 mx-4 md:mx-10 md:my-4">Banco de Dados Cinema</h2>
                    <a href="https://github.com/RafaelRaios/BD-Cinema" target="blank"
                    className="flex scale-95 items-center">
                        <img src={bd_cinema} alt="" link/>
                    </a>
                    <p className="text-white my-4 font-base justify-center items-center " >
                    Como o nome já indica, este projeto refere-se ao banco de dados de um cinema, desenvolvido para a disciplina de Gerenciamento de Dados e Informações. O projeto é abrangente e inclui tabelas bem estruturadas, uma série de comandos de inserção e algumas funções e triggers que atendem de forma verossímil às necessidades de um cinema real.
                    </p>
                    
                </div>
            )
        },
        {
            img: alagoano2,
            child: (
                <div className="scale-25 md:scale-75 bg-gradient-to-t from-gray-900/90 from-45% to-neutral-800/90 p-4 rounded-md items-center
                max-w-screen-lg mx-auto">
                    <h2 className="text-white text-2xl md:text-4xl font-signature py-3 mx-4 md:mx-10 md:my-4 ">Alagoaninho Adventures 2</h2>
                    <a href="https://editor.p5js.org/RafaelRaios/sketches/b5i9I5gXR" target="blank"
                    className="flex scale-95 ml-20">
                        <img src={alagoano2} alt="" link/>
                    </a>
                    <a href="https://editor.p5js.org/RafaelRaios/full/b5i9I5gXR" target="blank">
                        <p className="text-white my-4 font-base justify-center items-center cursor-pointer hover:text-cyan-200" >
                        Alagoaninho Adventures 2 é uma pseudocontinuação do primeiro jogo, desenvolvido para a disciplina de Introdução à Multimídia. Desta vez, o projeto utiliza o editor p5.js. O jogo mantém o mesmo estilo do anterior, sendo um jogo travesso que interage de maneira criativa com o cenário.

                        Observação: Clicando na imagem abaixo, você será redirecionado para o link do código no p5.js. Se clicar no texto, poderá jogar o jogo em tela cheia no seu navegador.
                        </p>
                    </a>
                </div>
            )
        },
    ]

    return (
        <div name="portfolio" className="items-center">
            <div className="my-16 md:my-0 md:mx-20">
                <div className="flex ">
                <button className="hidden md:flex text-gray-700 md:hover:scale-110 bg-gray-100/50 rounded-full duration-200 scale-50 md:scale-100
                my-auto md:mx-5"
                onClick={() => {
                    
                    downIndex()
                    
                }}>
                    <div className="p-3"><BiArrowFromRight size={50}/></div>
                </button>
                
                {repositorio[index].child}

                <button className=" inline-block md:flex text-gray-700 md:hover:scale-110 bg-gray-100/50 rounded-full duration-200 scale-50 md:scale-100 
                md:my-auto md:mx-5"
                onClick={() => {
                    
                    upIndex()
                }}>
                    
                    <div className="p-3"><BiArrowFromLeft size={50}/></div>
                </button>
                </div>
                
            </div>
        </div>
    )

}

export default Feitos
