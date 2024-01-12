import React, { useEffect } from "react";

const BodyContentTemplate = ({ title, text   , image, video, reverseContent }) => {

  return (
    <div
      className={`flex items-center flex-col lg:h-[750px] h-[900px] text-white text-left bg-black border-[#232323] border-t-8 ${
        reverseContent ? "lg:flex-row-reverse flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div
        className={`lg:w-1/2 w-full lg:py-60 lg:h-full flex flex-col justify-center h-2/4  py-0  pl-20 pr-8 space-y-5 ${
          reverseContent ? "pl-10 pr-20 2xl:pl-4 2xl:pr-[27vw] lg:pl-0 lg:pr-4" : "lg:pr-0 2xl:pl-[27vw] lg:pl-[3vw]"
        }`}
      >
        <p className="lg:text-[2.8rem] lg:font-[700] text-[2rem] font-[700]">{title}</p>
        <p className="lg:text-[1.6rem] text-[1.2rem]">{text}</p>
      </div>
      <div
        className={`relative w-full flex h-full  justify-center ${
          reverseContent ? "lg:justify-end" : "lg:justify-start"
        } items-center`}
      >
        <img
          src={image}
          alt=""
          className="absolute w-[600px] md:w-4/5 md:h-4/5 lg:w-[800px] lg:h-auto"
        />
        {video && (
          <div className="w-4/5 h-4/5 lg:w-[800px] lg:h-auto flex justify-center items-center">
            <video src={video} muted autoPlay loop className=""></video>
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyContentTemplate;
