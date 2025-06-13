// import React from "react";
// import { assets } from "../../assets/assets";

// interface Course {
//   _id: string;
//   title: string;
//   createdAt: string;
//   isPublished: boolean;
//   // Add other course properties as needed
// }

// interface CourseTableItemProps {
//   course: Course;
//   index: number;
// }

// const WtmuCourseTable: React.FC<CourseTableItemProps> = ({ course, index }) => {
//   const { title, createdAt } = course;
//   const courseDate = new Date(createdAt);

//   const handleStatusChange = () => {
//     // Add your status change logic here
//     // You might want to call fetchCourses after successful status update
//   };

//   const handleDelete = () => {
//     // Add your delete logic here
//     // You might want to call fetchCourses after successful deletion
//   };

//   return (
//     <tr className="border-y border-gray-300 hover:bg-gray-50">
//       <th className="px-2 py-4 font-medium">{index}</th>
//       <td className="px-2 py-4">{title}</td>
//       <td className="px-2 py-4 max-sm:hidden">{courseDate.toDateString()}</td>
//       <td className="px-2 py-4 max-sm:hidden">
//         <p
//           className={`${
//             course.isPublished ? "text-green-600" : "text-orange-600"
//           } font-medium`}
//         >
//           {course.isPublished ? "Active" : "Inactive"}
//         </p>
//       </td>
//       <td className="px-2 py-4 flex gap-3 items-center">
//         <button
//           onClick={handleStatusChange}
//           className="border border-gray-300 px-3 py-1 rounded cursor-pointer hover:bg-gray-100 transition-colors text-sm"
//         >
//           {course.isPublished ? "Deactivate" : "Activate"}
//         </button>
//         <button
//           onClick={handleDelete}
//           className="hover:scale-110 transition-transform cursor-pointer"
//           aria-label="Delete course"
//         >
//           <img src={assets.cross_icon} alt="Delete icon" className="w-6" />
//         </button>
//       </td>
//     </tr>
//   );
// };

// export default WtmuCourseTable;

import React from "react";
import { assets } from "../../assets/assets";

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

interface CourseTableItemProps {
  course: Course;
  index: number;
  fetchCourses: () => Promise<void>;
}

const WtmuTeacherTable: React.FC<CourseTableItemProps> = ({
  course,
  index,
  fetchCourses,
}) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        // In a real app, you would make an API call here to delete the course
        // await deleteCourse(course._id);
        // Then refresh the course list
        await fetchCourses();
      } catch (error) {
        console.error("Error deleting course:", error);
      }
    }
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-2 py-4 font-medium text-gray-900">{index}</td>
      <td className="px-2 py-4">
        <div className="font-medium text-gray-900">{course.title}</div>
      </td>
      <td className="px-2 py-4 max-sm:hidden ">{course.teacher}</td>
      <td className="px-2 py-4 max-sm:hidden ">
        {formatDate(course.createdAt)}
      </td>

      <td className="px-2 py-4 flex gap-2 items-center">
        <button
          onClick={handleDelete}
          className="p-1.5 rounded-md hover:bg-red-100 transition-colors w-10 flex items-center justify-center"
          aria-label="Delete course"
          title="Delete course"
        >
          <img src={assets.cross_icon} alt="Delete" className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
};

export default WtmuTeacherTable;
