import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const WtmuNavbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 ">
        <img
          onClick={() => navigate("/")}
          src={assets.logo}
          alt="logo"
          className="w-12 sm:w-24 cursor-pointer"
        />
        <p>
          <h1 className="text-5xl text-green-700 font-semibold max-sm:115 ">
            World Tamil Music University
          </h1>
        </p>
        <button
          onClick={() => navigate("/admin")}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-green-700 text-yellow-300 px-10 py-2.5"
        >
          Login
          <img src={assets.arrow} className="w-3" alt="arrow" />
        </button>
      </div>
      <div>
        <hr className="text-green-700" />
      </div>
    </>
  );
};

export default WtmuNavbar;
