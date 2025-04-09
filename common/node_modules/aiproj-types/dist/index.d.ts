import { z } from "zod";
export declare const promptFormSchema: z.ZodObject<{
    courseName: z.ZodString;
    courseGoal: z.ZodString;
    courseDuration: z.ZodNumber;
    courseLanguage: z.ZodEnum<["English", "english", "Hindi", "hindi", "Hinglish", "hinglish", "Telugu", "telugu"]>;
    courseLevel: z.ZodEnum<["bot", "noob", "beginner", "Little knowledge"]>;
}, "strip", z.ZodTypeAny, {
    courseName: string;
    courseGoal: string;
    courseDuration: number;
    courseLanguage: "English" | "english" | "Hindi" | "hindi" | "Hinglish" | "hinglish" | "Telugu" | "telugu";
    courseLevel: "bot" | "noob" | "beginner" | "Little knowledge";
}, {
    courseName: string;
    courseGoal: string;
    courseDuration: number;
    courseLanguage: "English" | "english" | "Hindi" | "hindi" | "Hinglish" | "hinglish" | "Telugu" | "telugu";
    courseLevel: "bot" | "noob" | "beginner" | "Little knowledge";
}>;
