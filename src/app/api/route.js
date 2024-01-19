import { ChatGPTAPI } from "chatgpt";
import { promises as fs } from "fs";

export async function GET() {
  const prompt = await fs.readFile(
    process.cwd() + "/src/app/api/prompt.txt",
    "utf8",
  );
  console.log(prompt);
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY,
    completionParams: {
      model: "gpt-4-1106-preview",
      temperature: 0.5,
      top_p: 0.8,
      response_format: {
        type: "json_object",
      },
    },
  });

  const res = await api.sendMessage(prompt);

  console.log(res.text);
  return Response.json(res);
}
