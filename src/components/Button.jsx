import { useNavigate } from "react-router-dom";

function Button({ children, navto, action }) {
  const navigate = useNavigate();
  return (
    <button
      className="text-[10px] md:text-[15px] bg-most px-10 md:px-20 py-2 md:py-3 rounded-2xl w-fit text-white/90 hover:text-cpink"
      onClick={() => {
        navigate(navto);
        action();
      }}
    >
      {children}
    </button>
  );
}

export default Button;
