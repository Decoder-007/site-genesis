// eslint-disable-next-line no-unused-vars
import React from "react";
import img4 from "../../assets/img4.png";
import img3 from "../../assets/img3.png";
import imgg1 from "../../assets/imgg1.png";
import "./Event.css";

function Event() {
  return (
    <div id="events" className="my-30 mx-20">
      <div className="audiowide-regular text-5xl mx-20 my-10 ">
        Our
        <span className="audiowide-regular bg-clip-text bg-transparent text-transparent bg-gradient-to-r from-[#DE4DBC] to-[#1D86C2] to-45%">
          {" "}
          Recent Events
        </span>
      </div>
      <div className="flex justify-center gap-36 flex-wrap w-full">
        <div className="gradient-border w-full max-w-sm h-[875px]">
          <div className="bg-gradient-to-b from-[#6b21a875] to-[#22072971] rounded-bl-3xl rounded-tr-3xl shadow-lg p-4 text-center h-[870px] flex flex-col">
            <img
              src={img4}
              alt="Event 1"
              className="w-full h-[420px] rounded-lg object-cover"
            />
            <h3 className="audiowide-regular my-2 text-lg">
              {" "}
              {` "Beyond The Code" by Pratham`}{" "}
            </h3>
            <p className="text-white font-bold mb-2">Date: September 09, 2024</p>
            <p className="text-white italic my-2 text-justify">
              {` "Pratham Prasoom, A self taught programmer turned Dev-Rel at
            Movement Labs! From coding tips to landing high packages, Pratham
            will be sharing his journey, insights and how he made it into big
            tech world. Over the two days we had the privilege of hosting
            industry leaders who are forefront of the Web3 revolution. The event
            was designed to bridge the gap between academic knowledge and
            industry expertise, encouraging our members to engage deeply with
            rapidly evolving world of Web3." `}
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600  opacity-65 text-white py-2 px-4 rounded-md font-bold transition-colors duration-300 hover:bg-blue-700 mt-auto "
            >
              Registration Closed!
            </a>
          </div>
        </div>

        <div className="gradient-border w-full max-w-sm h-[875px]">
          <div className="bg-gradient-to-b from-[#6b21a875] to-[#22072971] rounded-bl-3xl rounded-tr-3xl shadow-lg p-4 text-center h-[870px] flex flex-col">
            <img
              src={imgg1}
              alt="Event 2"
              className="w-full h-[420px] rounded-lg object-cover"
            />
            <h3 className="audiowide-regular my-2 text-lg">
              {` Welcoming "AKAI SPACE"`}{" "}
            </h3>
            <p className="text-white font-bold mb-2">Date: September 20, 2024</p>
            <p className="text-white italic my-2 text-justify">
              {` "Genesis is proud to announce the launch of our exclusive series
            "WTF"- Welcoming The Founders! We are thrilled to have brilliant
            brains behind Akai Space- Mr. Kunal, Mr. Himanshu, Mr. Daksh from IIT
            BOMBAY joining us for exclusive session. They took us through
            exciting journey of ideating and building Akai Space, sharing
            invaluable insights on what it takes to create and grow a startup in
            today's competitive landscape."`}
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 opacity-65 text-white py-2 px-4 rounded-md font-bold transition-colors duration-300 hover:bg-blue-700 mt-auto"
            >
              Registration Closed!
            </a>
          </div>
        </div>

        <div className="gradient-border w-full max-w-sm h-[875px]">
          <div className="bg-gradient-to-b from-[#6b21a875] to-[#22072971] rounded-bl-3xl rounded-tr-3xl shadow-lg p-4 text-center h-[870px] flex flex-col">
            <img
              src={img3}
              alt="Event 3"
              className="w-full h-[420px] rounded-lg object-cover"
            />
            <h3 className="audiowide-regular my-2 text-lg">
              Workshop on BLOCKCHAIN!
            </h3>
            <p className="text-white font-bold mb-2">Date: January 15, 2025</p>
            <p className="text-white italic my-2 text-justify">
              {` "The official Web3 society of SRMIST, Delhi NCR Campus, hosted a
            transformative hands-on workshop on blockchain technology. We were
            privileged to have two exceptional speakers from New York
            University, who brought unparalleled expertise and
            insights. Introducing our guest Mr. Adithyah Nair and Gokuleshwaram
            for an exclusive hands-on workshop on chain from NY university. He
            serves as head of Partnerships at Blockchain Lab NYU and CTO at
            celerizhq."`}
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 opacity-65 text-white py-2 px-4 rounded-md font-bold transition-colors duration-300 hover:bg-blue-700 mt-auto"
            >
              Registration Closed!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;

// bg-[#1f1f3d75]
