import React, { useEffect } from "react";
import { useQuestions } from "../context/QuestionsContext";

const CountdownTimer = () => {
  const { handleNextBySec, seconds, setSeconds } = useQuestions();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(intervalId);
          handleNextBySec();
          return 0;
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [setSeconds, handleNextBySec]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div>
      <p>
        {formatTime(minutes)}:{formatTime(remainingSeconds)}
      </p>
    </div>
  );
};

export default CountdownTimer;
