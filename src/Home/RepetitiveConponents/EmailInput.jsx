import React, { useState } from "react";
import right_arrow from "../../assets/right-arrow.png";

function EmailInput({ labelTarget }) {
  const [inputValue, setInputValue] = useState("");
  const styleLabe =
    "text-[0.7rem] translate-y-[-24px] bg-black border-x-2 opacity-100 px-2";

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="space-y-[20px]">
      <p className="font-[400] lg:text-[1.5rem] text-[1rem]">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex justify-center space-x-[10px] flex-col md:flex-row space-y-[20px] md:space-y-0">
        <div
          className={`group relative w-[370px] h-[56px] border border-gray-300 opacity-80 rounded-md mx-auto md:mx-0`}
        >
          <label
            htmlFor={labelTarget}
            className={`absolute top-[1rem] left-[1rem] text-gray-300 opacity-80 group-focus-within:text-[0.7rem] group-focus-within:translate-y-[-24px] group-focus-within:bg-black group-focus-within:border-x-2 group-focus-within:opacity-100  group-focus-within:px-2 transition-all duration-500 ${
              inputValue ? styleLabe : ""
            }`}
          >
            Email address
          </label>
          <input
            type={labelTarget}
            id={labelTarget}
            onChange={handleInput}
            className="w-full h-full bg-inherit text-white pl-[1rem]"
          />
        </div>
        <div className="relative flex justify-center w-full md:w-auto">
          <button className="capitalize flex items-center space-x-3 h-full px-7 py-2 md:py-0 text-[1.5rem] font-medium bg-red-600 rounded-md hover:bg-red-700 duration-300">
            <p>get started</p>
            <img src={right_arrow} alt="" className=" w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailInput;
