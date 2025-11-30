import courses from "@/data/courses.json";

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(courses);
  }

  if (req.method === "POST") {
    return res.status(201).json({ message: "Course added (mock)" });
  }

  res.status(405).json({ message: "Method Not Allowed" });
}
