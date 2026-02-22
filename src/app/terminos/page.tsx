'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export default function Terminos() {
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
                    <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 text-purple-400">
                        <FileText size={32} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-black mb-4">Términos y Condiciones</h1>
                    <p className="text-gray-400">Última actualización: 21 de Febrero, 2026</p>
                </header>

                <section className="space-y-12 text-gray-300 leading-relaxed text-lg">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">1. El Servicio</h2>
                        <p>Fluza proporciona una plataforma de automatización de ventas basada en IA. El uso del servicio requiere una suscripción activa y el cumplimiento de nuestras políticas éticas de comunicación.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Pagos y Suscripción</h2>
                        <p>Los precios indicados en el sitio web (Plan Esencial, PRO y Elite) no incluyen impuestos locales si aplican. La suscripción se factura mensualmente y puede ser cancelada en cualquier momento con aviso previo.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Responsabilidad</h2>
                        <p>Nuestro Agente de IA está diseñado para asistir en las ventas, pero el usuario es responsable del contenido final comunicado a sus clientes. Fluza no se hace responsable de las decisiones comerciales tomadas por los leads interactuando con el bot.</p>
                    </div>
                </section>
            </motion.div>
        </div>
    );
}
