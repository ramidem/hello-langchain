import { Request, Response } from "express";
import { Configuration, OpenAIApi } from "openai";
import Config from "../config/Config";

const configuration = new Configuration({
  apiKey: Config.openAIApiKey,
});

const openai = new OpenAIApi(configuration);

export async function complete(req: Request, res: Response) {
  const prompt = req.body.prompt;

  try {
    const completion = await openai.createCompletion({
      prompt,
      model: "text-davinci-003",
      max_tokens: 7,
      temperature: 0.7,
    });

    res.status(200).json({ message: completion.data.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}
