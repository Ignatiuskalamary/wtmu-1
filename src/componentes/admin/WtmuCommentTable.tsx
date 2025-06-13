// // // import React from "react";
// // // import { assets } from "../../assets/assets";

// // // interface Comment {
// // //   _id: string;
// // //   name: string;
// // //   createdAt: string;
// // //   isApproved: boolean;
// // //   comment: string;
// // //   // Add other comment properties as needed
// // // }

// // // interface CommentTableItemProps {
// // //   comment: Comment;
// // //   fetchComments: () => void;
// // // }

// // // const WtmuCommentTable: React.FC<CommentTableItemProps> = ({
// // //   comment,
// // //   fetchComments,
// // // }) => {
// // //   const { createdAt, name, isApproved } = comment;
// // //   const commentDate = new Date(createdAt);

// // //   const handleApprove = async () => {
// // //     try {
// // //       // Add your approve API call here
// // //       // Example: await approveComment(_id);
// // //       fetchComments(); // Refresh comments after approval
// // //     } catch (error) {
// // //       console.error("Error approving comment:", error);
// // //     }
// // //   };

// // //   const handleDelete = async () => {
// // //     try {
// // //       // Add your delete API call here
// // //       // Example: await deleteComment(_id);
// // //       fetchComments(); // Refresh comments after deletion
// // //     } catch (error) {
// // //       console.error("Error deleting comment:", error);
// // //     }
// // //   };

// // //   return (
// // //     <tr className="border-y border-gray-300 hover:bg-gray-50">
// // //       <td className="px-6 py-4">
// // //         <div className="flex flex-col">
// // //           <b className="font-medium text-gray-600">{name}</b>
// // //           <p className="text-gray-500 text-sm mt-1">{comment.comment}</p>
// // //         </div>
// // //       </td>

// // //       <td className="px-6 py-4 max-sm:hidden text-gray-500">
// // //         {commentDate.toLocaleDateString("en-US", {
// // //           year: "numeric",
// // //           month: "short",
// // //           day: "numeric",
// // //         })}
// // //       </td>

// // //       <td className="px-6 py-4">
// // //         <div className="inline-flex items-center gap-4">
// // //           {!isApproved ? (
// // //             <button
// // //               onClick={handleApprove}
// // //               aria-label="Approve comment"
// // //               className="hover:scale-110 transition-transform"
// // //             >
// // //               <img src={assets.tick_icon} className="w-5" alt="Approve icon" />
// // //             </button>
// // //           ) : (
// // //             <span className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
// // //               Approved
// // //             </span>
// // //           )}

// // //           <button
// // //             onClick={handleDelete}
// // //             aria-label="Delete comment"
// // //             className="hover:scale-110 transition-transform"
// // //           >
// // //             <img src={assets.bin_icon} className="w-5" alt="Delete icon" />
// // //           </button>
// // //         </div>
// // //       </td>
// // //     </tr>
// // //   );
// // // };

// // // export default WtmuCommentTable;

// // import React from "react";
// // import { assets } from "../../assets/assets";

// // interface Comment {
// //   _id: string;
// //   name: string;
// //   comment: string;
// //   createdAt: string;
// //   isApproved: boolean;
// // }

// // interface WtmuCommentTableProps {
// //   comment: Comment;
// //   index: number;
// //   fetchComments: () => Promise<void>;
// // }

// // const WtmuCommentTable: React.FC<WtmuCommentTableProps> = ({
// //   comment,
// //   fetchComments,
// // }) => {
// //   const formatDate = (dateString: string) => {
// //     const options: Intl.DateTimeFormatOptions = {
// //       year: "numeric",
// //       month: "short",
// //       day: "numeric",
// //     };
// //     return new Date(dateString).toLocaleDateString(undefined, options);
// //   };

// //   const handleApprove = async () => {
// //     try {
// //       // In a real app, you would make an API call here to approve the comment
// //       // await approveComment(comment._id);
// //       // Then refresh the comments list
// //       await fetchComments();
// //     } catch (error) {
// //       console.error("Error approving comment:", error);
// //     }
// //   };

// //   const handleDelete = async () => {
// //     if (window.confirm("Are you sure you want to delete this comment?")) {
// //       try {
// //         // In a real app, you would make an API call here to delete the comment
// //         // await deleteComment(comment._id);
// //         // Then refresh the comments list
// //         await fetchComments();
// //       } catch (error) {
// //         console.error("Error deleting comment:", error);
// //       }
// //     }
// //   };

