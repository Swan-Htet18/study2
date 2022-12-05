import React from "react";



export default function Buttons(props) {
  const [correctAnswers, setcorrectAnswers] = React.useState(0);
  const [quizEnded, setQuizEnded] = React.useState(false);

  function checkAnswers() {
    
    const btn = document.getElementsByClassName("answer");

    props.answers.forEach((answer) => { 
      if (answer.correct) {
        Array.from(btn).forEach((button) => {
          if (button.innerText === answer.answer) {
            button.classList.add("answer-correct");
          }
        });
      }
      if (!answer.correct && answer.selected) {
        Array.from(btn).forEach((button) => {
          if (button.innerText === answer.answer) {
            button.classList.add("answer-incorrect");
          }
        });
      }
    });

    props.answers.forEach((answer) => {
      if (answer.selected && answer.correct) {
        setcorrectAnswers((prevState) => prevState + 1);
      }
    });

    setQuizEnded(true);
  }

  if (quizEnded) {
    return (
      <div id="finalResult">
        <span className="quiz-results">
          You scored {correctAnswers}/5 correct answers
        </span>
        <button className="btn QuizPage-btn" onClick={props.startQuiz}>
          Play again
        </button>
      </div>
    );
  } else {
    return (
      <button
        className="btn QuizPage-btn"
        id="checkAnswer"
        onClick={checkAnswers}
      >
        Check answers
      </button>
    );
  }
}
