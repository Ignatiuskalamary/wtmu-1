// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { assets, comments_data, wtmu_data } from "../assets/assets";
// // import WtmuNavbar from "../componentes/WtmuNavbar";
// import Moment from "moment";
// import WtmuFooter from "../componentes/WtmuFooter";
// import { GrGooglePlus, GrTwitter } from "react-icons/gr";
// import { BsFacebook } from "react-icons/bs";

// interface PostData {
//   createdAt?: string | Date;
//   title?: string;
//   subTitle?: string;
//   teacher?: string;
//   image?: string;
//   description?: string;
// }

// interface Props {
//   data?: PostData;
// }

// const WtmuCourse = ({ data }: Props) => {
//   const { id } = useParams();

//   const [data, setData] = useState<(typeof wtmu_data)[0] | undefined>(
//     undefined
//   );
//   const [comments, setComments] = useState<typeof comments_data>([]);
//   const [name, setName] = useState("");
//   const [content, setContent] = useState("");

//   const fetchCourseData = async () => {
//     const foundData = wtmu_data.find((item) => item._id === id);
//     setData(foundData);
//   };

//   const fetchComments = async () => {
//     setComments(comments_data);
//   };

//   const addComment = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//   };
//   useEffect(() => {
//     fetchCourseData();
//     fetchComments();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   return (
//     <div className="relative">
//       <img
//         src={assets.gradientBackground}
//         alt=""
//         className="absolute -top-50 -z-1 opacity-50"
//       />
//       {/* <WtmuNavbar /> */}
//       {/* <div className="text-center mt-20 text-gray-600">
//         <p className="text-green-700 py-4 font-medium">
//           {" "}
//           Published on{" "}
//           {courseData?.createdAt
//             ? Moment(courseData?.createdAt).format("MMMM Do YYYY")
//             : ""}
//         </p>
//         <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">
//           {courseData?.title}
//         </h1>
//         <h2 className="my-5 max-w-lg truncate mx-auto">
//           {courseData?.subTitle}
//         </h2>
//         <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-green-800/35 bg-yellow-400 font-medium text-green-700">
//           {courseData?.teacher}
//         </p>
//       </div>
//       <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
//         <img src={courseData?.image} alt="" className="rounded-3xl mb-5" />
//         <div
//           className="rich-text max-w-3xl mx-auto"
//           dangerouslySetInnerHTML={{ __html: courseData?.description ?? "" }}
//         ></div>
//       </div> */}
//       <div className="text-center mt-20 text-gray-600">
//         <p className="text-green-700 py-4 font-medium">
//           Published on{" "}
//           {data?.createdAt
//             ? new Date(data.createdAt).toLocaleDateString("en-US", {
//                 month: "long",
//                 day: "numeric",
//                 year: "numeric",
//               })
//             : ""}
//         </p>
//         <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">
//           {data?.title}
//         </h1>
//         <h2 className="my-5 max-w-lg truncate mx-auto">{data?.subTitle}</h2>
//         <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-green-800/35 bg-yellow-400 font-medium text-green-700">
//           {data?.teacher}
//         </p>
//       </div>
//       <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
//         {data?.image && (
//           <img
//             src={data.image}
//             alt={data.title || "Post image"}
//             className="rounded-3xl mb-5"
//           />
//         )}
//         {data?.description && (
//           <div
//             className="rich-text max-w-3xl mx-auto"
//             dangerouslySetInnerHTML={{ __html: data.description }}
//           />
//         )}
//       </div>
//       <div className="mt-14 mb-10 max-w-3xl mx-auto">
//         <p className="font-semibold mb-4">Comments ({comments.length})</p>
//         <div className="flex flex-col gap-4">
//           {comments.map((item, index) => (
//             <div
//               className="relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600"
//               key={index}
//             >
//               <div className="flex items-center gap-2 mb-2">
//                 <img src={assets.user_icon} alt="" className="w-6" />
//                 <p className="font-medium">{item.name}</p>
//               </div>
//               <p className="text-sm max-w-md ml-8">{item.content}</p>
//               <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
//                 {Moment(item.createdAt).fromNow()}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="max-w-3xl mx-auto">
//         <p className="font-semibold mb-4">Add your comment</p>
//         <form
//           onSubmit={addComment}
//           className="flex flex-col items-start gap-4 max-w-lg"
//         >
//           <input
//             onChange={(e) => setName(e.target.value)}
//             value={name}
//             type="text"
//             placeholder="Name"
//             required
//             className="w-full p-2 border border-gray-300 rounded outline-none"
//           />
//           <textarea
//             onChange={(e) => setContent(e.target.value)}
//             value={content}
//             className="w-full p-2 border border-gray-300 rounded outline-none h-48"
//             required
//             placeholder="Comment"
//           ></textarea>
//           <button
//             className="bg-green-700 text-yellow-400 rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer"
//             type="submit"
//           >
//             Submit
//           </button>
//         </form>
//       </div>

