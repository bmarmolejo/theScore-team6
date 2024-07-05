import { useState } from "react";
import quizImg from "../../assets/images/quiz-img.png";
import "./Question.scss";

const Question = ({ question, handleAnswerSelected }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    console.log("option", option);
    setSelectedOption(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("selectedOption", selectedOption);

    if (selectedOption) {
      handleAnswerSelected(selectedOption);
    }
  };

  return (
    <div className="question">
      <p className="question__tiny-text">Trivia</p>
      <div className="question__text">
        <span className="question__text-span">QUESTION {question.id}</span>
      </div>
      <img
        className="question__img"
        src={quizImg}
        alt="Image related to quiz"
      />
      <h3 className="question__text">{question.question}</h3>

      <p className="question__subtext">Pick your answer:</p>
      <div className="question__options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`question__option-btn ${
              selectedOption === option ? "selected" : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={!selectedOption}
        className="question__submit-btn"
      >
        Submit Answer
      </button>
    </div>
  );
};

export default Question;
