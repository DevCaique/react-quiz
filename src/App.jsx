// Imports
import { useState } from "react";

// Style
import "./App.css";

const questions = [
  {
    questionText: "Qual elemento é usado para adicionar um parágrafo?",
    answerOpitions: [
      { answerText: `<h1>`, isCorret: false },
      { answerText: `<p>`, isCorret: true },
      { answerText: `<a>`, isCorret: false },
      { answerText: `<br>`, isCorret: false },
    ],
  },
  {
    questionText: "Qual elemento é usado para adicionar um link?",
    answerOpitions: [
      { answerText: `<h1>`, isCorret: false },
      { answerText: `<p>`, isCorret: false },
      { answerText: `<a>`, isCorret: true },
      { answerText: `<br>`, isCorret: false },
    ],
  },
  {
    questionText: "Qual elemento é usado para adicionar uma imagem?",
    answerOpitions: [
      { answerText: `<img>`, isCorret: true },
      { answerText: `<p>`, isCorret: false },
      { answerText: `<a>`, isCorret: false },
      { answerText: `<br>`, isCorret: false },
    ],
  },
  {
    questionText: "Qual elemento é usado para adicionar um cabeçalho?",
    answerOpitions: [
      { answerText: `<h1>`, isCorret: true },
      { answerText: `<p>`, isCorret: false },
      { answerText: `<a>`, isCorret: false },
      { answerText: `<br>`, isCorret: false },
    ],
  },
  {
    questionText: "Qual elemento é usado para adicionar uma tabela?",
    answerOpitions: [
      { answerText: `<h1>`, isCorret: false },
      { answerText: `<p>`, isCorret: false },
      { answerText: `<table>`, isCorret: true },
      { answerText: `<br>`, isCorret: false },
    ],
  },
  {
    questionText:
      "Qual elemento é usado para adicionar um título para a página?",
    answerOpitions: [
      { answerText: `<title>`, isCorret: true },
      { answerText: `<p>`, isCorret: false },
      { answerText: `<table>`, isCorret: false },
      { answerText: `<br>`, isCorret: false },
    ],
  },
];

export function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [corretAnswer, setCorretAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);

  const handleAnswer = (isCorret) => {
    if (isCorret === true) setCorretAnswer(true);
    if (isCorret !== true) setWrongAnswer(true);
    const timer = setInterval(() => {
      let nextQuestion = currentQuestion + 1;
      if (isCorret === true) {
        setScore(score + 1);
        setCorretAnswer(false);
      }
      setWrongAnswer(false);
      if (nextQuestion >= questions.length) return setShowScore(true);
      setCurrentQuestion(nextQuestion);
      clearInterval(timer);
    }, 1000);
  };

  return (
    <div className="application">
      <div className="quiz__area">
        <div className="quiz__component">
          {showScore ? (
            <div className="score__area">
              <div className="score">
                {score < 6
                  ? `Seu total de acerto foi ${score} de ${questions.length}`
                  : "Parábens acertou todos as 6 perguntas 👏 "}
              </div>
              <button
                className="reset-btn"
                onClick={() => window.location.reload()}
              >
                Resetar
              </button>
            </div>
          ) : (
            <div className="output">
              <h1 className="question">
                {questions[currentQuestion].questionText}
              </h1>
              <h2 className="current__question">
                Questão {currentQuestion + 1} de {questions.length}
              </h2>
              <div className="answer__area">
                {questions[currentQuestion].answerOpitions.map(
                  (answerOpition, index) => (
                    <div className="answer__component" key={index}>
                      <input
                        type="text"
                        className={
                          corretAnswer
                            ? "answer corret"
                            : "answer" && wrongAnswer
                            ? "answer wrong"
                            : "answer"
                        }
                        value={answerOpition.answerText}
                        readOnly
                        onClick={() => {
                          handleAnswer(answerOpition.isCorret);
                        }}
                      ></input>
                      <span className="correctIcon">✔️</span>
                      <span className="wrongIcon">❌</span>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
        {/* <div className="amor">te amo minha paixão 💖</div> */}
      </div>
    </div>
  );
}
