'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, Sparkles, User, Bot, Plus, Mic, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export default function ChatSection() {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: '¿En qué puedo ayudarte hoy sobre la propuesta de Fluza?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = { role: 'user' as const, content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...messages, userMessage] }),
            });

            const data = await response.json();
            if (data.message) {
                setMessages(prev => [...prev, data.message]);
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages(prev => [...prev, { role: 'assistant', content: 'Lo siento, hubo un error conectando con Fluza AI. ¿Puedes intentar de nuevo?' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const shareToWhatsApp = () => {
        const text = `Hola, quiero saber más sobre Fluza. Mi consulta: ${messages.filter(m => m.role === 'user').map(m => m.content).join(' ')}`;
        window.open(`https://wa.me/18094789071?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <section className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-4xl flex flex-col h-full relative z-10">
                {/* Title / Hero of the section */}
                <AnimatePresence mode="wait">
                    {messages.length === 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">
                                Interactúa con la Propuesta
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Pregúntame lo que sea sobre los planes, automatización o cómo Fluza puede transformar tu negocio.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Chat History */}
                <div className={cn(
                    "flex-1 overflow-y-auto space-y-8 mb-8 pr-4 custom-scrollbar",
                    messages.length > 1 ? "min-h-[400px] max-h-[600px]" : "h-0"
                )}>
                    {messages.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={cn(
                                "flex gap-6 items-start group",
                                m.role === 'assistant' ? "justify-start" : "justify-start flex-row-reverse text-right"
                            )}
                        >
                            <div className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center shrink-0 border",
                                m.role === 'assistant'
                                    ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
                                    : "bg-white/5 border-white/10 text-gray-400"
                            )}>
                                {m.role === 'assistant' ? <Bot size={20} /> : <User size={20} />}
                            </div>
                            <div className={cn(
                                "flex flex-col gap-2 max-w-[80%]",
                                m.role === 'user' && "items-end"
                            )}>
                                <div className={cn(
                                    "text-lg leading-relaxed",
                                    m.role === 'assistant' ? "text-gray-200" : "text-white font-medium"
                                )}>
                                    {m.content}
                                </div>
                                {m.role === 'assistant' && i === messages.length - 1 && messages.length > 1 && (
                                    <button
                                        onClick={shareToWhatsApp}
                                        className="flex items-center gap-2 text-xs font-bold text-cyan-500 hover:text-cyan-400 transition-colors uppercase tracking-widest mt-2"
                                    >
                                        <Share2 size={14} /> Enviar resumen a WhatsApp
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                    {isLoading && (
                        <div className="flex gap-6 items-start">
                            <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                                <Bot size={20} />
                            </div>
                            <div className="flex items-center gap-1 py-4">
                                <span className="w-2 h-2 bg-cyan-500/50 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                <span className="w-2 h-2 bg-cyan-500/50 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                <span className="w-2 h-2 bg-cyan-500/50 rounded-full animate-bounce" />
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area (ChatGPT Style) */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur opacity-75 group-focus-within:opacity-100 transition duration-1000 group-hover:duration-200 rounded-3xl" />
                    <div className="relative glass-panel rounded-3xl p-2 flex flex-col border border-white/10 group-focus-within:border-cyan-500/30 transition-all shadow-2xl">
                        <div className="flex items-center gap-1 pl-4 pr-3 py-2">
                            <button className="text-gray-500 hover:text-white transition-colors p-2">
                                <Plus size={20} />
                            </button>
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSend();
                                    }
                                }}
                                placeholder="Pregunta lo que quieras sobre Fluza..."
                                className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 text-lg py-3 resize-none max-h-48 min-h-[44px] custom-scrollbar"
                                rows={1}
                            />
                            <div className="flex items-center gap-2">
                                <button className="text-gray-500 hover:text-white transition-colors p-2 hidden sm:flex">
                                    <Mic size={20} />
                                </button>
                                <button
                                    onClick={handleSend}
                                    disabled={isLoading || !input.trim()}
                                    className={cn(
                                        "w-12 h-12 rounded-2xl flex items-center justify-center transition-all",
                                        input.trim()
                                            ? "bg-white text-black hover:bg-gray-200"
                                            : "bg-white/5 text-gray-700 pointer-events-none"
                                    )}
                                >
                                    {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={20} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Suggestions */}
                <AnimatePresence>
                    {messages.length === 1 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="flex flex-wrap justify-center gap-3 mt-8"
                        >
                            {[
                                '¿Cómo funciona Fluza?',
                                '¿Cuáles son los precios?',
                                '¿Cómo se integra con WhatsApp?',
                                '¿Qué es el plan Pro?'
                            ].map((s, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setInput(s);
                                        // Force focus or auto send could go here
                                    }}
                                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-sm hover:bg-white/10 hover:text-white hover:border-white/20 transition-all font-medium"
                                >
                                    {s}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
