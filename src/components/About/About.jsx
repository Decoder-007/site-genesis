/* eslint-disable no-unused-vars */
import React from "react";

function About() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-end mt-30">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <button className="audiowide-regular bg-gradient-to-r from-[#de4dbc57] to-[#595ced59]  text-white py-2 px-10 rounded-full mb-4">
          About Us
        </button>
        <h1 className="audiowide-regular text-4xl md:text-6xl font-bold mb-4">
          Your Gateway to <span className="audiowide-regular text-pink-500">Web3</span> Innovation
        </h1>
        <p className="text-gray-300 text-justify mb-6 text-xl">
          We are dedicated to transforming the Web3 landscape with cutting-edge
          technology and creative freedom. Our expertise in blockchain, smart
          contracts, and DeFi empowers you to explore new possibilities. Join a
          vibrant community of innovators and bring your ideas to life with
          Genesis. Dive into educational resources, collaborate on
          groundbreaking projects, and connect with industry leaders. Embrace
          the future of the decentralized web with us.
        </p>
        <a
        className="px-4 py-2 bg-gradient-to-r from-[#DE4DBC] to-[#1D86C2] rounded-bl-xl rounded-tr-2xl text-white hover:from-[#e625b9]  hover:to-[#057fc5]"
        href="#"
      >
        Contact Us
      </a>
      </div>
    </div>
  );
}

export default About;
