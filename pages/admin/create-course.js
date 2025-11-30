import { useState } from "react";

export default function CreateCourse() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState("");

  const [thumbnail, setThumbnail] = useState("");
  const [video, setVideo] = useState("");

  const [testURL, setTestURL] = useState("");
  const [msg, setMsg] = useState("");

  // -----------------------------
  // HANDLE THUMBNAIL FILE UPLOAD
  // -----------------------------
  const handleThumbnailUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setThumbnail(reader.result);
    reader.readAsDataURL(file);
  };

  // -----------------------------
  // HANDLE COURSE VIDEO UPLOAD
  // -----------------------------
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setVideo(reader.result);
    reader.readAsDataURL(file);
  };

  function createCourse(e) {
    e.preventDefault();

    const newCourse = {
      id: Date.now(),
      title,
      description: desc,
      tags: tags.split(",").map((t) => t.trim()),
      thumbnail,
      video,
      testURL,
    };

    const existing = JSON.parse(localStorage.getItem("courses") || "[]");
    existing.push(newCourse);
    localStorage.setItem("courses", JSON.stringify(existing));

    setMsg("✅ Course created successfully!");

    setTitle("");
    setDesc("");
    setTags("");
    setThumbnail("");
    setVideo("");
    setTestURL("");
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white dark:bg-gray-800 shadow-xl rounded-xl">
      <h1 className="text-3xl font-bold text-center mb-6 dark:text-white">
        Create New Course
      </h1>

      <form onSubmit={createCourse} className="space-y-6">

        {/* Title */}
        <div>
          <label className="font-medium text-gray-700 dark:text-gray-200">Course Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-lg mt-1 bg-white dark:bg-gray-700 dark:text-white"
            placeholder="React Basics"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-medium text-gray-700 dark:text-gray-200">Course Description</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows={4}
            className="w-full p-3 border rounded-lg mt-1 bg-white dark:bg-gray-700 dark:text-white"
            placeholder="Short course description..."
            required
          />
        </div>

        {/* Tags */}
        <div>
          <label className="font-medium text-gray-700 dark:text-gray-200">
            Tags (comma separated)
          </label>
          <input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-3 border rounded-lg mt-1 bg-white dark:bg-gray-700 dark:text-white"
            placeholder="javascript, react, frontend"
          />
        </div>

        {/* Thumbnail Upload */}
        <div>
          <label className="font-medium text-gray-700 dark:text-gray-200">
            Upload Thumbnail
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleThumbnailUpload}
            className="w-full mt-1"
          />

          {thumbnail && (
            <img
              src={thumbnail}
              alt="Thumbnail preview"
              className="mt-3 rounded-lg shadow w-40 h-24 object-cover"
            />
          )}
        </div>

        {/* VIDEO UPLOAD */}
        <div>
          <label className="font-medium text-gray-700 dark:text-gray-200">
            Upload Course Video (Optional)
          </label>
          <input
            type="file"
            accept="video/mp4,video/webm"
            onChange={handleVideoUpload}
            className="w-full mt-1"
          />

          {video && (
            <video
              className="mt-3 rounded-lg shadow w-64"
              src={video}
              controls
            />
          )}
        </div>

        {/* Test URL */}
        <div>
          <label className="font-medium text-gray-700 dark:text-gray-200">
            Test / Quiz URL (Paste any link)
          </label>
          <input
            value={testURL}
            onChange={(e) => setTestURL(e.target.value)}
            className="w-full p-3 border rounded-lg mt-1 bg-white dark:bg-gray-700 dark:text-white"
            placeholder="https://quiz.com/test-123"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            You can paste Google forms, Typeform, YouTube quiz, or any link.
          </p>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg shadow"
        >
          Create Course
        </button>

        {msg && (
          <p className="text-center text-green-600 dark:text-green-400 font-medium mt-3">
            {msg}
          </p>
        )}
      </form>
    </div>
  );
}