// //   return (
// //     <tr className="border-y border-gray-200 hover:bg-gray-50">
// //       <td className="px-6 py-4">
// //         <div className="font-medium text-gray-900">{comment.name}</div>
// //         <div className="text-gray-500 text-sm mt-1">{comment.comment}</div>
// //       </td>
// //       <td className="px-6 py-4 max-sm:hidden text-gray-700">
// //         {formatDate(comment.createdAt)}
// //       </td>
// //       <td className="px-6 py-4">
// //         <div className="flex items-center gap-3">
// //           {comment.isApproved ? (
// //             <span className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
// //               Approved
// //             </span>
// //           ) : (
// //             <button
// //               onClick={handleApprove}
// //               className="p-1 rounded hover:bg-green-50 transition-colors"
// //               title="Approve comment"
// //             >
// //               <img src={assets.tick_icon} className="w-5 h-5" alt="Approve" />
// //             </button>
// //           )}
// //           <button
// //             onClick={handleDelete}
// //             className="p-1 rounded hover:bg-red-50 transition-colors"
// //             title="Delete comment"
// //           >
// //             <img src={assets.bin_icon} className="w-5 h-5" alt="Delete" />
// //           </button>
// //         </div>
// //       </td>
// //     </tr>
// //   );
// // };

// // export default WtmuCommentTable;
// import React from "react";
// import { assets } from "../../assets/assets";

// interface Comment {
//   _id: string;
//   name: string;
//   createdAt: string;
//   isApproved: boolean;
//   comment: string;
//   // Add other comment properties as needed
// }

// //   fetchComments: () => void;
// // }
// interface WtmuCommentTableProps {
//   comment: Comment;
//   fetchComments: () => Promise<void>;
// }

// const WtmuCommentTable: React.FC<WtmuCommentTableProps> = ({
//   comment,
//   fetchComments,
// }) => {
//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   const handleApprove = async () => {
//     if (!comment.isApproved && !window.confirm("Approve this comment?")) return;

//     try {
//       // In a real app: await fetch(`/api/comments/${comment._id}/approve`, { method: 'PUT' });
//       await fetchComments();
//     } catch (error) {
//       console.error("Error updating comment:", error);
//     }
//   };

//   const handleDelete = async () => {
//     if (!window.confirm("Delete this comment permanently?")) return;

//     try {
//       // In a real app: await fetch(`/api/comments/${comment._id}`, { method: 'DELETE' });
//       await fetchComments();
//     } catch (error) {
//       console.error("Error deleting comment:", error);
//     }
//   };

//   return (
//     <tr className="hover:bg-gray-50">
//       <td className="px-6 py-4">
//         <div className="font-medium text-gray-900">{comment.name}</div>
//         <div className="text-gray-600 mt-1">{comment}</div>
//       </td>
//       <td className="px-6 py-4 hidden md:table-cell">
//         <div className="text-gray-700 line-clamp-1" title={comment.title}>
//           {comment.title}
//         </div>
//       </td>
//       <td className="px-6 py-4 hidden sm:table-cell text-gray-500">
//         {formatDate(comment.createdAt)}
//       </td>
//       <td className="px-6 py-4 text-right">
//         <div className="flex justify-end gap-2">
//           <button
//             onClick={handleApprove}
//             className={`p-2 rounded-full ${
//               comment.isApproved
//                 ? "bg-green-100 text-green-600"
//                 : "hover:bg-gray-100 text-gray-500"
//             }`}
//             title={comment.isApproved ? "Approved" : "Approve"}
//           >
//             {comment.isApproved ? (
//               <span className="text-xs font-medium">Approved</span>
//             ) : (
//               <img src={assets.tick_icon} className="w-4 h-4" alt="Approve" />
//             )}
//           </button>
//           <button
//             onClick={handleDelete}
//             className="p-2 rounded-full hover:bg-red-50 text-gray-500"
//             title="Delete"
//           >
//             <img src={assets.bin_icon} className="w-4 h-4" alt="Delete" />
//           </button>
//         </div>
//       </td>
//     </tr>
//   );
// };

// export default WtmuCommentTable;

import React from "react";

const WtmuCommentTable = () => {
  return <div>WtmuCommentTable</div>;
};

export default WtmuCommentTable;
