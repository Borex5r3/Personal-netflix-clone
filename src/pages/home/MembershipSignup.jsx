import React, { useContext, useState } from "react";
import EmailInput from "./RepetitiveComponents/EmailInput";
import { signUpAndMailContent } from "./data";
import { useLanguageContext } from "@/context";

function MembershipSignup() {
  // const { language } = useContext(LanguageContext);
  const { language } = useLanguageContext();
  let { title, text } = {};
  switch (language) {
    case "french":
      ({ title, text } = signUpAndMailContent.MembershipSignup.French);
      break;
    case "arab":
      ({ title, text } = signUpAndMailContent.MembershipSignup.Arab);
      break;
    default:
      ({ title, text } = signUpAndMailContent.MembershipSignup.English);
      break;
  }

  return (
    <div
      className="absolute text-white w-full h-[600px] sm:top-[80px] top-[120px] space-y-[15px]"
      style={{
        fontFamily:
          "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
      }}
    >
      <div className="space-y-[20px] lg:text-[1.5rem] text-[1.2rem] font-[400] mt-[40px]">
        <div className="mt-[150px] lg:text-[3rem] text-[2rem] font-[700]">
          <p>{title}</p>
        </div>
        <p>{text}</p>
      </div>
      <EmailInput labelTarget={"MembershipSignup"} />
    </div>
  );
}

export default MembershipSignup;
