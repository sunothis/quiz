import { useState } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  const [started, setStarted] =
    useState(false);

  return (
    <>
      {!started ? (
        <Home
          startQuiz={() => setStarted(true)}
        />
      ) : (
        <Quiz />
      )}
    </>
  );
}

export default App;