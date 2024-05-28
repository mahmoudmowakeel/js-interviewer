import { useQuestions } from "../context/QuestionsContext";
import { animated, useSpring } from "@react-spring/web";

function Answers({ answers }) {
  const { counter, handleAnswer, questions } = useQuestions();
  const springs = useSpring({
    from: { x: -2000 },
    to: { x: 0 },
    delay: 100,
  });

  return (
    <animated.div style={springs}>
      {answers?.map((answer) => (
        <span
          style={springs}
          onClick={(e) => handleAnswer(e, answer, counter)}
          className="text-md md:text-xl border border-text/40 text-text py-2 text-center max-w-[550px] mx-auto mb-5 hover:bg-cpink hover:text-white hover:border-cpink transition-all duration-500 hover:translate-x-10 hover:font-semibold block cursor-pointer	 "
          key={questions[counter]?.id + answer}
        >
          {answer}
        </span>
      ))}
    </animated.div>
  );
}

export default Answers;
