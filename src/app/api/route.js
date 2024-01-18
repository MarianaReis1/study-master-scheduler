import { ChatGPTAPI } from 'chatgpt'

export async function GET() {
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY,
    completionParams: {
      model: 'gpt-4',
      temperature: 0.5,
      top_p: 0.8
    }
  })

  const res = await api.sendMessage('Create a revision plan for someone studying Maths, English and Science at GCSE. The student has two hours a day to revise for three months. Split the revision sessions into 30-minute Pomodoro sessions which focus on different topics within the same subject. Focus on one subject per day. Suggest a mix of online and offline revision activities.')
  
  console.log(res.text)
  return Response.json(res)
}