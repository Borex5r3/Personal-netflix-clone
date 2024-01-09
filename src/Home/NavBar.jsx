import { Languages } from './RepetitiveConponents/Languages';
import React, { useContext } from "react";
import img from "../assets/netflix-logo-home.png";
import languages_logo from "../assets/languages-logo.png";
import { LanguageContext } from "./HomePage";
// removed z-10
function NavBar() {
  const { setLanguage } = useContext(LanguageContext);
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  }
  return (
    <>
      <div className="absolute flex flex-col sm:flex-row justify-start sm:justify-between h-24 w-full items-center space-y-3 sm:space-y-0 bg-transparent">
        <a href="/" className='sm:mt-0 mt-4'>
          <img
            src={img}
            alt=""
            className="h-12 w-50 ml-[3vw] lg:ml-[10vw] 2xl:ml-[20vw]"
          />
        </a>
        <div className="flex space-x-5 items-center sm:mr-[3vw] lg:mr-[10vw] 2xl:mr-[20vw]">
          <Languages   languages_logo={languages_logo} handleLanguageChange={handleLanguageChange} labelTarget={'NavBar'} />
          <button className="bg-red-600 rounded-md px-4 py-2 text-sm text-white hover:bg-red-700 font-semibold capitalize mr-[40px]">
            sign in
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
