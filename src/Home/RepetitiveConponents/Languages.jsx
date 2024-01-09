import React from "react";
export function Languages({
  languages_logo,
  labelTarget,
  handleLanguageChange,
}) {
  return (
    <div className="flex items-center border w-[90px] sm:w-[140px] sm:space-x-2 space-x-0 h-min border-gray-400 text-white rounded-md  py-[6px] sm:px-3">
      <label htmlFor={labelTarget} className="sm:block hidden">
        <img src={languages_logo} alt="" className="w-5 h-5" />
      </label>
      <select
        name={labelTarget}
        id={labelTarget}
        className="capitalize bg-inherit"
        onChange={handleLanguageChange}
      >
        <option value="english">english</option>
        <option lang="fr" label="Français" value="french">
          Français
        </option>
        <option value="arab">العربية</option>
      </select>
    </div>
  );
}
