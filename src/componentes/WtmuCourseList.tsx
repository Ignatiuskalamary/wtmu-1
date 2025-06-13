import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import WtmuCourseCard from "./WtmuCourseCard";
import { wtmu_data, wtmuCategories } from "../assets/assets";

interface Courses {
  _id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  // Add other properties that exist in your course objects
  [key: string]: string | number | boolean | undefined;
}

const WtmuCourseList: React.FC = () => {
  const [menu, setMenu] = useState<string>("All");

  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
        {wtmuCategories.map((item: string) => (
          <div key={item} className="relative">
            <button
              onClick={() => setMenu(item)}
              className={`cursor-pointer text-green-700 ${
                menu === item && "text-yellow-400 px-4 pt-0.5"
              }`}
            >
              {item}
              {menu === item && (
                <Motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute left-0 right-0 top-0 h-7 -z-10 bg-green-700 rounded-full"
                />
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {wtmu_data
          .filter((course: Courses) =>
            menu === "All" ? true : course.category === menu
          )
          .map((course: Courses) => (
            <WtmuCourseCard key={course._id} course={course} />
          ))}
      </div>
    </div>
  );
};

export default WtmuCourseList;
