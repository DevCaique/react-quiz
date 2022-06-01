// Imports
import { useState } from "react";

// Style
import "./App.css";

const questions = [
  {
    questionText: "Qual elemento usa para adicionar um parágrafo?",
    answerOpitions: [
      { answerText: "<h1>", isCorret: false },
      { answerText: "<p>", isCorret: true },
      { answerText: "<a>", isCorret: false },
      { answerText: "<br>", isCorret: false },
    ],
  },
  {
    questionText: "Qual elemento usa para adicionar um link?",
    answerOpitions: [
      { answerText: "<h1>", isCorret: false },
      { answerText: "<p>", isCorret: false },
      { answerText: "<a>", isCorret: true },
      { answerText: "<br>", isCorret: false },
    ],
  },
  {
    questionText: "Qual elemento usa para adicionar uma imagem",
    answerOpitions: [
      { answerText: "<img>", isCorret: true },
      { answerText: "<p>", isCorret: false },
      { answerText: "<a>", isCorret: false },
      { answerText: "<br>", isCorret: false },
    ],
  },
  {
    questionText: "Qual elemento usa para adicionar um cabeçalho?",
    answerOpitions: [
      { answerText: "<h1>", isCorret: true },
      { answerText: "<p>", isCorret: false },
      { answerText: "<a>", isCorret: false },
      { answerText: "<br>", isCorret: false },
    ],
  },
  {
    questionText: "Qual elemento usa para adicionar uma tabela?",
    answerOpitions: [
      { answerText: "<h1>", isCorret: false },
      { answerText: "<p>", isCorret: false },
      { answerText: "<table>", isCorret: true },
      { answerText: "<br>", isCorret: false },
    ],
  },
  {
    questionText: "Qual elemento usa para adicionar um título para a página?",
    answerOpitions: [
      { answerText: "<title>", isCorret: true },
      { answerText: "<p>", isCorret: false },
      { answerText: "<table>", isCorret: false },
      { answerText: "<br>", isCorret: false },
    ],
  },
];

export function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorret) => {
    let nextQuestion = currentQuestion + 1;
    console.log(isCorret === true);
    if (isCorret === true) setScore(score + 1);
    if (nextQuestion >= questions.length) return alert(score);
    setCurrentQuestion(nextQuestion);
  };

  return (
    <div className="application">
      <div className="quiz__area">
        <div className="quiz__component">
          <p className="question">
            Questão {currentQuestion + 1}/{questions.length} --- {score}
          </p>
          <div className="question">
            {questions[currentQuestion].questionText}
          </div>
          <div className="answer__area">
            {questions[currentQuestion].answerOpitions.map((answerOpition) => (
              <p
                className="answer"
                onClick={() => handleAnswer(answerOpition.isCorret)}
                key={answerOpition.id}
              >
                {answerOpition.answerText}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="amor">te amo minha paixão 💖</div> */
}
