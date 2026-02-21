'use client';

import { motion } from 'framer-motion';
import { Clock, MessageCircle, AlertCircle, CheckCircle2, TrendingUp, Users } from 'lucide-react';

export default function FlowDiagram() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">El Antes y Después</h2>
                <p className="text-gray-400 text-lg">Visualiza cómo Fluza optimiza cada paso de tu funnel de ventas.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 relative">
                {/* Center Vertical Divider (Desktop Only) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 hidden md:block" />

                {/* BEFORE (Manual Process) */}
                <div className="space-y-8 relative">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 border border-red-500/20">
                            <AlertCircle size={24} />
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-red-400 uppercase tracking-widest">Antes: Tú solo</h3>
                    </div>

                    {[
                        { tag: 'Llegada de Lead', label: 'El prospecto pregunta en Web/WhatsApp.', time: '+30 min' },
                        { tag: 'Respuesta Tardía', label: 'Tu equipo está ocupado o es fuera de horario.', time: '+2 hrs' },
                        { tag: 'Perdida de Interés', label: 'El cliente ya se fue con la competencia.', time: 'Fatal' },
                        { tag: 'Venta Perdida', label: 'Esfuerzo malgastado y costo de adquisición alto.', time: '$$$' },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-panel p-6 rounded-2xl border-l-4 border-red-500/30 flex justify-between items-center group hover:bg-red-500/5 transition-all"
                        >
                            <div>
                                <span className="text-[10px] font-black uppercase text-red-500/70 tracking-tighter mb-1 block">{item.tag}</span>
                                <p className="text-gray-300 font-medium">{item.label}</p>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-mono font-bold text-red-400">{item.time}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* AFTER (Fluza Process) */}
                <div className="space-y-8 relative">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                            <TrendingUp size={24} />
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-cyan-400 uppercase tracking-widest">Después: Con Fluza</h3>
                    </div>

                    {[
                        { tag: 'Impacto Inmediato', label: 'Fluza AI responde en menos de 3 segundos.', time: 'IA' },
                        { tag: 'Calificación', label: 'La IA clasifica al lead y extrae datos clave.', time: 'Data' },
                        { tag: 'Cierre o Cita', label: 'Agenda cita o cierra la venta de inmediato.', time: 'Win' },
                        { tag: 'WhatsApp Notif', label: 'Tú recibes la venta lista en tu móvil.', time: 'Click' },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-panel p-6 rounded-2xl border-l-4 border-cyan-500 flex justify-between items-center group hover:bg-cyan-500/5 transition-all shadow-xl shadow-cyan-500/5"
                        >
                            <div>
                                <span className="text-[10px] font-black uppercase text-cyan-400 tracking-tighter mb-1 block">{item.tag}</span>
                                <p className="text-white font-medium">{item.label}</p>
                            </div>
                            <div className="text-right">
                                <CheckCircle2 className="text-cyan-400" size={20} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
