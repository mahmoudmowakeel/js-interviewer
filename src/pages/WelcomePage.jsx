import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import WelcomeMsg from "../components/WelcomeMsg";
import { useQuestions } from "../context/QuestionsContext";
import HeaderWelcome from "../components/HeaderWelcome";

function WelcomePage() {
  const { fullName, setFullName } = useQuestions();
  const navigate = useNavigate();

  return (
    <>
      <HeaderWelcome />
      <div className=" text-sm text-center md:text-left felx flex-col mb-10 mx-auto max-w-[1900px]  md:text-2xl md:grid md:grid-cols-2 md:gap-8 ">
        <div>
          <WelcomeMsg />
        </div>
        <form
          onSubmit={() => navigate("/instructions")}
          className="flex flex-col gap-10 items-center"
        >
          <label className="text-red-400  tracking-wider text-text font-semibold border-l-4 border-r-4 border-cpink px-10">
            Please Enter Your Fullname
          </label>
          <input
            className="border border-text/40 text-[15px] w-[250px]  md:w-[400px] px-6  py-3 md:py-5 rounded-full bg-crose text-text mb-3 mt-4 md:mt-8  text-center uppercase "
            type="text"
            placeholder="your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <Button>Enter The Interview</Button>
        </form>
      </div>
    </>
  );
}

export default WelcomePage;
