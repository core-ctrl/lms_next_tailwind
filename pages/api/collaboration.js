export default function handler(req, res) {
    if (req.method === "POST") {
        return res.status(201).json({ message: "Collaboration request received" });
    }

    res.status(405).json({ message: "Method Not Allowed" });
}