//       <div className="my-24 max-w-3xl mx-auto">
//         <p className="font-semibold my-4">Share this article on social media</p>
//         <div className="flex ">
//           <div className="flex gap-4">
//             {" "}
//             {/* Adjust gap size as needed */}
//             <BsFacebook
//               className="text-green-700 rounded-full shadow-[0_0_10px_3px_rgba(34,197,94,0.5)] p-2"
//               size={32}
//             />
//             <GrTwitter
//               className="text-green-700 rounded-full shadow-[0_0_10px_3px_rgba(34,197,94,0.5)] p-2"
//               size={32}
//             />
//             <GrGooglePlus
//               className="text-green-700 rounded-full shadow-[0_0_10px_3px_rgba(34,197,94,0.5)] p-2"
//               size={32}
//             />
//           </div>
//           {/* <BsFacebook
//               className="text-green-700 rounded-full shadow-[0_0_8px_2px_rgba(234,179,8,0.7)] p-2"
//               size={32} // Adjust size as needed
//             /> */}
//           {/* <BsFacebook
//               className="text-green-700 rounded-full shadow-[0_0_10px_3px_rgba(34,197,94,0.5)] p-2"
//               size={32}
//             />
//             <GrTwitter
//               className="text-green-700 rounded-full shadow-[0_0_10px_3px_rgba(34,197,94,0.5)] p-2"
//               size={32}
//             />
//             <GrGooglePlus
//               className="text-green-700 rounded-full shadow-[0_0_10px_3px_rgba(34,197,94,0.5)] p-2"
//               size={32}
//             /> */}
//           {/* <img src={assets.facebook_icon} alt="" width={50} />
//             <img src={assets.twitter_icon} alt="" width={50} />
//             <img src={assets.googleplus_icon} alt="" width={50} /> */}
//         </div>
//       </div>
//       <WtmuFooter />
//     </div>
//   );
// };

// export default WtmuCourse;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, comments_data, wtmu_data } from "../assets/assets";
import Moment from "moment";
//import WtmuFooter from "../componentes/WtmuFooter";
import { GrGooglePlus, GrTwitter } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import WtmuLoader from "../componentes/WtmuLoader";
import WtmuFooter from "../componentes/WtmuFooter";

import WtmuNavbar from "../componentes/WtmuNavbar";

interface Comment {
  name: string;
  content: string;
  createdAt: string | Date;
}

interface CourseData {
  _id: string;
  createdAt?: string | Date;
  title?: string;
  subTitle?: string;
  teacher?: string;
  image?: string;
  description?: string;
}

const WtmuCourse = () => {
  const { id } = useParams<{ id: string }>();
  const [courseData, setCourseData] = useState<CourseData | undefined>(
    undefined
  );
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const fetchCourseData = () => {
    const data = wtmu_data.find((item) => item._id === id);
    setCourseData(data);
  };

  const fetchComments = () => {
    setComments(comments_data);
  };

  const addComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your comment submission logic here
  };

  useEffect(() => {
    fetchCourseData();
    fetchComments();
  }, [id]);
  // useEffect(() => {
  //   fetchCourseData();
  //   fetchComments();
  // }, [id, fetchCourseData, fetchComments]);
  return courseData ? (
    <>
      <WtmuNavbar />
      <div className="relative">
        <img
          src={assets.gradientBackground}
          alt="background"
          className="absolute -top-50 -z-1 opacity-50"
        />

        <div className="text-center mt-20 text-gray-600">
          <p className="text-green-700 py-4 font-medium">
            Published on{" "}
            {courseData?.createdAt
              ? Moment(courseData.createdAt).format("MMMM Do YYYY")
              : ""}
          </p>
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">
            {courseData?.title}
          </h1>
          <h2 className="my-5 max-w-lg truncate mx-auto">
            {courseData?.subTitle}
          </h2>
          <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-green-800/35 bg-yellow-400 font-medium text-green-700">
            {courseData?.teacher}
          </p>
        </div>

        <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
          {courseData?.image && (
            <img
              src={courseData.image}
              alt={courseData.title || "Course image"}
              className="rounded-3xl mb-5"
            />
          )}
          {courseData?.description && (
            <div
              className="rich-text max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: courseData.description }}
            />
          )}
        </div>

        <div className="mt-14 mb-10 max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Comments ({comments.length})</p>
          <div className="flex flex-col gap-4">
            {comments.map((item, index) => (
              <div
                className="relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600"
                key={index}
              >
                <div className="flex items-center gap-2 mb-2">
                  <img src={assets.user_icon} alt="user" className="w-6" />
                  <p className="font-medium">{item.name}</p>
                </div>
                <p className="text-sm max-w-md ml-8">{item.content}</p>
                <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
                  {Moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Add your comment</p>
          <form
            onSubmit={addComment}
            className="flex flex-col items-start gap-4 max-w-lg"
          >
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              className="w-full p-2 border border-gray-300 rounded outline-none h-48"
              required
              placeholder="Comment"
            />
            <button
              className="bg-green-700 text-yellow-400 rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="my-24 max-w-3xl mx-auto">
          <p className="font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex">
            <div className="flex gap-4">
              <BsFacebook
                className="text-green-700 rounded-full shadow-[0_0_10px_3px_rgba(34,197,94,0.5)] p-2"
                size={32}
              />
              <GrTwitter
                className="text-green-700 rounded-full shadow-[0_0_10px_3px_rgba(34,197,94,0.5)] p-2"
                size={32}
              />
              <GrGooglePlus
                className="text-green-700 rounded-full shadow-[0_0_10px_3px_rgba(34,197,94,0.5)] p-2"
                size={32}
              />
            </div>
          </div>
        </div>
      </div>
      <WtmuFooter />
    </>
  ) : (
    <WtmuLoader />
  );
};

export default WtmuCourse;
