import { useState } from "react";

export default function CreateTest() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [msg, setMsg] = useState("");

  const handleSave = () => {
    if (!title.trim()) return alert("Title required");

    const newTest = {
      id: Date.now().toString(),
      title,
      description,
      url,
    };

    // Load previous tests
    const saved = JSON.parse(localStorage.getItem("tests") || "[]");

    // Add new test
    saved.push(newTest);

    // Save back
    localStorage.setItem("tests", JSON.stringify(saved));

    setMsg("✅ Test Created Successfully!");

    setTitle("");
    setDescription("");
    setUrl("");
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Create Test</h1>

      <input
        className="w-full p-3 border rounded mb-3"
        placeholder="Test Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full p-3 border rounded mb-3"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        className="w-full p-3 border rounded mb-3"
        placeholder="Optional URL (e.g., Google Form)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button
        onClick={handleSave}
        className="w-full bg-blue-600 text-white py-3 rounded"
      >
        Save Test
      </button>

      {msg && <p className="mt-3 text-green-600">{msg}</p>}
    </div>
  );
}
