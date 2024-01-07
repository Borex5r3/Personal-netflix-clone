import { Button } from "@/components/ui/button";
import React from "react";
import img from "../assets/netflix-logo-home.png";
import languages_logo from "../assets/languages-logo.png";
import icon from "../assets/icon.svg";
// removed z-10
function NavBar() {
  return (
    <>
      <div className="absolute flex justify-between h-24 w-full items-center bg-transparent">
        <a href="/">
          <img
            src={img}
            alt=""
            className="w-50 h-12 ml-[3vw] lg:ml-[10vw] 2xl:ml-[20vw]"
          />
        </a>
        <div className="flex space-x-5 items-center mr-[3vw] lg:mr-[10vw] 2xl:mr-[20vw]">
          <div className="flex items-center border space-x-2 h-min border-gray-400 text-white rounded-md capitalize py-[6px] px-3">
            <label htmlFor="languages">
              <img src={languages_logo} alt="" className="w-5 h-5" />
            </label>
            <select
              name="language"
              id="languages"
              className="capitalize bg-inherit"
            >
              <option value="english">english</option>
              <option lang="fr" label="Français" value="fr-MA">
                Français
              </option>
              <option value="العربية">العربية</option>
            </select>
          </div>
          <button className="bg-red-600 rounded-md px-4 py-2 text-sm text-white hover:bg-red-700 font-semibold capitalize mr-[40px]">
            sign in
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
