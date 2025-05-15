// eslint-disable-next-line no-unused-vars
import React from "react";
import AI from "../../assets/AI.png";

function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen ">
        <div className="text-center md:text-left md:w-1/2 ml-20 ">
          <h1 className="audiowide-regular text-5xl md:text-8xl font-bold leading-tight mb-6 ml-20 mt-10">
            Shape the
            <br />
            future of <span className= " audiowide-regular text-blue-400">Web3</span>
            <br />
            with <span className="audiowide-regular bg-clip-text bg-transparent text-transparent bg-gradient-to-r from-[#DE4DBC] to-[#1D86C2] to-50%">Genesis</span>
          </h1>
        </div>
        <div className="md:w-1/2 mt-40">
          <img
            alt="Person wearing VR headset with futuristic background"
            className="w-[910px]"
            src={AI}
           />
        </div>
      </div>
    </div>
  );
}

export default Home;
