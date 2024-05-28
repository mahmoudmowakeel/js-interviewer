import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const QuestionContext = createContext();

function QuestionsProvider({ children }) {
  const [fullName, setFullName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  let [counter, setCounter] = useState(0);
  let [correctAnswers, setCorrectAnswers] = useState(["correct"]);
  let score = correctAnswers.length;
  let isPassed = correctAnswers.length >= 6;

  useEffect(function () {
    async function fetchQuestions() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        setQuestions(data);
        setIsLoading(false);
        return data;
      } catch (err) {
        throw new Error(err.message);
      }
    }

    fetchQuestions();
  }, []);

  function handleRestart() {
    setCorrectAnswers(["correct"]);
    setCounter(0);
  }
  function handleNext(e) {
    e.target.style.display = "none";
    if (counter >= 11) {
      return null;
    } else {
      setCounter((counter = counter + 1));
    }
  }

  function handleStopAnswer(e) {
    e.target.parentElement.children[0].style.pointerEvents = "none";
    e.target.parentElement.children[1].style.pointerEvents = "none";
    e.target.parentElement.children[2].style.pointerEvents = "none";
    e.target.parentElement.children[3].style.pointerEvents = "none";
  }

  function handleAnswer(e, answer, counter) {
    if (counter !== 11) {
      if (questions[counter].correctAnswer === answer) {
        let btn = document.getElementById("next");
        btn.style.display = "block";
        setCorrectAnswers(["correct", ...correctAnswers]);
        e.target.classList.add("selected-true");
        handleStopAnswer(e);
        toast.success(
          `Well Done! Correct Answer Your Score :  (${
            correctAnswers.length
          }/12) (${Math.round((correctAnswers.length / 12) * 100)}%)`
        );
      } else {
        let btn = document.getElementById("next");
        btn.style.display = "block";
        e.target.classList.add("selected-false");
        handleStopAnswer(e);
        toast.error(`Sorry, Wrong Answer`);
      }
    } else {
      let btn = document.getElementById("result");
      btn.style.display = "block";
      if (questions[counter].correctAnswer === answer) {
        setCorrectAnswers(...correctAnswers, "correct");
        e.target.classList.add("selected-true");
        handleStopAnswer(e);
        toast.success(
          `Well Done! Correct Answer Your Score :  (${
            correctAnswers.length
          }/12) (${Math.round((correctAnswers.length / 12) * 100)}%)`
        );
      } else {
        e.target.classList.add("selected-false");
        handleStopAnswer(e);
        toast.error(`Sorry, Wrong Answer`);
      }
    }
  }

  return (
    <QuestionContext.Provider
      value={{
        questions,
        handleNext,
        counter,
        handleAnswer,
        correctAnswers,
        isPassed,
        fullName,
        setFullName,
        isLoading,
        handleRestart,
        score,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}

function useQuestions() {
  const context = useContext(QuestionContext);

  if (context === "undefined")
    throw new Error("This Context Is Used Outside Its Range");

  return context;
}

export { useQuestions, QuestionsProvider };
