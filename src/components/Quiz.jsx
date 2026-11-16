import { useEffect, useState } from "react";
import questions from "../data/questions";
import QuestionCard from "./QuestionCard";
import Result from "./Result";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedScore = localStorage.getItem("score");

    if (savedScore) {
      setScore(JSON.parse(savedScore));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "score",
      JSON.stringify(score)
    );
  }, [score]);

  const handleAnswer = (option) => {
    if (
      option ===
      questions[currentQuestion].answer
    ) {
      setScore(score + 20);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);

    localStorage.removeItem("score");
  };

  if (currentQuestion >= questions.length) {
    return (
      <Result
        score={score}
        restart={restartQuiz}
      />
    );
  }

  return (
    <QuestionCard
      data={questions[currentQuestion]}
      handleAnswer={handleAnswer}
    />
  );
}

export default Quiz;