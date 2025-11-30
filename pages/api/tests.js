import tests from "@/data/tests.json";

export default function handler(req, res) {
    if (req.method === "GET") {
        return res.status(200).json(tests);
    }

    res.status(405).json({ message: "Method Not Allowed" });
}
