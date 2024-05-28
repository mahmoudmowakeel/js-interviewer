import { NavLink } from "react-router-dom";

function HeaderWelcome() {
  return (
    <div className="mx-auto w-[300px] mt-[10px] mb-[50px] text-center logo">
      <NavLink to="/" className="mt-3">
        <img
          src="./imgs/logo.png"
          alt="logo"
          className="w-[130px] h-[130px] mx-auto"
        />
      </NavLink>
      <span className="text-text text-2xl">JavaScript Interview</span>
    </div>
  );
}

export default HeaderWelcome;
