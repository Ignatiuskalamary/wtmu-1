// // import React, { useEffect, useState } from "react";
// // import WtmuCommentTable from "../../componentes/admin/WtmuCommentTable";
// // //import { comments_data } from "../../assets/assets";

// // interface Comment {
// //   _id: string;
// //   name: string;
// //   comment: string;
// //   createdAt: string;
// //   isApproved: boolean;
// //   // Add other comment properties as needed
// // }

// // const WtmuComments: React.FC = () => {
// //   const [comments, setComments] = useState<Comment[]>([]);
// //   const [filter, setFilter] = useState<"Approved" | "Not Approved">(
// //     "Not Approved"
// //   );

// //   const fetchComments = async () => {
// //     try {
// //       // In a real app, you would fetch data from an API here
// //       setComments(comments);
// //     } catch (error) {
// //       console.error("Error fetching comments:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchComments();
// //   }, []);

// //   const filteredComments = comments.filter((comment) => {
// //     return filter === "Approved"
// //       ? comment.isApproved === true
// //       : comment.isApproved === false;
// //   });

// //   return (
// //     <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
// //       <div className="flex justify-between items-center max-w-3xl">
// //         <h1 className="text-xl font-semibold text-gray-800">Comments</h1>
// //         <div className="flex gap-4">
// //           <button
// //             onClick={() => setFilter("Approved")}
// //             className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs transition-colors ${
// //               filter === "Approved"
// //                 ? "text-green-700 bg-green-50 border-green-200"
// //                 : "text-yellow-400 bg-white border-yellow-200"
// //             }`}
// //           >
// //             Approved
// //           </button>
// //           <button
// //             onClick={() => setFilter("Not Approved")}
// //             className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs transition-colors ${
// //               filter === "Not Approved"
// //                 ? "text-green-700 bg-green-50 border-green-200"
// //                 : "text-yellow-400 bg-white border-yellow-200"
// //             }`}
// //           >
// //             Not Approved
// //           </button>
// //         </div>
// //       </div>

// //       <div className="relative h-4/5 max-w-3xl overflow-x-auto mt-4 bg-white shadow rounded-lg scrollbar-hide">
// //         <table className="w-full text-sm text-gray-500">
// //           <thead className="text-xs text-gray-700 text-left uppercase bg-gray-50">
// //             <tr>
// //               <th scope="col" className="px-6 py-3">
// //                 Student Details
// //               </th>
// //               <th scope="col" className="px-6 py-3 max-sm:hidden">
// //                 Date
// //               </th>
// //               <th scope="col" className="px-6 py-3">
// //                 Action
// //               </th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {filteredComments.length > 0 ? (
// //               filteredComments.map((comment, index) => (
// //                 <WtmuCommentTable
// //                   key={comment._id}
// //                   comment={comment}
// //                   index={index + 1}
// //                   fetchComments={fetchComments}
// //                 />
// //               ))
// //             ) : (
// //               <tr>
// //                 <td colSpan={3} className="px-6 py-4 text-center text-gray-400">
// //                   No {filter.toLowerCase()} comments found
// //                 </td>
// //               </tr>
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default WtmuComments;

// import React, { useEffect, useState } from "react";
// import { comments_data } from "../../assets/assets";
// import WtmuCommentTable from "../../componentes/admin/WtmuCommentTable";

// const Comments: React.FC = () => {
//   const [comments, setComments] = useState<Comment[]>([]);
//   const [filter, setFilter] = useState<"Approved" | "Not Approved">("Not Approved");
//   const [loading, setLoading] = useState(true);

//   const fetchComments = async () => {
//     try {
//       setLoading(true);
//       // In a real app: const response = await fetch('/api/comments');
//       // const data = await response.json();
//       setComments(comments_data);
//     } catch (error) {
//       console.error("Error fetching comments:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchComments();
//   }, []);

//   const filteredComments = comments.filter((comment) =>
//     filter === "Approved" ? comment.isApproved : !comment.isApproved
//   );

//   return (
//     <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
//       <div className="flex justify-between items-center max-w-5xl">
//         <h1 className="text-xl font-semibold text-gray-800">Course Comments</h1>
//         <div className="flex gap-3">
//           <button
//             onClick={() => setFilter("Not Approved")}
//             className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
//               filter === "Not Approved"
//                 ? "bg-yellow-50 border-yellow-200 text-yellow-700"
//                 : "bg-white border-gray-200 text-gray-600"
//             }`}
//           >
//             Pending Approval
//           </button>
//           <button
//             onClick={() => setFilter("Approved")}
//             className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
//               filter === "Approved"
//                 ? "bg-green-50 border-green-200 text-green-700"
//                 : "bg-white border-gray-200 text-gray-600"
//             }`}
//           >
//             Approved
//           </button>
//         </div>
//       </div>

//       <div className="mt-6 max-w-5xl">
//         {loading ? (
//           <div className="bg-white p-8 rounded-lg shadow text-center">
//             <p className="text-gray-500">Loading comments...</p>
//           </div>
//         ) : (
//           <div className="bg-white shadow rounded-lg overflow-hidden">
//             <table className="w-full text-sm">
//               <thead className="bg-gray-50 text-gray-600 uppercase">
//                 <tr>
//                   <th className="px-6 py-3 text-left">Student & Comment</th>
//                   <th className="px-6 py-3 text-left hidden md:table-cell">Course</th>
//                   <th className="px-6 py-3 text-left hidden sm:table-cell">Date</th>
//                   <th className="px-6 py-3 text-right">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {filteredComments.length > 0 ? (
//                   filteredComments.map((comment) => (
//                     <WtmuCommentTable
//                       key={comment._id}
//                       comment={comment}
//                       fetchComments={fetchComments}
//                     />
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
//                       No {filter.toLowerCase()} comments found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Comments;
import React from "react";

const WtmuComments = () => {
  return <div>WtmuComments</div>;
};

export default WtmuComments;
