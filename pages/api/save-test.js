import fs from "fs";
import path from "path";

export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Only POST allowed" });
    }

    const filePath = path.join(process.cwd(), "data", "tests.json");

    const tests = JSON.parse(fs.readFileSync(filePath, "utf8"));
    tests.push(req.body);

    fs.writeFileSync(filePath, JSON.stringify(tests, null, 2));

    res.status(200).json({ message: "Test saved successfully" });
}
