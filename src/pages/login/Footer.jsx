import { useLanguageContext } from "@/context";
import React from "react";
import { Languages } from "../home/RepetitiveComponents/Languages";
import { logInFooter } from "../home/data";

export function Footer() {
  const { language } = useLanguageContext();
  let languageIsArab = language === "arab";
  let { title, array } = {};
  switch (language) {
    case "french":
      ({ title, array } = logInFooter.French);
      break;
    case "arab":
      ({ title, array } = logInFooter.Arab);
      break;
    default:
      ({ title, array } = logInFooter.English);
      break;
  }
  return (
    <>
      <div
        className={`w-full min-w-[280px] flex flex-col md:items-center bg-black md:bg-opacity-55 border-[#737373] border-t-2 md:border-0 py-14 absolute bottom-0 md:text-[0.7rem]`}
      >
        <div
          className={`flex flex-col space-y-5 md:max-w-[1000px] w-full ${
            languageIsArab
              ? "pr-4 md:pr-8 items-end text-end"
              : "pl-4 md:pl-8 items-start text-start"
          }`}
        >
          <p className="text-[1.3rem] md:text-[1rem]">{title}</p>
          <div className="grid sm:grid-cols-2 gap-y-4 w-full md:grid-cols-3 xl:grid-cols-4">
            {array.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
          <Languages labelTarget={"LogIn"} />
          {/* <p className="capitalize">
         © made with ❤️ by <span className="text-blue-500">Borex</span>
        </p> */}
          <div className="absolute capitalize py-0 sm:py-4 text-start bottom-0 min-w-[200px]">
            <p>
              © made with ❤️ by{" "}
              <a
                className="text-blue-500"
                href="https://github.com/Borex5r3"
                target="_blank"
              >
                Borex
              </a>{" "}
              (a devoted admirer of{" "}
              <a
                href="https://github.com/Hellio404"
                target="_blank"
                className="text-blue-500"
              >
                Hellio
              </a>
              )
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
