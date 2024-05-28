import { useNavigate } from "react-router-dom";
import { useQuestions } from "../context/QuestionsContext";
import { useEffect } from "react";
import { FidgetSpinner } from "react-loader-spinner";

function ProtectedRoute({ children }) {
  const { isLoading, fullName } = useQuestions();
  const navigate = useNavigate();

  useEffect(() => {
    if (!fullName && !isLoading) {
      navigate("/welcome");
    }
  }, [fullName, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="w-[100vh] flex items-center justify-center bg-text/70">
        <FidgetSpinner />
      </div>
    );

  if (fullName) return children;
}

export default ProtectedRoute;
