import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser"
import userRoute from "./routes/user.routes.js";

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(express.urlencoded({ extented: true }))
app.use(cookieParser())

// Routes
app.get("/", (req, res) => {
    res.send("Default Route");
});

app.use("/users", userRoute)

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Export app in case you need it elsewhere (like tests)
export default app;
