import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function enhancePrompt(prompt: string) {
  if (!prompt) return prompt;
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Enhance this prompt for a cinematic AI video generation tool. Make it more descriptive, artistic, and detailed. Keep it under 500 characters. Original prompt: ${prompt}`,
      config: {
        systemInstruction: "You are an expert AI prompt engineer for cinematic video generation.",
      },
    });
    
    return response.text || prompt;
  } catch (error) {
    console.error("Error enhancing prompt:", error);
    return prompt;
  }
}
