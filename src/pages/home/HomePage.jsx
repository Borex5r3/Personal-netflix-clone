import React, { createContext, useState } from "react";
import Footer from "./Footer";
import FrequentQuestions from "./FrequentQuestions";
import Header from "./Header";
import BodyContentTemplate from "./TemplateComponents/BodyContentTemplate";
import { bodyContent } from "./data";
import { useLanguageContext } from "@/context";

// export const LanguageContext = createContext();

function HomePage() {
  // const [language, setLanguage] = useState("english");
  const {language, setLanguage} = useLanguageContext();
  let array;
  switch (language) {
    case "french":
      array = bodyContent.French;
      break;
    case "arab":
      array = bodyContent.Arab;
      break;
    default:
      array = bodyContent.English;
      break;
  }
  return (
      <div className="h-screen text-center w-full box-border bg-black">
        <Header />
        {array.map((item, index) => {
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
