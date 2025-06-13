import React, { useEffect, useState } from "react";
import { dashboard_data } from "../../assets/assets";
import WtmuTeacherTable from "../../componentes/admin/WtmuTeacherTable";

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
  recentwtmus: Course[];
  recentcourses: Course[];
}

const WtmuTeachersList: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    NewUsers: 0,
    ApprovedUsers: 0,
    Students: 0,
    GraduatedStudents: 0,
    DenedUsers: 0,
    recentwtmus: [],
    recentcourses: [],
  });

  const fetchDashboard = async () => {
    try {
      // Using mock data
      setDashboardData({
        ...dashboard_data,
        recentcourses: dashboard_data.recentwtmus || [],
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
      <div className="mt-8">
        <div className="relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-xs text-gray-600 uppercase bg-gray-50">
              <tr className="border-b-4 bg-green-700 text-yellow-400 border-yellow-400">
                <th scope="col" className="px-2 py-4 xl:px-6">
                  #
                </th>
                <th scope="col" className="px-2 py-4">
                  Course
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Teacher
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Date
                </th>

                <th scope="col" className="px-2 py-4">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {dashboardData.recentcourses.map((course, index) => (
                <WtmuTeacherTable
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

export default WtmuTeachersList;
