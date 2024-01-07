import React from "react";
import BackgroundHomePage from "./BackgroundHomePage";
import NavBar from "./NavBar";
import MembershipSignup from "./MembershipSignup";

function Header() {
  return (
    <div className={`relative overflow-hidden top-0 md:h-[680px] h-[900px] w-full flex`}>
      <BackgroundHomePage />
      <NavBar />
      <MembershipSignup />
    </div>
  );
}

export default Header;
