import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import Questions from "./Questions";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;   
    

    const handleSelectedAnswer = useCallback(function handleSelectedAnswer(answer) {
      setUserAnswers((prevAnswer) => [...prevAnswer, answer])

    },[])

    const handleNullAnswer = useCallback(()=>handleSelectedAnswer(null),[handleSelectedAnswer])

    
    if (quizIsComplete) {
      return (
        <div id="summary">
          <img src={quizCompleteImg} alt="Trophy icon" />
          <h2>Quiz Completed!</h2>
        </div>
      );
    }
      
      
      return <div id="quiz">
      <Questions key={activeQuestionIndex} questionIndex={activeQuestionIndex} onNull={handleNullAnswer}onSelect={handleSelectedAnswer}/>
      
      
  </div>
    }
