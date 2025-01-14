import { useRef } from "react";

export default function Answer({answer, answerState, userAnswer, onSelect}) {
    const shufftedAnswers = useRef();
    if(!shufftedAnswers.current){
      shufftedAnswers.current = [...answer];
      shufftedAnswers.current.sort(() => Math.random() - 0.5)  
    }
    
    return <ul id="answers">
    {shufftedAnswers.current.map((answer) => {
      const isSelected = userAnswer === answer;
      let cssClass = ""
      if(answerState === 'answered' && isSelected) {
        cssClass = "selected"
      }
      if((answerState === "correct" || answerState === "wrong") && isSelected) {
        cssClass = answerState
      }
      return (
      <li className="answer" key={answer}>
        <button onClick={()=>onSelect(answer)} className={cssClass} disabled={answerState !== ""}>{answer}</button>
      </li>
    )}
    )}
  </ul>
}