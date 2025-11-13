// listModels.js  (run with: node listModels.js)
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

// set API key directly here or via .env
const API_KEY = process.env.GENAI_API_KEY || "YOUR_API_KEY_HERE";

const genAI = new GoogleGenerativeAI(API_KEY);

async function main() {
  try {
    const res = await genAI.listModels();     // library method to list models
    console.log("LIST MODELS OUTPUT:");
    console.log(JSON.stringify(res, null, 2));
  } catch (err) {
    console.error("LIST MODELS ERROR:", err);
  }
}
main();
