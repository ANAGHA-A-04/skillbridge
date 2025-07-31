export default async function Ai({ skills, interests, goal }) {
  const prompt = `You are a career guidance assistant. Based on the user's skills, interests, and goal, suggest 2-3 personalized career paths with explanation and recommended resources. Add some emojis and motivation if possible.
Skills: ${skills}
Interest: ${interests}
Goal: ${goal}`;

  console.log("Prompt to OpenAI:", prompt);

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!data.choices || !data.choices[0]?.message?.content) {
      console.error("OpenAI returned error:", data);
      return "⚠️ Unable to generate suggestions. You may have hit the request limit. Please try again later.";
    }

    return data.choices[0].message.content;

  } catch (err) {
    console.error("Error while calling OpenAI:", err);
    return "❌ Error connecting to AI. Please check your key or internet.";
  }
}
