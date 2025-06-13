// import React from "react";
// import { useNavigate } from "react-router-dom";

// const WtmuCourseCard = ({ course }) => {
//   const { title, description, category, image, _id } = course;
//   const navigate = useNavigate();
//   return (
//     <div
//       onClick={() => navigate(`/wtmu/${_id}`)}
//       className="w-full rouunded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer"
//     >
//       <img src={image} alt="" className="aspect-video" />
//       <span className="lm-5 mt-4 px-3 py-1 inline-block bg-green-700 rounded-full text-yellow-400 text-xs">
//         {category}
//       </span>
//       <div className="p-5">
//         <h5 className="mb-2 font-medium text-gray-900">{title}</h5>

//         <p
//           className="mb-3 text-xs text-gray-600"
//           dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}
//         ></p>
//       </div>
//     </div>
//   );
// };

// export default WtmuCourseCard;

import React from "react";
import { useNavigate } from "react-router-dom";

interface Course {
  _id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  // Add any other properties your course object might have
}

interface WtmuCourseCardProps {
  course: Course;
}

const WtmuCourseCard: React.FC<WtmuCourseCardProps> = ({ course }) => {
  const { title, description, category, image, _id } = course;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/wtmucourse/${_id}`)}
      className="w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="aspect-video w-full object-cover"
      />
      <span className="inline-block mt-4 ml-5 px-3 py-1 bg-green-700 rounded-full text-yellow-400 text-xs">
        {category}
      </span>
      <div className="p-5">
        <h5 className="mb-2 font-medium text-gray-900">{title}</h5>
        {description && (
          <p
            className="mb-3 text-xs text-gray-600"
            dangerouslySetInnerHTML={{
              __html:
                description.length > 80
                  ? `${description.slice(0, 80)}...`
                  : description,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default WtmuCourseCard;
