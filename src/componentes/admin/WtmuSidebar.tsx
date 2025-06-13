import React from "react";
import { NavLink } from "react-router-dom";
import { BsQuestionSquare } from "react-icons/bs";
import { MdOutlineAdminPanelSettings, MdGolfCourse } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { FaUsers, FaList } from "react-icons/fa6";
import { BsFillQuestionCircleFill } from "react-icons/bs";

interface SidebarItem {
  path: string;
  icon: React.ReactNode;
  label: string;
  end?: boolean;
}

const WtmuSidebar: React.FC = () => {
  const sidebarItems: SidebarItem[] = [
    {
      path: "/admin",
      icon: (
        <MdOutlineAdminPanelSettings className="text-green-700" size={20} />
      ),
      label: "Admin Dashboard",
      end: true,
    },
    {
      path: "/admin/Wtmunewuserlist",
      icon: <FaUsers className="text-green-700" size={20} />,
      label: "New Users List",
      end: true,
    },

    {
      path: "/admin/Wtmustudentlist",
      icon: <FaUsers className="text-green-700" size={18} />,
      label: "Student Lists",
    },
    {
      path: "/admin/Wtmucourseslist",
      icon: <FaList className="text-green-700" size={18} />,
      label: "Course List",
      end: true,
    },
    {
      path: "/admin/teacherlistWtmu",
      icon: <GiTeacher className="text-green-700" size={20} />,
      label: "Teachers List",
    },
    {
      path: "/admin/Wtmuaddcourse",
      icon: <MdGolfCourse className="text-green-700" size={20} />,
      label: "Add Course",
    },
    {
      path: "/admin/addwtmuquestions",
      icon: <BsQuestionSquare className="text-green-700" size={18} />,
      label: "Add Questions",
    },
    {
      path: "/admin/Wtmuquestionslist",
      icon: <BsFillQuestionCircleFill className="text-green-700" size={18} />,
      label: "Questions List",
    },
    // {
    //   path: "/admin/Wtmucomments",
    //   icon: <FaComments className="text-green-700" size={18} />,
    //   label: "Comments",
    // },
  ];

  return (
    <div className="flex flex-col border-r border-gray-200 min-h-full pt-6 w-full">
      {sidebarItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.end}
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 md:px-6 lg:px-9 md:min-w-64 cursor-pointer transition-colors duration-200 hover:bg-yellow-50 ${
              isActive
                ? "bg-yellow-50 border-r-4 border-green-700 font-medium"
                : ""
            }`
          }
        >
          {item.icon}
          <span className="hidden md:inline-block text-gray-700">
            {item.label}
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default WtmuSidebar;
