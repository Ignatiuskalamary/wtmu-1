import { assets } from "../assets/assets";
import { GiStarFormation } from "react-icons/gi";

const WtmuHeader = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-yellow-400  bg-yellow-100 rounded-full text-sm text-green-700">
          <p>New:Courses integrated</p>
          <GiStarFormation className="text-green-700" />
          {/* <img src={assets.star_icon} className="w-2.5" alt="" /> */}
        </div>

        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 bg-gradient-to-br from-green-500 via-yellow-400 to-green-500 bg-clip-text text-transparent">
          Your music Learning <br />
          University WTMU.
        </h1>
        <p className=" my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs">
          Join a vibrant community of artists, performers, and creators at a
          university where passion meets excellence. With expert faculty,
          state-of-the-art facilities, and performance opportunities, we nurture
          talent across classical, jazz, production, and more. Whether you dream
          of the stage, studio, or classroom, we provide the skills,
          connections, and inspiration to make your musical future
          extraordinary. Start your journey today! 🎶✨
        </p>
        <form className="flex justify-between max-w-lg max-sm:scale-75 mx-auto  border border-yellow-400  bg-yellow-100 rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search Course"
            required
            className="w-full  pl-4 outline-none"
          />
          <button
            className="bg-green-700 text-yellow-400 px-8 py-2 m-1.5  hover:scale-105 rounded transition-all cursor-pointer"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-1 opacity-50"
      />
    </div>
  );
};

export default WtmuHeader;
