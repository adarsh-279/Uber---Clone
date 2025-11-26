import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8000;

// Routes
app.get("/", (req, res) => {
    res.send("Default Route");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Export app in case you need it elsewhere (like tests)
export default app;
