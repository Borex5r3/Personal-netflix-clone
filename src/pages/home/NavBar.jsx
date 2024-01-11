import { Languages } from "./RepetitiveComponents/Languages";
import React, { useContext } from "react";
import img from "../../assets/netflix-logo-home.png";
import languages_logo from "../../assets/languages-logo.png";
import { Link } from "react-router-dom";
import { useLanguageContext } from "@/context";
// removed z-10
function NavBar({ renderInLogIn }) {
  // const { language, setLanguage } = useContext(LanguageContext);
  const { language, setLanguage } = useLanguageContext();
  let languageIsArab = language === "arab";
  let buttonText = "";
  switch (language) {
    case "french":
      buttonText = "S'identifier";
      break;
    case "arab":
      buttonText = "تسجيل الدخول";
      break;
    default:
      buttonText = "sign in";
      break;
  }
  return (
    <div
      className={`absolute flex ${
        languageIsArab ? "sm:flex-row-reverse" : "sm:flex-row"
      } flex-col justify-start sm:justify-between h-24 w-full min-w-[280px] items-center space-y-3 sm:space-y-0 bg-transparent`}
    >
      <Link to="/" className="sm:mt-0 mt-4">
        <img
          src={img}
          alt=""
          className={`h-12 w-50 ${
            languageIsArab
              ? "mr-[3vw] lg:mr-[10vw] 2xl:mr-[20vw]"
              : "ml-[3vw] lg:ml-[10vw] 2xl:ml-[20vw]"
          }`}
        />
      </Link>
      <div
        className={`flex items-center ${renderInLogIn ? "hidden" : ""} ${
          languageIsArab
            ? "flex-row-reverse sm:ml-[3vw] lg:ml-[10vw] 2xl:ml-[20vw] space-x-reverse"
            : "sm:mr-[3vw] lg:mr-[10vw] 2xl:mr-[20vw] flex-row"
        } space-x-5`}
      >
        <Languages labelTarget={"NavBar"} />
        <button
          className={`bg-red-600 rounded-md px-4 py-2 text-sm text-white hover:bg-red-700 font-semibold capitalize ${
            languageIsArab ? "ml-[40px]" : "mr-[40px]"
          } ml-[100px]`}
        >
          <Link to={"/login"}>{buttonText}</Link>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
