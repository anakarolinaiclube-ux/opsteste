import OpenAI from "openai";

export default async function handler(req, res) {
  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const prompt = req.body.prompt;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt não enviado" });
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Você é um chef especialista em criar receitas a partir de ingredientes."
        },
        {
          role: "user",
          content: prompt
        }
      ]
    });

    // IA responde
    const text = completion.choices[0].message.content;

    return res.status(200).json({ result: text });
  } catch (error) {
    console.error("Erro na API:", error.response?.data || error);
    return res.status(500).json({ error: "Erro ao gerar receita" });
  }
}
