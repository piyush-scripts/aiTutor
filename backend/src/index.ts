import { Hono } from 'hono'
import {z} from 'zod'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { promptFormSchema } from './schemas/zod';
import { cors } from "hono/cors"

const app = new Hono()


const genAI = new GoogleGenerativeAI("AIzaSyATRaMfD_afWX1fSm319CucPTl9G86ZqL8");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
app.use('/api/*',cors());
app.post('/api/courseGen', async (c)  => {
    try {
        const body = await c.req.json();
        const prompt =   "Based on the given details contruct a course in json format";
        const result = await model.generateContent(prompt);
        console.log(result.response.text())  
        return c.json(result.response.text());
    } catch (error) {
     console.error(error);   
    }
    
})
export default app