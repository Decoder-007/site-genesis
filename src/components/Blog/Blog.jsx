/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";

// function App() {
//   const [cards, setCards] = useState([])
const Blog = () => {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    let a = await fetch("/blogs.json");
    let data = await a.json();
    setCards(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  // }

  return (
    <>
      <div className="min-h-screen mt-70">
        <div className="audiowide-regular text-5xl mr-20 ml-40 my-10">
          Blogs
        </div>
        <div className="flex my-10 w-[80vw] h-[30vh]  border-1 border-gray-500  bg-[#FFFFFF33] rounded-tr-2xl rounded-bl-2xl justify-self-center shadow-[0px_4px_20px_(#00000000)] ">
          <div className="container relative rounded-bl-2xl">
          <div className=" audiowide-regular box mt-[3vh] w-[38vw] pt-10 pb-5 px-10 text-3xl font-semibold">
          User-Friendly Interface
            </div>
            <div className="content overflow-hidden break-words px-10 w-[38vw] text-sm">
            Our intuitive platform allows users of all skill levels to create
              professional animations with ease. Beginners can quickly access
              powerful tools, while customizable templates and drag-and-drop
              features make the animation process simple and efficient.
            </div>
          </div>

          {/* IMAGE GOES HERE */}
          <div
            className="box w-[80vw] bg-cover rounded-tr-xl "
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(222,77,188,0.7), rgba(89,92,237,0.8)), url('/src/assets/Rect11.jpg')",
            }}
          >
            <img
              className="h-auto transform translate-x-55 -translate-y-60"
              src="src\assets\AI PIc-Photoroom 1.png"
            />
          </div>
        </div>

        <div className="flex w-[80vw] h-[30vh] justify-self-center gap-10 ">
          <div className="flex my-10  h-[30vh] border-1 border-gray-500  bg-[#FFFFFF33] rounded-tr-2xl rounded-bl-2xl justify-self-center shadow-[0px_4px_20px_(#00000000)] ">
            <div className="container relative rounded-bl-2xl">
              <div className=" audiowide-regular box mt-[3vh] w-[38vw] pt-10 pb-5 px-10 text-3xl font-semibold">
                Customization Options
              </div>
              <div className="content overflow-hidden break-words px-10 w-[38vw] text-sm">
                Easily customize every detail of your animation, from character
                appearance and movements to backgrounds. Use pre-designed
                templates for a quick, polished start, ensuring your animation
                perfectly reflects your creative vision.
              </div>
            </div>
          </div>

          <div className="flex my-10  h-[30vh]  border-1 border-gray-500  bg-[#FFFFFF33] rounded-tr-2xl rounded-bl-2xl justify-self-center shadow-[0px_4px_20px_(#00000000)] ">
            <div className="container relative rounded-bl-2xl">
            <div className=" audiowide-regular box mt-[3vh] w-[38vw] pt-10 pb-5 px-10 text-3xl font-semibold">
            Seamless Integration
              </div>
              <div className="content overflow-hidden break-words px-10 w-[38vw] text-sm">
                Easily integrate our animation software with Adobe and Figma for
                effortless asset import. Share your animations directly on
                social media, streamlining collaboration and saving time to
                focus on creativity.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
