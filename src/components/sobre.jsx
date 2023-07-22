import React from "react";
import { AiFillFileText, AiOutlineVerticalAlignBottom } from "react-icons/ai";

const Sobre = () => {

    const tradutor = [
        {
            "port": (<> <samp className="mx-4"></samp>Prazer em conhecelo, me chamo Rafael Rios e eu sou um desenvolvedor de software, nasci na capital do estado
                de Alagoas, Maceió, onde morei até meus 19 anos, quando mais novo eu não sabia mt bem o que queria ser e fazer quando
                me tornasse um adulto, pensava em diversas opções, mas nenhuma parecia se encaixar comigo, nunca tive dificuldades com
                a escola, ao mesmo tempo nenhuma matéria realmente despertava muito interesse meu, o que me levava a sempre fazer apenas 
                o mínimo necessário, com exeção de matématica que eu tinha um apreço um pouco maior, porem desde mais novo eu sempre fui
                apaixonado por videogames, então acho que quando eu tinha 14 anos me surgiu a ideia de trabalhar com isso, na epoca minha 
                escola estava oferecendo um mini curso com Arduino então decidi tentar, me diverti bastante fazendo um projeto de uma luva
                que funcionaria como mouse e por isso decidi seguir com a formação em ciências da computação, como uma curiosidade extra além 
                de video games, tenho outros hobbies como desenhar, jogos de tabuleiro, academia, volei, tenis de mesa, futebol e esportes no
                geral.
            </>),
            "eng": (<><samp className="mx-4"></samp></>),
        },
        {
            "port": (<><samp className="mx-4"></samp>Nessa época em que decidi me tornar um prgramador no Brasil e principalmente na 
            minha cidade natal essa não era uma profissão muito valorizada, muito menos haviam muitas oportunidades, então meus pais
            apesar de não me proibirem de seguir carreira na área me disseram que eu teria que ir para o estado de Pernanbuco e fazer
            a graduação na UFPE que possuia um curso de ciências da computação bastante renomado e com diversas iniciativas privadas
            dentro dela, e esse era meu plano, no entanto a pandemia do novo coronavírus aconteceu e mudou o cenário, a profissão do 
            programador começou cada vez mais a se valorizar mesmo em Maceió, com a pandemia eu também e atrapalhei muito na minha rotina
            assim como também tive certeza que ainda não estava preparado para morar sozinho em outro estado, então comecei o curso na 
            faculdade federal da minha cidade, na UFAL, que agora era uma opção mais do que viável, onde cursei um período em EAD e gostei
            bastante do curso, por alguma irônia do destino fiz o ENEM mais uma vez naquele ano e após conversar com minha decidi 
            finalmente ir para UFPE.</>),
            "eng": (<><samp className="mx-4"></samp></>),
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

                <p className="py-5 mb-10 md:mb-0 font-base text-justify md:scale-90">
                {tradutor[1]["port"]}
                </p>
                <div className="flex items-center bg-gradient-to-t from-gray-200/90 from-45% to-neutral-100/90 text-black p-3
                rounded-full hover:cursor-pointer hover:scale-110 duration-300 ">
                    <p>curriculo</p>
                    <AiOutlineVerticalAlignBottom />
                </div>
        </div>
            
        </div>
        
    )
}

export default Sobre
