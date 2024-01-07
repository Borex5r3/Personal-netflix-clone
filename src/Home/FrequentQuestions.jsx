import React, { useEffect, useState } from "react";
import EmailInput from "./RepetitiveConponents/EmailInput";
import plus_sign from "../assets/plus-sign.png";
import FrequentQuestionsTemplate from "./TemplateConponents/FrequentQuestionsTemplate";
import { data } from "./data";

function FrequentQuestions() {
  const [showAnswer, setShowAnswer] = useState(false);
  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };
  const [anAnswerIsShowed, setAnAnswerIsShowed] = useState(
    Array.from({ length: 6 }, () => false)
  );
  return (
    <div className="w-full text-white bg-black pt-12 pb-10 border-[#232323] border-t-8">
      <div className="w-full pb-10">
        <p className="text-[3rem] font-[700] mb-8">
          Frequently Asked Questions
        </p>
        {data.map((item, index) => {
          const { question, answer } = item;
          return (
            <FrequentQuestionsTemplate
              question={question}
              answer={answer}
              key={index + 1}
              anAnswerIsShowed={anAnswerIsShowed}
              setAnAnswerIsShowed={setAnAnswerIsShowed}
              index={index}
            />
          );
        })}
      </div>
      <EmailInput labelTarget={"FrequentQuestions"} />
    </div>
  );
}

export default FrequentQuestions;
