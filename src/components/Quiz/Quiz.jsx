import "./Quiz.scss";
import React, { useState } from "react";
import Question from "../Question/Question";
import Result from "../Result/Result";
import quizData from "../../assets/data/data.json";

function Quiz() {
  const quiz = quizData.quiz;
  const [responses, setResponses] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelected = (selectedOption) => {
    console.log("currQues", currentQuestion);
    const response = {
      question: quiz[currentQuestion].question,
      answer: selectedOption,
      correctAnswer: quiz[currentQuestion].answer,
    };

    console.log("Selected Option:", selectedOption);
    console.log("Response:", response);
    setResponses((prevResponses) => [...prevResponses, response]);
    if (currentQuestion + 1 < quiz.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz">
      {showResult ? (
        <Result responses={responses} />
      ) : (
        <Question
          question={quiz[currentQuestion]}
          handleAnswerSelected={handleAnswerSelected}
        />
      )}
    </div>
  );
}

export default Quiz;
