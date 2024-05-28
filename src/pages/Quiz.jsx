import QuizItem from "../components/QuizItem";
import { useQuestions } from "../context/QuestionsContext";

function Quiz() {
  const { questions } = useQuestions();
  return (
    <div>
      <QuizItem questions={questions} />
    </div>
  );
}

export default Quiz;
