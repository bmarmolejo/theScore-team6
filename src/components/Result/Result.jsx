import React from "react";

const Result = ({ responses }) => {
  return (
    <div className="quiz-result">
      <h2 className="quiz-result__title">Quiz Result</h2>
      <ul className="quiz-result__list">
        {responses.map((response, index) => (
          <li key={index}>
            <strong>{response.question}</strong>: {response.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
