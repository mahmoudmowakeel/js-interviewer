import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLatout() {
  return (
    <div>
      <Header />
      <div className="px-[30px] md:px-[80px] pt-[170px]">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLatout;
