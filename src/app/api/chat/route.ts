import { NextResponse } from 'next/server';

const N8N_WEBHOOK_URL = 'https://automatizacion-n8n.lnr2f0.easypanel.host/webhook/Fluza2';

export async function POST(req: Request) {
    try {
        const { messages, sessionId } = await req.json();

        // Get the last user message
        const lastMessage = messages[messages.length - 1];

        const response = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: lastMessage.content,
                sessionId: sessionId || `session-${Date.now()}`,
            }),
        });

        if (!response.ok) {
            throw new Error(`n8n error: ${response.statusText}`);
        }

        const data = await response.json();

        // 1️⃣ Detección Exhaustiva de Respuestas (8 campos)
        const content =
            data.recommendations ||
            data.text ||
            data.output ||
            data.message ||
            data.response ||
            data.result ||
            data.data ||
            data.content ||
            "Lo siento, recibí una respuesta pero no pude procesar el mensaje. ¿Puedes intentar de nuevo?";

        return NextResponse.json({
            message: {
                role: 'assistant',
                content: content
            }
        });

    } catch (error: any) {
        console.error('Chat API Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
