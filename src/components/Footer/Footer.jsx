// eslint-disable-next-line no-unused-vars
import React from "react";
import Genesis from "../../assets/Genesis.png";

function Footer() {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#DE4DBC] to-[#1D86C2] to-70% p-6 rounded-tr-4xl rounded-bl-4xl">
        <div className="flex flex-col items-center justify-center p-5 ">
          <div className="text-center">
            <h1 className="audiowide-regular text-6xl font-bold mb-4">
              Get in Touch with Us
            </h1>
            <p className="text-lg mb-8">
              Have a question or need support? We are here to help! Use the form{" "}
              <br />
              below for general inquiries, feedback, or assistance
            </p>
            <div className="flex items-center justify-center  ">
              <input
                className="p-3 bg-[#35353562] rounded-l-full w-64 md:w-96 "
                placeholder="Enter Your Email"
                type="email"
              />
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-r-full">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <hr className="my-6 border-t border-gray-300" />
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a className="text-white" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="text-white" href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="text-white" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="text-left ">
            <img alt="Genesis logo" className="  mx-auto" src={Genesis} />
          </div>
          <div className="hidden md:flex space-x-6">
            <a className="hover:text-gray-300" href="#">
              Home
            </a>
            <a className="hover:text-gray-300" href="#">
              About Us
            </a>
            <a className="hover:text-gray-300" href="#">
              Features
            </a>
            <a className="hover:text-gray-300" href="#">
              Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
