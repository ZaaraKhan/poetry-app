import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useState } from "react";

export default function PoemBox() {
  const [response, setResponse] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function fetchPoem() {
    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = "Write me a poem about modern art less than 30 words long";
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      setResponse(text);
    } catch (err) {
      setError((err as Error).message);
    }
  }
  useEffect(() => {
    fetchPoem();

    const poemIntervalId = setInterval(fetchPoem, 30000);
    return () => {
      clearInterval(poemIntervalId);
    };
  }, []);
  return <div>{error ? <p>{error}</p> : <p>{response}</p>}</div>;
}
