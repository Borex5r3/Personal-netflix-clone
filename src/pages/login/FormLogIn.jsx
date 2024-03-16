import React, { useState } from "react";
import { logInForm } from "../home/data";
import InputUser from "./TemplateComponents/InputUser";
import { useLanguageContext } from "@/context";

const FormLogIn = () => {
  let { title, email, password, button, checkBox, question, footer } = {};
  const { language, setLanguage } = useLanguageContext();
  let languageIsArab = language === "arab";

  switch (language) {
    case "french":
      ({ title, email, password, button, checkBox, question, footer } =
        logInForm.French);
      break;
    case "arab":
      ({ title, email, password, button, checkBox, question, footer } =
        logInForm.Arab);
      break;

    default:
      ({ title, email, password, button, checkBox, question, footer } =
        logInForm.English);
      break;
  }
  return (
    <>
      <div className="w-full absolute md:hidden h-screen rounded-md bg-black min-w-[280px]"></div>
      <div
        className={`absolute md:w-[450px] w-full text-white rounded-md px-4 min-w-[280px] bg-black bg-opacity-75 h-[600px] sm:top-[80px] top-[100px] md:top-[150px] space-y-8 md:pt-[60px] md:px-[68px] md:pb-[40px] ${
          languageIsArab ? "text-end" : "text-start"
        }`}
      >
        <p className="text-[2.2rem]">{title}</p>
        <div className="space-y-3 text-[14px]">
          <InputUser email={email} />
          <InputUser password={password} />
        </div>
        <button className="w-full bg-red-700 py-4 rounded-md">{button}</button>
        <div className="w-full space-y-2">
          <div
            className={`w-full text-[#b3b3b3] flex justify-between text-[13px] ${
              languageIsArab ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`flex items-center space-x-1 ${
                languageIsArab ? "flex-row-reverse space-x-reverse" : ""
              }`}
            >
              <input type="checkbox" id="checkbox" defaultChecked/>
              <label htmlFor="checkbox" className="">
                {checkBox[0]}
              </label>
            </div>
            <p>{checkBox[1]}</p>
          </div>
          <div>
            <p className={`text-[#b3b3b3] text-[16px]`}>
              {question[0]}
              <span className="text-white">{question[1]}</span>
            </p>
          </div>
          <div>
            <p className="text-[#b3b3b3] text-[13px]">
              {footer[0]}
              <span className=" text-[#0071eb]">{footer[1]}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLogIn;
