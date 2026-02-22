'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Contacto() {
    const whatsappUrl = "https://wa.me/18094789071?text=Hola!%20Quiero%20hablar%20con%20un%20especialista%20de%20Fluza.";

    return (
        <div className="min-h-screen bg-black text-white p-8 md:p-24 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-4xl w-full glass-panel p-12 md:p-20 rounded-[3rem] border-2 border-cyan-500/20 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 z-0"></div>

                <div className="relative z-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 mb-12 transition-colors font-bold uppercase tracking-widest text-xs">
                        <ArrowLeft size={16} /> Volver al inicio
                    </Link>

                    <h1 className="text-4xl md:text-7xl font-heading font-black mb-8 leading-tight">
                        ¿Listo para <span className="text-gradient">fluir?</span>
                    </h1>
                    <p className="text-gray-400 text-xl mb-12 max-w-2xl leading-relaxed">
                        Estamos aquí para transformar tu proceso de ventas. Nuestro equipo responde en minutos a través de WhatsApp.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            className="group glass-card p-10 rounded-3xl border-2 border-[#25D366]/20 hover:border-[#25D366]/50 bg-[#25D366]/5 transition-all flex flex-col items-center justify-center text-center gap-6"
                        >
                            <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 group-hover:scale-110 transition-transform">
                                <MessageCircle size={36} fill="white" className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Chatea por WhatsApp</h3>
                                <p className="text-[#25D366] font-bold">Respuesta Inmediata 🚀</p>
                            </div>
                        </a>

                        <div className="space-y-8 flex flex-col justify-center">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-cyan-400">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-gray-500 text-xs font-black uppercase tracking-widest mb-1">Email</h4>
                                    <p className="text-white font-bold text-lg">info@fluza.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-purple-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-gray-500 text-xs font-black uppercase tracking-widest mb-1">Ubicación</h4>
                                    <p className="text-white font-bold text-lg">República Dominicana</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
