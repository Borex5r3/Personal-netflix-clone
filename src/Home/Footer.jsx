import React, { useContext, useEffect } from "react";
import languages_logo from "../assets/languages-logo.png";
import { footerRedirectons } from "./data";
import { LanguageContext } from "./HomePage";
import { Languages } from "./RepetitiveConponents/Languages";


function Footer() {
  let { title, array, location } = {};
  const { language, setLanguage } = useContext(LanguageContext);
  switch (language) {
    case "french":
      ({ title, array, location } = footerRedirectons.French);
      break;
    case "arab":
      ({ title, array, location } = footerRedirectons.Arab);
      break;
    default:
      ({ title, array, location } = footerRedirectons.French);
      break;
  }
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  }
  return (
    <div className="bg-black w-full lg:h-[400px] h-[900px] text-gray-400 text-left text-[0.9rem] pt-[50px] border-[#232323] border-t-8 flex items-center">
      <div className="w-[60vw] mx-auto h-full space-y-5">
        <p className="underline font-semibold">{title}</p>
        <div className="grid lg:grid-rows-4 lg:grid-flow-col gap-y-[20px] lg:gap-x-[4px] underline">
          {array.map((item, index) => {
            return <p key={index + 1}>{item}</p>;
          })}
        </div>
        <Languages  labelTarget={'Footer'} languages_logo={languages_logo} handleLanguageChange={handleLanguageChange}  />
        <p>{location}</p>
      </div>
    </div>
  );
}

export default Footer;
