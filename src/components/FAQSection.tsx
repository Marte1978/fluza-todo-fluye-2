'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
    {
        question: "¿Qué es exactamente Fluza?",
        answer: "Fluza es un ecosistema de Inteligencia Artificial que actúa como tu vendedor digital 24/7. Responde mensajes, califica leads, agenda citas y se integra con tu WhatsApp para que no pierdas ninguna oportunidad de venta."
    },
    {
        question: "¿Necesito conocimientos técnicos para usarlo?",
        answer: "Para nada. Nosotros nos encargamos de toda la configuración, entrenamiento de la IA e implementación. Tú solo recibes los cierres y las citas en tu WhatsApp."
    },
    {
        question: "¿Es seguro para mis datos y los de mis clientes?",
        answer: "Totalmente. Utilizamos encriptación de grado bancario y cumplimos con las normativas de privacidad más estrictas. Tus datos son solo tuyos."
    },
    {
        question: "¿Cómo se integra con WhatsApp?",
        answer: "Usamos integraciones oficiales que permiten a la IA responder de forma natural. Los datos capturados se envían directamente a tu número personal para que tomes el control cuando desees."
    },
    {
        question: "¿En cuánto tiempo puedo tenerlo funcionando?",
        answer: "Nuestro proceso de implementación express toma menos de 7 días desde el diagnóstico inicial hasta el lanzamiento oficial."
    }
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="max-w-4xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Preguntas Frecuentes</h2>
                <p className="text-gray-400 text-lg">Todo lo que necesitas saber sobre la IA que transformará tu negocio.</p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        className={cn(
                            "glass-panel rounded-2xl overflow-hidden border border-white/5 transition-all",
                            activeIndex === i ? "border-cyan-500/30 ring-1 ring-cyan-500/20" : "hover:border-white/10"
                        )}
                    >
                        <button
                            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                            className="w-full flex items-center justify-between p-6 text-left"
                        >
                            <div className="flex items-center gap-4">
                                <HelpCircle className={cn("shrink-0 transition-colors", activeIndex === i ? "text-cyan-400" : "text-gray-500")} size={22} />
                                <span className={cn("text-lg font-bold transition-colors", activeIndex === i ? "text-white" : "text-gray-300")}>
                                    {faq.question}
                                </span>
                            </div>
                            <ChevronDown
                                className={cn("text-gray-500 transition-transform duration-300", activeIndex === i && "rotate-180 text-cyan-400")}
                                size={20}
                            />
                        </button>
                        <AnimatePresence>
                            {activeIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="px-6 pb-6 text-gray-400 leading-relaxed pl-16">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
