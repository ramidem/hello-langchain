import dotenv from "dotenv";

dotenv.config();

interface Config {
  openAIApiKey: string;
  port: string | number;
}

function getConfig(): Config {
  const openAIApiKey = process.env.OPENAI_API_KEY as string;
  const port = process.env.PORT ?? 3000;
  return {
    openAIApiKey,
    port,
  };
}

export default getConfig();
