import React, { useEffect, useState } from "react";
import plus_sign from "/src/assets/plus-sign.png";

function FrequentQuestionsTemplate({
  question,
  answer,
  setAnAnswerIsShowed,
  anAnswerIsShowed,
  index,
  languageIsArab,
}) {
  //   const [showAnswer, setShowAnswer] = useState(false);
  const handleClick = () => {
    // setShowAnswer(!showAnswer);
    let arr = Array.from({ length: 6 }, () => false);
    if (!anAnswerIsShowed[index]) arr[index] = true;
    setAnAnswerIsShowed(arr);
  };

  return (
    <div className="sm:w-[57vw] w-[300px] mb-[8px] h-max mx-auto space-y-[2px]">
      <button onClick={handleClick} className="w-full">
        <div
          className={`w-full h-max bg-neutral-800 hover:bg-neutral-600 mx-auto py-5 text-[1.5rem] ${
            languageIsArab ? "flex-row-reverse" : "text-left"
          } px-8 flex justify-between items-center`}
        >
          <p>{question}</p>
          <img
            src={plus_sign}
            alt=""
            className={`w-10 h-auto ${
              anAnswerIsShowed[index] ? "rotate-45" : ""
            } transition-all duration-200 `}
          />
        </div>
      </button>
      <div
        className={`w-full  bg-neutral-800 mx-auto text-[1.5rem] ${
          languageIsArab ? "text-right" : "text-left"
        } px-10 space-y-5  items-center ${
          anAnswerIsShowed[index] ? "py-5" : "h-0 overflow-hidden invisible"
        } transition-all duration-400`}
      >
        {answer.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
}

export default FrequentQuestionsTemplate;
