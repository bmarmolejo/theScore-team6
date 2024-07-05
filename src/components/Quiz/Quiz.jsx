import "./Quiz.scss";
import React, { useState } from "react";
import Question from "../Question/Question";
import Points from "../../pages/Points/Points";
import quizData from "../../assets/data/data.json";

function Quiz() {
  const quiz = quizData.quiz;
  const [responses, setResponses] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [pointsData, setPointsData] = useState(quizData);

  const handleAnswerSelected = (selectedOption) => {
    const response = {
      question: quiz[currentQuestion].question,
      answer: selectedOption,
      correctAnswer: quiz[currentQuestion].answer,
    };

    setResponses((prevResponses) => [...prevResponses, response]);

    if (currentQuestion + 1 < quiz.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      quizData.users.forEach((user) => {
        if (user.name === "John Doe" && user.team === "Manchester United") {
          user.points += quizData.challenges[0].points;
        }
      });

      quizData.teams.forEach((team) => {
        if (team.team === "Manchester United") {
          team.points += quizData.challenges[0].points;
        }
      });

      setPointsData(quizData);
      setShowResult(true);
    }
  };

  return (
    <div className="quiz">
      {showResult ? (
        <Points pointsData={pointsData} responses={responses} />
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
