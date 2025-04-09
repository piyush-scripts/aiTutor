import { z } from "zod";

export const langEnum = z.enum(
  [
    "English",
    "english",
    "Hindi",
    "hindi",
    "Hinglish",
    "hinglish",
    "Telugu",
    "telugu",
  ],
  {
    errorMap: () => ({ message: "We are not available in that language" }),
  }
);
export type langEnum = z.infer<typeof langEnum>;

export const levelEnum = z.enum(
  [
    "bot",
    "noob",
    "beginner",
    "Little knowledge"
  ],
  {
    errorMap: () => ({ message: "Please enter valid level." }),
  }
);
export type levelEnum = z.infer<typeof levelEnum>;

export const promptFormSchema = z.object({
  courseName: z.string().min(2, {
    message: "Course Name should be atleast 2 characters.",
  }),
  courseGoal: z.string().min(2, {
    message: "Please elaborate your goals for better course generation.",
  }),
  courseDuration: z.number().max(1000, {
    message: "Course duration is to be entered in weeks.",
  }),
  courseLanguage: langEnum,
  courseLevel: levelEnum,
});

export type promptFormSchema = z.infer<typeof promptFormSchema>;