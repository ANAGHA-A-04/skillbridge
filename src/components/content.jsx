import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";


const Main=()=>{
    return(
        <div className="text-white max-w-[800px] mx-auto min-h-screen flex text-center flex-col justify-center overflow-hidden  ">
            <div className="text-6xl font-bold"> 
                Welcome to SkillBridge
                <div className="text-3xl font-light pt-3">
                <p> Discover your strength,explore your career and get personalized learning path</p>
                
                </div>
                <Link
                  to="/form"
                   className="block mx-auto mt-8 text-white text-lg font-medium bg-indigo-700 h-10 w-28 rounded-xl drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] p-1 hover:drop-shadow-[1_3px_10px_rgba(255,255,255,0.2)] active:scale-75 transition-all duration-200  "
                    >
                       Get Start
                </Link>

                </div>
       
        </div>

    )
}
export default Main