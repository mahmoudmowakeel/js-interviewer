import { useQuestions } from "../context/QuestionsContext";
import { HiOutlineTrophy } from "react-icons/hi2";

function FailedTest() {
  const { score } = useQuestions();
  return (
    <div className="text-center border-x-4 border-x-cpink w-fit mx-auto px-[60px] mt-[-100px] md:mt-[-100px]">
      <h1 className="text-[20px] md:text-[35px] tracking-wider text-text">
        You Failed !
        <span className="inline-block ml-4 text-3xl">
          <HiOutlineTrophy />
        </span>
      </h1>
      <p className="text-sm md:text-2xl mt-5 mb-3  md:mb-10">
        You Didn't Passed The Interview ! Practice More And Try Again .
      </p>
      <span className="text-[10px] md:text-xl text-text/80 ">{`Your Score :  (${
        score - 1
      }/12) (${Math.round(((score - 1) / 12) * 100)}%)`}</span>
    </div>
  );
}

export default FailedTest;
