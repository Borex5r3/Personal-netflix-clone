import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import BackgroundHomePage from "./BackgroundHomePage";
import MembershipSignup from "./MembershipSignup";
import Footer from "./Footer";
import FrequentQuestions from "./FrequentQuestions";
import Header from "./Header";
import BodyContentTemplate from "./TemplateConponents/BodyContentTemplate";
import tv1 from "../assets/tv1.png";
import tv2 from "../assets/tv2.png";
import video1 from "../assets/video-tv1.m4v";
import girl_image from "../assets/girl-image.jpeg";
import video2 from "../assets/video-tv2.m4v";
import kids from "../assets/kids.png";
import { bodyContent } from "./data";

// import BG_HOMEPAGE from "../assets/bg-homepage.jpeg";

function HomePage() {
  return (
    <div className="h-screen w-full box-border bg-black">
      <Header />
      {bodyContent.map((item, index) => {
        const { title, text, image, video, reverseContent } = item;
        return (
          <BodyContentTemplate
            key={index}
            title={title}
            text={text}
            image={image}
            video={video}
            reverseContent={reverseContent}
          />
        );
      })}
      <FrequentQuestions />
      <Footer />
    </div>
  );
}

export default HomePage;
