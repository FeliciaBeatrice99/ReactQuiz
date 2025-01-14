import Progress from "./Progress";
import Answer from "./Answer";
import QUESTIONS from "../questions";
import { useState } from "react";
export default function Questions({onNull, onSelect, questionIndex}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  })

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null
    })
    setTimeout(()=>{
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[questionIndex].answers[0] === answer
      })
      setTimeout(()=>{
        onSelect(answer)
      }, 2000)
    }, 1000)
  }

  let answerState = '';
  if(answer.selectedAnswer && answer.isCorrect !== null){
    answerState = answer.isCorrect ? "correct" : "wrong"
  } else if (answer.selectedAnswer) {
    answerState = "answered"
  }
  console.log(answerState)
  
    return <div id="question">
        <Progress timeOut={10000} onTimeout={onNull}/>
        <h2>{QUESTIONS[questionIndex].text}</h2>
        <Answer answer={QUESTIONS[questionIndex].answers} answerState={answerState} userAnswer={answer.selectedAnswer} onSelect={handleSelectAnswer}/>
  </div>
}