import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export default async function Gemini({ skills, interests, goal }) {
  const prompt = `You are a career guidance assistant. Based on the user's skills, interests, and goal, suggest 2-3 personalized career paths with explanation and recommended resources. Add some emojis and motivation if possible.
Skills: ${skills}
Interest: ${interests}
Goal: ${goal}`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // ✅ Changed model name
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    console.log("Gemini response:", text);
    return text;
  } catch (error) {
    console.error("Gemini API error:", error);
    return "⚠️ Failed to fetch suggestions. Please try again.";
  }
}
