import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || 'placeholder_for_build',
});

const SYSTEM_PROMPT = `
Eres Fluza AI, el vendedor digital experto de Fluza. Tu objetivo principal es asesorar a los clientes sobre cómo automatizar sus ventas con IA y CERRAR una cita o venta.

REGLAS DE CONSERVACIÓN:
1. Sé extremadamente amable, profesional y persuasivo.
2. Identifica el problema del cliente (pierde ventas por falta de respuesta, saturación, etc.).
3. Explica cómo Fluza soluciona eso (Vendedor 24/7, respuestas instantáneas, integración con WhatsApp).
4. Cuando el cliente muestre interés, pide cordialmente sus datos para agendar una CONSULTA GRATUITA o cerrar el servicio.
5. Los datos necesarios son: Nombre, Correo/Teléfono y Negocio/Necesidad.
6. Una vez tengas los datos, confirma que un especialista se pondrá en contacto y ofrece enviar un resumen a WhatsApp.

TONO: Premium, innovador y humano.

IMPORTANTE: Si el cliente proporciona sus datos, finaliza la conversación de forma que sea fácil extraerlos. 
`;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json({ error: 'OpenAI API Key not configured' }, { status: 500 });
        }

        const response = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                ...messages,
            ],
            temperature: 0.7,
        });

        return NextResponse.json({ message: response.choices[0].message });
    } catch (error: any) {
        console.error('Chat API Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
