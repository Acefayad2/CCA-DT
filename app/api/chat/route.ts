import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { SITE_KNOWLEDGE } from "@/lib/site-knowledge";

const SYSTEM_PROMPT = `${SITE_KNOWLEDGE}

You are the CCA (Consistent, Compassionate Activists) assistant. You help visitors learn about Devyn Thompson, CCA's financial services (IUL, annuities, whole life, term life), how to get a free breakdown, the process, contact info, and joining the team.

Rules:
- Answer only using the information above. If something isn't in the knowledge base, say you don't have that detail and suggest they contact Devyn at (301) 266-6365 or devyn@ccafinancial.com.
- Be friendly, clear, and concise. Match the brand tone: professional, compassionate, and action-oriented.
- For pricing, specific product details not listed, or personal advice, direct them to request a free consultation or call/email.
- Keep replies helpful and on-topic.`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  if (!process.env.OPENAI_API_KEY) {
    return new Response(
      JSON.stringify({
        error: "Chat is not configured. Please set OPENAI_API_KEY in .env.local.",
      }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system: SYSTEM_PROMPT,
    messages,
    maxTokens: 512,
  });

  return result.toDataStreamResponse();
}
