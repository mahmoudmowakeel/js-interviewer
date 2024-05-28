import Answers from "./Answers";
import { useQuestions } from "../context/QuestionsContext";
import { useNavigate } from "react-router-dom";
import CountdownTimer from "./Timer";

function QuizItem({ questions }) {
  const { counter, handleNext, spanRef, resultRef } = useQuestions();
  const navigate = useNavigate();

  return (
    <>
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-xl mt-[-120px] mb-[70px] text-center font-semibold">
          {counter + 1} - {questions[counter]?.question}
        </h2>
        <p className="text-lg  mt-[-40px] mb-[30px] text-center border-x-8 border-x-cpink w-fit mx-auto px-10 font-semibold">
          {`${counter + 1} From 12`}
        </p>
        <Answers answers={questions[counter]?.answers} />
        <div className="relative">
          <div className="border-text border text-center md-py-2 md-px-[40px] py-1 px-[20px] text-sm md:text-lg absolute tracking-wider rounded-lg">
            <span>
              <CountdownTimer />
            </span>
          </div>
          <div className="text-right absolute right-0">
            {counter < 11 && (
              <button
                ref={spanRef}
                className="text-sm md:text-[17px] bg-most px-[20px] md:px-[50px] py-2 md:py-3 rounded-2xl w-fit text-white/90 hover:text-cpink hidden"
                onClick={(e) => handleNext(e)}
              >
                Next
              </button>
            )}
            {counter >= 11 && (
              <button
                ref={resultRef}
                className="text-sm md:text-[17px] bg-most px-[20px] md:px-[50px] py-2 md:py-3 rounded-2xl w-fit text-white/90 hover:text-cpink hidden"
                onClick={() => navigate("/result")}
              >
                See Results
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizItem;
