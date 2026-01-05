
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { PERSONAL_BIO } from "../constants";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async askAboutPaula(prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: [
          ...history.map(h => ({ role: h.role === 'model' ? 'model' : 'user', parts: h.parts })),
          { role: 'user', parts: [{ text: prompt }] }
        ],
        config: {
          systemInstruction: `You are a professional AI assistant representing Paula Gimeno. 
          Paula's profile: ${PERSONAL_BIO}. 
          She is an Industrial Design Engineer, UX expert, and Data Analyst. 
          Use a professional, friendly, and helpful tone. 
          If asked about her projects, mention Leroy Merlin, Avanza Zaragoza, and Feline Colonies. 
          If asked complex technical questions about design or engineering, use your "thinking" capability to provide a deep, structured answer.`,
          thinkingConfig: { thinkingBudget: 32768 }
        },
      });

      return response.text || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm experiencing some technical difficulties. Please try again later.";
    }
  }
}

export const gemini = new GeminiService();
