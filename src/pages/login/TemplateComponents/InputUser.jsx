import { useLanguageContext } from "@/context";
import React, { useState } from "react";

function InputUser({ email, password }) {
  const [emailValue, setEmailValue] = useState("");
  const styleLabe =
    "text-[0.7rem] translate-y-[-24px] bg-black border-x-2 opacity-100 px-2";
  const { language, setLanguage } = useLanguageContext();
  let languageIsArab = language === "arab";

  const handleInput = (e) => {
    setEmailValue(e.target.value);
  };
  return (
    <div className={`flex items-center group py-4 bg-[#333] rounded-md ${languageIsArab ? 'justify-end pr-4' : 'pl-4'}`}>
      <label
        htmlFor={email || password}
        className={`absolute text-[#8c8c8c] opacity-80 group-focus-within:text-[0.7rem] group-focus-within:translate-y-[-24px] group-focus-within:bg-black group-focus-within:border-x-2 group-focus-within:opacity-100  group-focus-within:px-2 transition-all duration-300 ${
          emailValue ? styleLabe : ""
        }`}
      >
        {email || password}
      </label>
      <input
        onChange={handleInput}
        type={password ? "password" : "text"}
        id={email || password}
        className="w-full h-full py-1 bg-inherit text-white outline-none"
      />
    </div>
  );
}

export default InputUser;
