"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promptFormSchema = void 0;
const zod_1 = require("zod");
const langEnum = zod_1.z.enum([
    "English",
    "english",
    "Hindi",
    "hindi",
    "Hinglish",
    "hinglish",
    "Telugu",
    "telugu",
], {
    errorMap: () => ({ message: "We are not available in that language" }),
});
const levelEnum = zod_1.z.enum([
    "bot",
    "noob",
    "beginner",
    "Little knowledge"
], {
    errorMap: () => ({ message: "Please enter valid level." }),
});
exports.promptFormSchema = zod_1.z.object({
    courseName: zod_1.z.string().min(2, {
        message: "Course Name should be atleast 2 characters.",
    }),
    courseGoal: zod_1.z.string().min(2, {
        message: "Please elaborate your goals for better course generation.",
    }),
    courseDuration: zod_1.z.number().max(1000, {
        message: "Course duration is to be entered in weeks.",
    }),
    courseLanguage: langEnum,
    courseLevel: levelEnum,
});
