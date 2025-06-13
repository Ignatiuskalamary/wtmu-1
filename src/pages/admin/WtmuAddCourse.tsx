import React, { useEffect, useRef, useState, type ChangeEvent } from "react";
import { assets, wtmuCategories } from "../../assets/assets";
import "quill/dist/quill.snow.css";
import Quill from "quill";

interface WTMUData {
  _id?: string;
  title: string;
  description: string;
  category: string;
  teacher: string;
  image: File | string | null;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  isPublished: boolean;
  subTitle: string;
}

const WtmuAddCourse: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);
  const [formData, setFormData] = useState<WTMUData>({
    title: "",
    description: "",
    category: "Startup",
    teacher: "",
    image: null,
    isPublished: false,
    subTitle: "",
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Get the HTML content from Quill editor
      const description = quillRef.current?.root.innerHTML || "";

      // Prepare form data for submission
      const submitData = {
        ...formData,
        description,
        // In a real app, you would handle file upload separately
        // image: formData.image instanceof File ? await uploadImage(formData.image) : formData.image
      };

      console.log("Submitting data:", submitData);
      // In a real app: await api.post('/wtmu-courses', submitData);
      alert("Course added successfully!");

      // Reset form
      setFormData({
        title: "",
        description: "",
        category: "Startup",
        teacher: "",
        image: null,
        isPublished: false,
        subTitle: "",
      });
      setImagePreview(null);
      if (quillRef.current) {
        quillRef.current.root.innerHTML = "";
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error adding course. Please try again.");
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, isPublished: e.target.checked }));
  };

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

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll"
    >
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
        <h1 className="text-xl font-semibold mb-6">Add New Course</h1>

        {/* Thumbnail Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Course Thumbnail
          </label>
          <label htmlFor="image" className="cursor-pointer">
            <div className="w-40 h-40 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Course thumbnail preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center p-4">
                  <img
                    src={assets.upload_area}
                    alt="Upload area"
                    className="mx-auto h-12 mb-2"
                  />
                  <p className="text-xs text-gray-500">Click to upload</p>
                </div>
              )}
            </div>
            <input
              onChange={handleImageChange}
              type="file"
              id="image"
              name="image"
              accept="image/*"
              hidden
              required
            />
          </label>
        </div>

        {/* Course Title */}
        <div className="mb-6">
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Course Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter course title"
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
            onChange={handleInputChange}
            value={formData.title}
            required
          />
        </div>

        {/* Subtitle */}
        <div className="mb-6">
          <label htmlFor="subTitle" className="block text-sm font-medium mb-2">
            Course Subtitle
          </label>
          <input
            type="text"
            id="subTitle"
            name="subTitle"
            placeholder="Enter course subtitle"
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
            onChange={handleInputChange}
            value={formData.subTitle}
            required
          />
        </div>

        {/* Teacher */}
        <div className="mb-6">
          <label htmlFor="teacher" className="block text-sm font-medium mb-2">
            Instructor Name
          </label>
          <input
            type="text"
            id="teacher"
            name="teacher"
            placeholder="Enter instructor name"
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
            onChange={handleInputChange}
            value={formData.teacher}
            required
          />
        </div>

        {/* Description - Quill Editor */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Course Description
          </label>
          <div className="border border-gray-300 rounded">
            <div ref={editorRef} className="h-164"></div>
          </div>
        </div>

        {/* Category */}
        <div className="mb-6">
          <label htmlFor="category" className="block text-sm font-medium mb-2">
            Course Category
          </label>
          <select
            id="category"
            name="category"
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
            onChange={handleInputChange}
            value={formData.category}
            required
          >
            <option value="">Select Category</option>
            {wtmuCategories.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Publish Toggle */}
        <div className="flex items-center mb-8">
          <input
            type="checkbox"
            id="isPublished"
            name="isPublished"
            checked={formData.isPublished}
            onChange={handleCheckboxChange}
            className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label
            htmlFor="isPublished"
            className="ml-2 block text-sm text-gray-700"
          >
            Publish this course immediately
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-yellow-400 font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
        >
          Add Course
        </button>
      </div>
    </form>
  );
};

export default WtmuAddCourse;
