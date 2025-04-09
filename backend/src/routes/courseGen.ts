import { GoogleGenerativeAI } from "@google/generative-ai";
import { Hono } from "hono";


const app = new Hono();



app.post('/api/courseGen', async (c) => {
    const genAI = new GoogleGenerativeAI("AIzaSyATRaMfD_afWX1fSm319CucPTl9G86ZqL8");
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const prompt = "Explain how AI works";

    const result = await model.generateContent(prompt);
    return c.text(result.response.text());
})






