import React from 'react';

const Question = ({ data, handleAnswer }) => {
  return (
    <div className="question-box">
      <h2>{data.question}</h2>
      <div>
        {data.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
