import React, { createContext, useState } from "react";
import Footer from "./Footer";
import FrequentQuestions from "./FrequentQuestions";
import Header from "./Header";
import BodyContentTemplate from "./TemplateConponents/BodyContentTemplate";
import { bodyContent } from "./data";

export const LanguageContext = createContext();

function HomePage() {
  const [language, setLanguage] = useState("english");
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
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="h-screen w-full box-border bg-black">
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
    </LanguageContext.Provider>
  );
}

export default HomePage;
