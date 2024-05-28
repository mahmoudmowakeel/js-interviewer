import { createContext, useContext, useRef, useState } from "react";
import toast from "react-hot-toast";

const QuestionContext = createContext();

const questionsObj = [
  {
    question: "What is the result of 2 + 2 in JavaScript?",
    answers: ["3", "4", "5", "6"],
    correctAnswer: "4",
    id: "6131",
  },
  {
    question:
      "What does the 'typeof' operator in JavaScript return for an array?",
    answers: ["object", "array", "string", "number"],
    correctAnswer: "object",
    id: "8a7a",
  },
  {
    question:
      "Which method is used to add a new element to the end of an array?",
    answers: ["append()", "push()", "addToEnd()", "insertLast()"],
    correctAnswer: "push()",
    id: "1ee8",
  },
  {
    question: "What keyword is used to declare a variable in JavaScript?",
    answers: ["var", "let", "new", "const"],
    correctAnswer: "var",
    id: "4701",
  },
  {
    question: "Which event is triggered when a user clicks on an HTML element?",
    answers: ["mouseover", "keydown", "click", "submit"],
    correctAnswer: "click",
    id: "9675",
  },
  {
    question: "What does the 'NaN' stand for in JavaScript?",
    answers: ["Not a Number", "No and Not", "New and Null", "None and No"],
    correctAnswer: "Not a Number",
    id: "ea0a",
  },
  {
    question:
      "Which method is used to remove the last element from an array in JavaScript?",
    answers: ["pop()", "removeLast()", "delete()", "splice()"],
    correctAnswer: "pop()",
    id: "1159",
  },
  {
    question: "What is the result of 10 * '10' in JavaScript?",
    answers: ["100", "'1010'", "NaN", "0"],
    correctAnswer: "100",
    id: "39cc",
  },
  {
    question: "What is the correct syntax for a 'for' loop in JavaScript?",
    answers: [
      "for (i <= 5; i++)",
      "for (i = 0; i < 5; i++)",
      "for (i = 0; i <= 5)",
      "for (i = 0; i < 5)",
    ],
    correctAnswer: "for (i = 0; i < 5; i++)",
    id: "cc5c",
  },
  {
    question:
      "Which function is used to print content to the console in JavaScript?",
    answers: ["console.log()", "print()", "write()", "display()"],
    correctAnswer: "console.log()",
    id: "ab14",
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    answers: [
      "the current function",
      "the previous element",
      "the global object",
      "the current object",
    ],
    correctAnswer: "the current object",
    id: "ae43",
  },
  {
    question:
      "Which method is used to join elements of an array into a string in JavaScript?",
    answers: ["concat()", "join()", "merge()", "combine()"],
    correctAnswer: "join()",
    id: "1638",
  },
];

function QuestionsProvider({ children }) {
  const [fullName, setFullName] = useState("");
  const spanRef = useRef(null);
  const resultRef = useRef(null);
  const [isLoading] = useState(false);
  const [questions] = useState(questionsObj);
  let [counter, setCounter] = useState(0);
  let [correctAnswers, setCorrectAnswers] = useState(["correct"]);
  let score = correctAnswers.length;
  let isPassed = correctAnswers.length >= 6;
  const [seconds, setSeconds] = useState(60);

  function handleRestart() {
    setCorrectAnswers(["correct"]);
    setCounter(0);
    setSeconds(60);
  }
  function handleNext(e) {
    e.target.style.display = "none";
    if (counter >= 11) {
      return null;
    } else {
      setCounter((counter = counter + 1));
      setSeconds(60);
    }
  }
  function handleNextBySec() {
    if (counter >= 11) {
      resultRef.current.style.display = "block";
      return null;
    } else {
      setCounter((counter = counter + 1));
      setSeconds(60);
    }
  }

  function handleStopAnswer(e) {
    e.target.parentElement.children[0].style.pointerEvents = "none";
    e.target.parentElement.children[1].style.pointerEvents = "none";
    e.target.parentElement.children[2].style.pointerEvents = "none";
    e.target.parentElement.children[3].style.pointerEvents = "none";
  }

  function checkAnswerAndStop(e, ref) {
    ref.current.style.display = "block";
    handleStopAnswer(e);
  }

  function handleAnswer(e, answer, counter) {
    if (counter !== 11) {
      console.log(counter);
      if (questions[counter].correctAnswer === answer) {
        checkAnswerAndStop(e, spanRef);
        setCorrectAnswers(["correct", ...correctAnswers]);
        e.target.classList.add("selected-true");
        toast.success(
          `Well Done! Correct Answer Your Score :  (${score}/12) (${Math.round(
            (score / 12) * 100
          )}%)`
        );
      } else {
        checkAnswerAndStop(e, spanRef);
        e.target.classList.add("selected-false");
        toast.error(`Sorry, Wrong Answer`);
      }
    } else {
      resultRef.current.style.display = "block";
      if (questions[counter].correctAnswer === answer) {
        setCorrectAnswers([...correctAnswers, "correct"]);
        e.target.classList.add("selected-true");
        handleStopAnswer(e);
        toast.success(
          `Well Done! Correct Answer Your Score :  (${score}/12) (${Math.round(
            (score / 12) * 100
          )}%)`
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
        spanRef,
        resultRef,
        seconds,
        setSeconds,
        handleNextBySec,
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
