import Instructionsitems from "../components/Instructionsitems";
import Button from "../components/Button";
import { useQuestions } from "../context/QuestionsContext";

function Instuctions() {
  const { fullName } = useQuestions();
  return (
    <div className="mt-[-120px]">
      <h1 className="text-sm md:text-2xl text-center border-l-4 border-r-4 border-cpink  md:w-fit mx-auto md:px-5 px-3 mb-[30px] ">
        Welcome {fullName.toUpperCase()}, Before You Start let's Know The
        Interview Instructions...
      </h1>
      <Instructionsitems />
      <div className="text-center md:text-right mt-7  ">
        <Button navto="/quiz">Understand, Start The Interview</Button>
      </div>
    </div>
  );
}

export default Instuctions;
