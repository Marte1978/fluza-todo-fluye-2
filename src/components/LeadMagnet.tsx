'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, Download, CheckCircle, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LeadMagnet() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1500);
    };

    return (
        <section className="max-w-5xl mx-auto px-6 py-24">
            <div className="glass-panel p-12 md:p-16 rounded-[3rem] border-2 border-cyan-500/20 relative overflow-hidden bg-gradient-to-br from-cyan-950/20 via-black to-purple-950/10">
                {/* Abstract shapes */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-2xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-black uppercase tracking-widest mb-8">
                        <Sparkles size={14} /> Recurso Gratuito
                    </div>

                    <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 leading-tight">
                        Descarga: "Cómo la IA puede <mark className="bg-cyan-500 text-black px-2">duplicar tus ventas</mark> en 30 días"
                    </h2>
                    <p className="text-gray-400 text-lg mb-10">
                        Hemos sintetizado nuestra experiencia automatizando cientos de negocios en este reporte exclusivo de 15 páginas. Gratis por tiempo limitado.
                    </p>

                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="flex flex-col sm:flex-row gap-4 items-stretch justify-center"
                            >
                                <div className="relative flex-1 max-w-md">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Tu correo electrónico principal"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all text-lg"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="bg-white text-black font-black py-5 px-8 rounded-2xl flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 text-lg whitespace-nowrap shadow-xl shadow-white/5"
                                >
                                    {isLoading ? "Enviando..." : "Quiero mi copia"}
                                    <ArrowRight size={20} />
                                </button>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-cyan-500/10 border border-cyan-500/30 p-8 rounded-[2rem] text-center"
                            >
                                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-black mx-auto mb-6 shadow-lg shadow-cyan-500/20">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">¡Reporte Enviado!</h3>
                                <p className="text-gray-400">Revisa tu bandeja de entrada (y spam) en unos minutos. Mientras tanto, sigue chateando con Fluza AI abajo.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <p className="mt-8 text-xs text-gray-500">
                        Respetamos tu privacidad. Al unirte, aceptas recibir consejos exclusivos de automatización semanales.
                    </p>
                </div>
            </div>
        </section>
    );
}
