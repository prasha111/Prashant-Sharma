import React from "react";
import logo from "../background3333333.jpg"
import Typewriter from 'typewriter-effect';


function LandingPage() {
    return (
      <div className="App ">
      <div className="">
      
          <div>
              
          </div>
          <div className="bg-[url('./background4444.jpg')] h-screen w-screen" src="background3333333.jpg">
            <div className="flex flex-row text-white px-8 pt-3">
                <div className="text-2xl mr-60">
                    Prashant Sharma
                </div>
                <div className="ml-96">About Me</div>
                <div className="ml-4">Work Experience</div>
                <div className="ml-4">Projects</div>

                <div className="ml-4">
                    Contact Me
                </div>
                <div className="ml-4">
                    CV
                </div>
            


            </div>
                <div className="text-4xl font-bold text-white">
                <Typewriter
                 options={{
                    strings: ['Welcome'],
                    autoStart: true,
                    loop: true,
                  }}
                 
                />
                </div>
          </div>
      </div>
      <div className="bg-[url('./background3333333.jpg')]">heeeellloooo</div>
       
        
      </div>
    );
  }
  
  export default LandingPage;
  