import { HiClipboardDocumentList } from "react-icons/hi2";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import { HiClock } from "react-icons/hi2";
import { HiMiniRocketLaunch } from "react-icons/hi2";

function Instructionsitems() {
  return (
    <ul className="text-[12px] md:text-xl leading-8 md:leading-[50px] text-text/80">
      <li>
        - This Interview Quiz Consists Of 12 Questions .
        <span className="inline-block">
          <HiClipboardDocumentList />
        </span>
      </li>
      <li>
        - To Pass This Interview You Should Get Up To (50%) Correct Answers [At
        Least 6 Correct Answers From 12] .
        <span className="inline-block">
          <HiClipboardDocumentCheck />
        </span>
      </li>
      <li>
        - After Choosing Answer You Can't Edit It .
        <span className="inline-block">
          <HiClipboardDocumentCheck />
        </span>
      </li>
      <li>
        - For Every Question You Have Only 1 min To Answer It .
        <span className="inline-block">
          <HiClock />
        </span>
      </li>
      <li>
        - If The Timer Of The Question Ended , You Will Be Moved To The Next
        Question And The Previous One Will Be Counted As Wrong .
        <span className="inline-block">
          <HiMiniRocketLaunch />
        </span>
      </li>
    </ul>
  );
}

export default Instructionsitems;
