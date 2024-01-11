import { Footer } from "./Footer";
import React, { useState } from "react";
import BackgroundHomePage from "../home/BackgroundHomePage";
import NavBar from "../home/NavBar";
import { logInForm } from "../home/data";
import FormLogIn from "./FormLogIn";

const LogIn = () => {
  return (
    <div className="relative flex md:justify-center bg-black min-h-[1000px] md:h-screen text-[#737373] text-center">
      <BackgroundHomePage />
      <FormLogIn />
      <Footer />
      <NavBar renderInLogIn={true} />
    </div>
  );
};

export default LogIn;
