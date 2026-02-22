'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function Privacidad() {
    return (
        <div className="min-h-screen bg-black text-white p-8 md:p-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto"
            >
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 mb-12 transition-colors font-bold uppercase tracking-widest text-xs">
                    <ArrowLeft size={16} /> Volver al inicio
                </Link>

                <header className="mb-16 border-b border-white/10 pb-12">
                    <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20 text-cyan-400">
                        <Shield size={32} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-black mb-4">Política de Privacidad</h1>
                    <p className="text-gray-400">Última actualización: 21 de Febrero, 2026</p>
                </header>

                <section className="space-y-12 text-gray-300 leading-relaxed text-lg">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Recolección de Información</h2>
                        <p>En Fluza, recolectamos información necesaria para proporcionar nuestros servicios de automatización de ventas. Esto incluye su nombre, dirección de correo electrónico, número de teléfono y datos de interacción con nuestro chatbot.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Uso de Datos</h2>
                        <p>Sus datos se utilizan exclusivamente para:</p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Configurar su ecosistema de ventas digital.</li>
                            <li>Personalizar las respuestas de su Agente de IA.</li>
                            <li>Soporte técnico y mejoras del servicio.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Seguridad</h2>
                        <p>Implementamos medidas de seguridad de grado bancario para proteger su información contra accesos no autorizados. Sus datos están encriptados tanto en tránsito como en reposo.</p>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-8 border border-white/10 italic">
                        "Su confianza es la base de nuestro ecosistema. Fluza nunca venderá sus datos a terceros ni los utilizará para fines ajenos a la optimización de sus ventas."
                    </div>
                </section>
            </motion.div>
        </div>
    );
}
