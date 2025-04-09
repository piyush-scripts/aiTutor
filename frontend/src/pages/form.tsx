import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { promptFormSchema } from "@/schemas/zod";
import axios  from "axios"


export default function PromptForm() {
  // Initialize form with React Hook Form
  const form = useForm<z.infer<typeof promptFormSchema>>({
    resolver: zodResolver(promptFormSchema),
    defaultValues: {
      courseName: "",
      courseGoal: "",
      courseDuration: 12,
      courseLanguage: "English",
      courseLevel: "bot",
    },
  });

  // Define submit handler
  async function onSubmit(values: z.infer<typeof promptFormSchema>) {
    // This would typically send the data to a server
    await axios.post('http://localhost:8787/api/courseGen',{
      values
    })
    console.log(values);
    alert("Form submitted successfully!");
    form.reset();
  }

  return (

    <div className="min-h-screen w-full flex items-center justify-center bg-blue-900 p-4 md:p-8">
        <div className="w-full max-w-xl bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-xl p-6 md:p-8">
            <h1 className="text-2xl font-bold text-white mb-6 text-center">Create Your Course</h1>
            <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="courseName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white ">Course Name</FormLabel>
                <FormControl>
                  <Input placeholder="Introduction to Programming" {...field} className="bg-white/5 text-white border-white/10 placeholder:text-white/50 focus:border-white/30"/>
                </FormControl>
                <FormMessage className="text-red-300"/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="courseGoal"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Course Goal</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="What do you want to achieve with this course?"
                    className="min-h-20 bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-white/30"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="courseDuration"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Course Duration (weeks)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="12"
                    className="bg-white/5 text-white border-white/10 placeholder:text-white/50 focus:border-white/30"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage className="text-red-300"/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="courseLanguage"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Course Language</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="text-white bg-blue-800 border-white/10 ">
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Hindi">Hindi</SelectItem>
                    <SelectItem value="Hinglish">Hinglish</SelectItem>
                    <SelectItem value="Telugu">Telugu</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="courseLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Course Level</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="text-white border-white/10 bg-white/5 ">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-blue-800 border-white/10 text-white ">
                    <SelectItem value="bot">Bot</SelectItem>
                    <SelectItem value="noob">Noob</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="Little knowledge">
                      Little Knowledge
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="bg-blue-950 w-full p-5" type="submit">Create Course</Button>
        </form>
      </Form>

        </div>
         </div>
  );
}
