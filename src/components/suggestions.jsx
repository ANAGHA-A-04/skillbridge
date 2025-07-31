import React, { useState, useEffect } from "react";
import Gemini from "./Gemini.js";


export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    async function getSuggestion() {
      try {
        const response = await Gemini({
  skills: userData.skills,
  interests: userData.interests,
  goal: userData.goal,
});


        const parsed = parseAiResponse(response);
        setSuggestions(parsed);
      } catch (err) {
        console.error("Error getting suggestions:", err);
        setErrorMessage("❌ Unable to fetch suggestions. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    getSuggestion();
  }, []);

  function parseAiResponse(text) {
    const block = text.split(/\n(?=\d+\.\s)/).filter(Boolean);
    return block.map((blocks) => {
      const lines = blocks.trim().split("\n");
      const headline = lines.shift();
      const head = headline.replace(/^\d+\.\s/, "").trim();
      const discription = lines.join("\n").trim();
      return { head, discription };
    });
  }

  return (
    <div className="min-h-screen bg-gray-700 text-white px-6">
      <h1 className="text-5xl font-extrabold text-center p-3 mb-10">
        Career Suggestions
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <p className="text-4xl font-bold animate-pulse text-center">
            Generating personalized guidance... 💭
          </p>
        </div>
      ) : errorMessage ? (
        <div className="bg-black text-red-400 text-center p-6 rounded-xl font-bold text-xl">
          {errorMessage}
        </div>
      ) : (
        <div className="max-w-7xl mx-auto space-y-8 pb-12">
          {suggestions.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 w-full p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <h2 className="text-2xl font-bold mb-3">{item.head}</h2>
              <p className="text-gray-300 whitespace-pre-wrap text-lg leading-relaxed">
                {item.discription}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
