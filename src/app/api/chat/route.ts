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

        let content = '';
        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
            try {
                const data = await response.json();
                content =
                    data.recommendations ||
                    data.text ||
                    data.output ||
                    data.message ||
                    data.response ||
                    data.result ||
                    data.data ||
                    data.content ||
                    JSON.stringify(data);
            } catch (jsonError) {
                // If it claims to be JSON but fails to parse, fallback to text
                content = await response.text();
            }
        } else {
            // If it's not JSON (e.g. plain text), get it as text
            content = await response.text();
        }

        return NextResponse.json({
            message: {
                role: 'assistant',
                content: content || "Recibí una respuesta vacía. ¿Puedes intentar de nuevo?"
            }
        });

    } catch (error: any) {
        console.error('Chat API Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
