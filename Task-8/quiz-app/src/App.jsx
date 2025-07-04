import React, { useState } from "react";
import Question from "./components/Question";
import { questions } from "./data/questions";

function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[currentQ].answer) {
      setScore(score + 1);
    }
    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {showResult ? (
        <div>
          <h2>Your score: {score} / {questions.length}</h2>
        </div>
      ) : (
        <Question data={questions[currentQ]} handleAnswer={handleAnswer} />
      )}
    </div>
  );
}

export default App;
