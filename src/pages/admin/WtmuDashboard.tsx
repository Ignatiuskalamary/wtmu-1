import React, { useEffect, useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import {
  FaRegUser,
  FaUserFriends,
  FaUserGraduate,
  FaUserTie,
} from "react-icons/fa";
import { RiPresentationFill } from "react-icons/ri";
import WtmuCourseTable from "../../componentes/admin/WtmuTable";
import { dashboard_data } from "../../assets/assets";

interface Course {
  _id: string;
  title: string;
  description: string;
  category: string;
  teacher: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  isPublished: boolean;
  subTitle: string;
}

interface DashboardData {
  NewUsers: number;
  ApprovedUsers: number;
  Students: number;
  GraduatedStudents: number;
  DenedUsers: number;
  recentcourses: Course[];
}

const WtmuDashboard: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    NewUsers: 0,
    ApprovedUsers: 0,
    Students: 0,
    GraduatedStudents: 0,
    DenedUsers: 0,
    recentcourses: [],
  });

  const fetchDashboard = async () => {
    try {
      // In a real app, you would fetch data from an API here
      // For now, we'll use the mock data
      // Map recentwtmus to recentcourses to match DashboardData interface
      setDashboardData({
        ...dashboard_data,
        recentcourses: dashboard_data.recentwtmus,
      });
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
      <div className="flex flex-wrap gap-4">
        {/* Stats Cards */}
        {[
          {
            icon: <FaRegUser className="text-green-700 font-bold" />,
            value: dashboardData.NewUsers,
            label: "New Users",
          },
          {
            icon: <FaUserFriends className="text-green-800 font-bold" />,
            value: dashboardData.ApprovedUsers,
            label: "Approved Users",
          },
          {
            icon: <FaUserTie className="text-green-800 font-bold" />,
            value: dashboardData.Students,
            label: "Students",
          },
          {
            icon: <FaUserGraduate className="text-green-800 font-bold" />,
            value: dashboardData.GraduatedStudents,
            label: "Graduated Students",
          },
          {
            icon: <AiTwotoneDelete className="text-red-500" />,
            value: dashboardData.DenedUsers,
            label: "Denied Users",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all"
          >
            {stat.icon}
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {stat.value}
              </p>
              <p className="text-gray-400 font-light">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-3 m-4 text-gray-600">
          <RiPresentationFill className="text-green-700" />
          <p>Recent Courses</p>
        </div>

        <div className="relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-xs text-gray-600 uppercase bg-gray-50">
              <tr className="border-b-4  bg-green-700 text-yellow-400 border-yellow-400">
                <th scope="col" className="px-2 py-4 xl:px-6">
                  #
                </th>
                <th scope="col" className="px-2 py-4">
                  Course
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Date
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Status
                </th>
                <th scope="col" className="px-2 py-4">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {dashboardData.recentcourses.map((course, index) => (
                <WtmuCourseTable
                  key={course._id}
                  course={course}
                  fetchCourses={fetchDashboard}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WtmuDashboard;
