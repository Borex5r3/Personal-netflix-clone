import React, { useState } from "react";
import EmailInput from "./RepetitiveConponents/EmailInput";

function MembershipSignup() {
  return (
    <div
      className="absolute text-white w-full h-[600px] top-[80px] space-y-[15px]"
      style={{
        fontFamily:
          "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
      }}
    >
      <div className="space-y-[20px] lg:text-[1.5rem] text-[1.2rem] font-[400] mt-[40px]">
        <div className="mt-[150px] lg:text-[3rem] text-[2rem] font-[700]">
          <p>Unlimited movies, TV shows, and more</p>
        </div>
        <p>Watch anywhere. Cancel anytime.</p>
      </div>
      <EmailInput labelTarget={"MembershipSignup"} />
    </div>
  );
}

export default MembershipSignup;

// removed z-10
