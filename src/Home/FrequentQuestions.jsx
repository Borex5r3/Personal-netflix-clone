import React, { useContext, useEffect, useState } from "react";
import EmailInput from "./RepetitiveConponents/EmailInput";
import plus_sign from "../assets/plus-sign.png";
import FrequentQuestionsTemplate from "./TemplateConponents/FrequentQuestionsTemplate";
import { faq } from "./data";
import { LanguageContext } from "./HomePage";

function FrequentQuestions() {
  // const [showAnswer, setShowAnswer] = useState(false);
  // const handleClick = () => {
  //   setShowAnswer(!showAnswer);
  // };
  const [anAnswerIsShowed, setAnAnswerIsShowed] = useState(
    Array.from({ length: 6 }, () => false)
  );
  let title;
  let array;
  const { language } = useContext(LanguageContext);
  let languageIsArab = false;
  switch (language) {
    case "french":
      title = faq.French[0];
      array = faq.French[1];
      break;
    case "arab":
      title = faq.Arab[0];
      array = faq.Arab[1];
      languageIsArab = true;
      break;
    default:
      title = faq.English[0];
      array = faq.English[1];
      break;
  }
  return (
    <div className="w-full text-white bg-black pt-12 pb-10 border-[#232323] border-t-8 overflow-hidden">
      <div className="w-full pb-10">
        <p className="text-[1.8rem] sm:text-[3rem] font-[700] mb-8">{title}</p>
        {array.map((item, index) => {
          const { question, answer } = item;
          return (
            <FrequentQuestionsTemplate
              question={question}
              answer={answer}
              key={index + 1}
              anAnswerIsShowed={anAnswerIsShowed}
              setAnAnswerIsShowed={setAnAnswerIsShowed}
              index={index}
              languageIsArab={languageIsArab}
            />
          );
        })}
      </div>
      <EmailInput labelTarget={"FrequentQuestions"} />
    </div>
  );
}

export default FrequentQuestions;
