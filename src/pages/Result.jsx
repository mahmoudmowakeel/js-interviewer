import Button from "../components/Button";
import FailedTest from "../components/FailedTest";
import PassedTest from "../components/PassedTest";
import { useQuestions } from "../context/QuestionsContext";

function Result() {
  const { handleRestart, isPassed, correctAnswers } = useQuestions();

  console.log(correctAnswers.length);

  return (
    <div className="flex  flex-col text-center">
      {isPassed && <PassedTest />}
      {!isPassed && <FailedTest />}

      <div className="mt-[50px]">
        <Button navto="/instructions" action={handleRestart}>
          Test Yourself Again 😁
        </Button>
      </div>
    </div>
  );
}

export default Result;
