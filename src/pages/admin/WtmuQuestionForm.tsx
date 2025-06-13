import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiSave, FiX } from "react-icons/fi";
import "quill/dist/quill.snow.css";
import Quill from "quill";

interface Question {
  id?: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  options: string[];
  correctAnswer: string;
  isPublished: boolean;
  explanation: string;
}

const WtmuQuestionForm: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const [question, setQuestion] = useState<Question>({
    title: "",
    description: "",
    category: "Harmony",
    difficulty: "Medium",
    options: ["", "", "", ""],
    correctAnswer: "",
    isPublished: false,
    explanation: "",
  });

  const [description, setDescription] = useState("");

  const categories = [
    "Harmony",
    "Music History",
    "Aural Skills",
    "Form & Analysis",
    "Counterpoint",
    "Music Theory",
  ];

  const difficulties = ["Easy", "Medium", "Hard"];
  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
        },
        placeholder: "Enter course description...",
      });
    }

    return () => {
      if (quillRef.current) {
        quillRef.current = null;
      }
    };
  }, []);
  useEffect(() => {
    if (isEditMode) {
      // In a real app, you would fetch the question data here
      setQuestion({
        id: "1",
        title: "Identify the cadence at the end of this excerpt",
        description:
          "<p>Listen to the following excerpt and identify the cadence type:</p>",
        category: "Harmony",
        difficulty: "Medium",
        options: [
          "Authentic Cadence",
          "Plagal Cadence",
          "Half Cadence",
          "Deceptive Cadence",
        ],
        correctAnswer: "Authentic Cadence",
        isPublished: true,
        explanation:
          "The excerpt ends with a V-I progression in the tonic key, which is a clear authentic cadence.",
      });
      setDescription(
        "<p>Listen to the following excerpt and identify the cadence type:</p>"
      );
    }
  }, [id, isEditMode]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setQuestion((prev) => ({ ...prev, [name]: value }));
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...question.options];
    newOptions[index] = value;
    setQuestion((prev) => ({ ...prev, options: newOptions }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would save to API here
    console.log("Submitting:", { ...question, description });
    navigate("/admin/questions");
  };

  const handleAddOption = () => {
    if (question.options.length < 6) {
      setQuestion((prev) => ({ ...prev, options: [...prev.options, ""] }));
    }
  };

  const handleRemoveOption = (index: number) => {
    if (question.options.length > 2) {
      const newOptions = [...question.options];
      newOptions.splice(index, 1);
      setQuestion((prev) => ({ ...prev, options: newOptions }));
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            {isEditMode ? "Edit Question" : "Add New Question"}
          </h2>
          <button
            onClick={() => navigate("/admin/Wtmuquestionslist")}
            className="flex items-center gap-1 text-gray-500 hover:text-gray-700"
          >
            <FiX /> Cancel
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-6">
            {/* Question Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Question Title *
              </label>
              <input
                type="text"
                name="title"
                value={question.title}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Description - Rich Text Editor */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Question Description *
              </label>
              <div ref={editorRef} className="h-164"></div>
            </div>

            {/* Category and Difficulty */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category *
                </label>
                <select
                  name="category"
                  value={question.category}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Difficulty *
                </label>
                <select
                  name="difficulty"
                  value={question.difficulty}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  {difficulties.map((diff) => (
                    <option key={diff} value={diff}>
                      {diff}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Answer Options */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Answer Options * (Minimum 2, Maximum 6)
              </label>
              <div className="space-y-2">
                {question.options.map((option, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="correctAnswer"
                      checked={question.correctAnswer === option}
                      onChange={() =>
                        setQuestion((prev) => ({
                          ...prev,
                          correctAnswer: option,
                        }))
                      }
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      required
                    />
                    <input
                      type="text"
                      value={option}
                      onChange={(e) =>
                        handleOptionChange(index, e.target.value)
                      }
                      className="flex-1 p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    {question.options.length > 2 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveOption(index)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                {question.options.length < 6 && (
                  <button
                    type="button"
                    onClick={handleAddOption}
                    className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                  >
                    + Add another option
                  </button>
                )}
              </div>
            </div>

            {/* Explanation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Explanation
              </label>
              <textarea
                name="explanation"
                value={question.explanation}
                onChange={(e) =>
                  setQuestion((prev) => ({
                    ...prev,
                    explanation: e.target.value,
                  }))
                }
                rows={3}
                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Publish Toggle */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isPublished"
                name="isPublished"
                checked={question.isPublished}
                onChange={(e) =>
                  setQuestion((prev) => ({
                    ...prev,
                    isPublished: e.target.checked,
                  }))
                }
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="isPublished"
                className="ml-2 block text-sm text-gray-700"
              >
                Publish this question immediately
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <FiSave /> {isEditMode ? "Update Question" : "Save Question"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WtmuQuestionForm;
