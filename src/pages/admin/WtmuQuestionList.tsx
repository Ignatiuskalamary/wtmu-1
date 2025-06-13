import React, { useState } from "react";
import { FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface Question {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  isPublished: boolean;
  createdAt: string;
}

const WtmuQuestionList: React.FC = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: "1",
      title: "Identify the cadence at the end of this excerpt",
      category: "Harmony",
      difficulty: "Medium",
      isPublished: true,
      createdAt: "2023-05-15",
    },
    {
      id: "2",
      title: "Name the composer of this symphony",
      category: "Music History",
      difficulty: "Easy",
      isPublished: false,
      createdAt: "2023-06-20",
    },
    {
      id: "3",
      title: "Transcribe this melodic dictation",
      category: "Aural Skills",
      difficulty: "Hard",
      isPublished: true,
      createdAt: "2023-07-10",
    },
  ]);

  const [filter, setFilter] = useState<"all" | "published" | "unpublished">(
    "all"
  );

  const filteredQuestions = questions.filter((q) => {
    if (filter === "published") return q.isPublished;
    if (filter === "unpublished") return !q.isPublished;
    return true;
  });

  const deleteQuestion = (id: string) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      setQuestions(questions.filter((q) => q.id !== id));
    }
  };

  const togglePublish = (id: string) => {
    setQuestions(
      questions.map((q) =>
        q.id === id ? { ...q, isPublished: !q.isPublished } : q
      )
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Music Degree Questions
          </h1>
          <button
            onClick={() => navigate("/admin/questions/add")}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-yellow-400 px-4 py-2 rounded-lg transition-colors"
          >
            <FiPlus /> Add Question
          </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b flex justify-between items-center">
            <div className="flex gap-3">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-1 rounded-full text-sm ${
                  filter === "all"
                    ? "bg-green-700 text-black-400"
                    : "text-black-400 hover:bg-green-500"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("published")}
                className={`px-4 py-1 rounded-full text-sm ${
                  filter === "published"
                    ? "bg-green-700 text-yellow-400"
                    : "text-black-400 hover:bg-green-500"
                }`}
              >
                Published
              </button>
              <button
                onClick={() => setFilter("unpublished")}
                className={`px-4 py-1 rounded-full text-sm ${
                  filter === "unpublished"
                    ? "bg-green-700 text-yellow-400"
                    : "text-black-400 hover:bg-green-500"
                }`}
              >
                Unpublished
              </button>
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              className="px-4 py-1 border rounded-lg text-sm w-64"
            />
          </div>

          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Question
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Difficulty
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredQuestions.map((question) => (
                <tr key={question.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {question.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {question.category}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        question.difficulty === "Easy"
                          ? "bg-green-100 text-green-800"
                          : question.difficulty === "Medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {question.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        question.isPublished
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {question.isPublished ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {question.createdAt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => togglePublish(question.id)}
                        className={`p-1 rounded ${
                          question.isPublished
                            ? "text-orange-500 hover:bg-orange-50"
                            : "text-green-500 hover:bg-green-50"
                        }`}
                        title={question.isPublished ? "Unpublish" : "Publish"}
                      >
                        {question.isPublished ? "Unpublish" : "Publish"}
                      </button>
                      <button
                        onClick={() =>
                          navigate(`/admin/questions/edit/${question.id}`)
                        }
                        className="text-blue-500 hover:bg-blue-50 p-1 rounded"
                        title="Edit"
                      >
                        <FiEdit2 />
                      </button>
                      <button
                        onClick={() => deleteQuestion(question.id)}
                        className="text-red-500 hover:bg-red-50 p-1 rounded"
                        title="Delete"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WtmuQuestionList;
