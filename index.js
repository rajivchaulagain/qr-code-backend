import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { postQrCode } from "./src/controller/generate-qr.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

// Define your API endpoints here
app.get("/", (req, res) => {
  res.send({ data: "this is home page" });
});

app.post("/generate-qr", postQrCode);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
