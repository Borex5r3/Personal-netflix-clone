import React from "react";
import { footerRedirectons } from "./data";
import { Languages } from "./RepetitiveComponents/Languages";
import { useLanguageContext } from "@/context";

function Footer() {
  let { title, array, location } = {};
  const { language, setLanguage } = useLanguageContext();
  switch (language) {
    case "french":
      ({ title, array, location } = footerRedirectons.French);
      break;
    case "arab":
      ({ title, array, location } = footerRedirectons.Arab);
      break;
    default:
      ({ title, array, location } = footerRedirectons.English);
      break;
  }
  return (
    <div className="bg-black w-full lg:h-[450px] h-[950px] text-gray-400 text-left text-[0.9rem] pt-[50px] border-[#232323] border-t-8 flex items-center">
      <div className="w-[60vw] mx-auto h-full space-y-5">
        <p className="underline font-semibold">{title}</p>
        <div className="grid lg:grid-rows-4 lg:grid-flow-col gap-y-[20px] lg:gap-x-[4px] underline">
          {array.map((item, index) => {
            return <p key={index + 1}>{item}</p>;
          })}
        </div>
        <Languages
          labelTarget={"Footer"}
        />
        <p>{location}</p>
        <p className="capitalize">
          © made with ❤️ by <span className="text-blue-500">Borex</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
