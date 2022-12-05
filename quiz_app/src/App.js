import StartPage from "./StartPage";
import QuizPage from "./QuizPage";
import React from "react";

function App() {
  const [isStart,setIsStart] = React.useState(false)
function startQuiz() {
  setIsStart(prevIsStart => !prevIsStart)

  }

  return (
    <div className="App">
        {isStart?<QuizPage/>: <StartPage startQuiz={startQuiz}/>}
    </div>
  );
}

export default App;
