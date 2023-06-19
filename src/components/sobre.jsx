import React from "react";
import { AiFillFileText, AiOutlineVerticalAlignBottom } from "react-icons/ai";

const Sobre = () => {

    

    return (
          <div className="w-full h-screen">
            <div name="sobre mim" className=" bg-gradient-to-r from-cyan-700 from-45% to-blue-400/90 ">
            <div className="flex flex-col items-center text-white max-w-screen-lg mx-auto justify-center p-4">
                <div className="scale-150 font-signature mt-5">
                    <h2> Sobre mim: </h2>
                </div>
                
            
                <p className="mt-20 font-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                   deserunt mollit anim id est laborum.
                </p>

                <br />

                <p className="py-10 mb-10 md:mb-0 font-base">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                 totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                   sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                     tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                      quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                      consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil 
                      molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
                <div className="flex items-center">
                    <p>curriculo</p>
                    <AiOutlineVerticalAlignBottom />
                </div>
            </div>
            
            </div>
        </div>
    )
}

export default Sobre
