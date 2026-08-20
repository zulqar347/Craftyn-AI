import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API,
  baseURL: "https://api.groq.com/openai/v1",
});

async function test() {
  const models = await openai.models.list();

  console.log(models.data.map((model) => model.id));
}

test();
