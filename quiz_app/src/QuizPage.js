import React from "react";
import { nanoid } from "nanoid"
import {decode} from 'html-entities'
import Buttons from "./Buttons";

function QuizPage(props) {
    
    const [question,setQuestion] = React.useState([])



    React.useEffect(()=> {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setQuestion(data.results))
    },[]);


    const allAnswer = [];

    const questionMap = question.map((question) => {
        const answers = [];

        answers.push({
            answer: decode(question.correct_answer),
            correct: true,
            selected: false,
        });

        question.incorrect_answers.forEach(answer => {
            answers.push({
                answer :decode(answer),
                correct: false,
                selected: false,
            })
        });
        function randomSort() {
            return 0.5 - Math.floor();
        }

        function btnClick(e) {
            e.target.classList.toggle ("answerSelected");

            answers.forEach(answerEl => {
                if (e.target.innerText === answerEl.innerText) {
                    answerEl.selected = !answerEl.selected
                }
                allAnswer.push(answerEl);
            });
        }
        return (
            <div className="mainContainer">
                <div className="quixBx" key={nanoid()}>
                    <h3>{decode(question.question)}</h3>
                    <div className="ansBx" >
                        {answers.sort(randomSort).map(answerEl => {
                            return <button className="answer" key={nanoid()} onClick={btnClick}>{answerEl.answer}</button>
                        })}
                    </div>
                </div>
            </div>
        )
    })  

    return (
        <div className="mainContainer">
        
            {questionMap}
            <Buttons answers={allAnswer} startQuiz={props.startQuiz}/>
    
        </div>
    ) 
  
}

export default QuizPage;