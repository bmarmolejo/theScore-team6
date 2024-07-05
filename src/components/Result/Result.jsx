import { useState } from "react";

const Result = ({ responses }) => {
  const correctAnswersCount = responses.filter(
    (response) => response.answer === response.correctAnswer
  ).length;
  return (
    <div className="quiz-result">
      <h2 className="quiz-result__title">
        <span>Quiz Result</span>
      </h2>
      <p>
        You answered {correctAnswersCount} out of {responses.length} questions
        correctly.
      </p>
    </div>
  );
};

export default Result;
