import React from "react";
import { AiFillFileText, AiOutlineVerticalAlignBottom } from "react-icons/ai";

const Sobre = () => {

    const tradutor = [
        {
            "port": (<> <samp className="mx-4"></samp>Sou Rafael Rios, estudante de Ciência da Computação na UFPE. Desde cedo, sempre fui fascinado pela tecnologia e suas possibilidades. Essa paixão me levou a escolher uma carreira em desenvolvimento de software, onde posso criar soluções inovadoras e impactar positivamente a vida das pessoas.

Durante minha trajetória acadêmica, desenvolvi uma sólida base de conhecimento em programação, algoritmos, estrutura de dados, e engenharia de software. Além disso, me dediquei ao estudo do desenvolvimento de jogos, uma área que me encanta pela capacidade de combinar criatividade com tecnologia para criar experiências interativas envolventes.

No meu tempo livre, gosto de tentar desenvolver projetos próprios na area como uma demonstração de jogo, ou algum site que me ajude a aperfeiçoar minhas habilidades.
            </>),
            "eng": (<><samp className="mx-4">I am Rafael Rios, a Computer Science student at UFPE. From a young age, I have always been fascinated by technology and its possibilities. This passion led me to choose a career in software development, where I can create innovative solutions and positively impact people's lives.

During my academic journey, I developed a solid foundation in programming, algorithms, data structures, and software engineering. Additionally, I dedicated myself to studying game development, an area that captivates me due to its ability to combine creativity with technology to create engaging interactive experiences.

In my spare time, I enjoy developing my own projects in the field, such as a game demo or a website that helps me refine my skills.</samp></>),
        }
    ]

    return (
          
        <div name="sobre mim" className="w-full md:h-screen bg-gradient-to-r from-gray-900/90 from-45% to-neutral-800/90 ">
            <div className="flex flex-col items-center text-white max-w-screen-lg mx-auto justify-center p-4 ">
                <div className="scale-150 font-signature mt-5">
                    <h2> Sobre mim: </h2>
                </div>
                
            
                <p className="mt-20 font-base text-justify md:scale-90">
                {tradutor[0]["port"]}
                </p>

                <br />
                
                <div className="flex items-center bg-gradient-to-t from-gray-200/90 from-45% to-neutral-100/90 text-black p-3
                rounded-full hover:cursor-pointer hover:scale-110 duration-300 invisible">
                    <p>curriculo</p>
                    <AiOutlineVerticalAlignBottom />
                </div>
        </div>
            
        </div>
        
    )
}

export default Sobre
