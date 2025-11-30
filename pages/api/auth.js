export default function handler(req, res) {
    if (req.method === "POST") {
        const { email } = req.body;

        return res.status(200).json({
            message: "Login successful (mock)",
            user: { name: "User", email }
        });
    }

    res.status(405).json({ message: "Method Not Allowed" });
}
