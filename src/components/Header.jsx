import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="w-full bg-cpink logo tracking-[5px]">
      <div className="text-sm md:text-lg px-2 pb-4  text-most font-bold flex items-center ">
        <NavLink to="/" className="mt-7">
          <img
            src="./imgs/logo.png"
            alt="logo"
            className="md:w-[100px] md:h-[100px] w-[60px] h-[60px]"
          />
        </NavLink>
        <span className="text-text mt-7">JavaScript Interview</span>
      </div>
    </div>
  );
}

export default Header;
