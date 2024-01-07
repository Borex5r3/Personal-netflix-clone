import React from "react";
import languages_logo from "../assets/languages-logo.png";
import { footerRedirectons } from "./data";

function Footer() {
  return (
    <div className="bg-black w-full lg:h-[400px] h-[900px] text-gray-400 text-left text-[0.9rem] pt-[50px] border-[#232323] border-t-8 flex items-center">
      <div className="w-[60vw] mx-auto h-full space-y-5">
        <p className="underline font-semibold">
          Questions? Contact us.
        </p>
        <div className="grid lg:grid-rows-4 lg:grid-flow-col gap-y-[20px] lg:gap-x-[4px] underline">
          {footerRedirectons.map((item, index) => {
            return <p key={index + 1}>{item}</p>;
          })}
        </div>
        <div className="flex items-center w-[140px] border space-x-2 border-gray-400 text-white rounded-md py-[6px] px-3">
          <label htmlFor="languagesFooter">
            <img src={languages_logo} alt="" className="w-5 h-5" />
          </label>
          <select
            name="language"
            id="languagesFooter"
            className="capitalize bg-inherit"
          >
            <option value="english">english</option>
            <option lang="fr" label="Français" value="fr-MA">
              Français
            </option>
            <option value="العربية">العربية</option>
          </select>
        </div>
        <p className="">Netflix Morocco</p>
      </div>
    </div>
  );
}

export default Footer;
