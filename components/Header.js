import React from "react";
import { AiOutlineMenu, AiOutlineArrowLeft } from 'react-icons/ai';
function Header({handleClick, isMenu}) {    
  return (
    <div>
         <di>
                <div className="bg-blue-300 h-20 flex pt-8">
            <div className="ml-8 sm:ml-28" onClick={handleClick}>
            { 
                isMenu == 0 ? <AiOutlineMenu color="black" size={35}></AiOutlineMenu>:<AiOutlineArrowLeft color="black" size={35}></AiOutlineArrowLeft>
            }
        </div>
        <h1 className="text-2xl w-3/4 text-center">Happy News</h1>
        </div>
            </di>
    </div>
  );
}

export default Header;
