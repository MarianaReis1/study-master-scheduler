import { ChatGPTAPI } from "chatgpt";
import { promises as fs } from 'fs';

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  console.log(searchParams.get("topic"));
  const prompt = await fs.readFile(process.cwd() + '/src/app/api/topic/prompt.txt', 'utf8');
  const replacedPrompt = prompt.replace("$TOPIC_NAME", searchParams.get("topic"));
  console.log(replacedPrompt);
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY,
    completionParams: {
      model: "gpt-4-1106-preview",
      temperature: 0.5,
      top_p: 0.8,
      response_format: {
        "type": "json_object"
      }
    },
  });

  const res = await api.sendMessage(replacedPrompt);

  console.log(res.text);
  return Response.json(res);
}
