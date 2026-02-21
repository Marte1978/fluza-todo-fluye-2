'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// Add WhatsApp icon manually if not in lucide
const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .081 5.363.079 11.966c0 2.113.553 4.177 1.605 6.01L0 24l6.149-1.613a11.817 11.817 0 005.9 1.532h.005c6.605 0 11.97-5.363 11.972-11.966a11.815 11.815 0 00-3.614-8.451" />
    </svg>
);

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
        { role: 'assistant', content: '¡Hola! Soy Fluza AI. ¿Te gustaría saber cómo automatizar tus ventas y no perder nunca más un cliente?' }
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
            setMessages(prev => [...prev, { role: 'assistant', content: 'Lo siento, hubo un error. ¿Puedes intentar de nuevo?' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const shareToWhatsApp = () => {
        const text = `Hola, vengo de la web de Fluza y me interesa el servicio de automatización de ventas con IA. Mis datos son: ${messages.filter(m => m.role === 'user').map(m => m.content).join(' ')}`;
        window.open(`https://wa.me/18094789071?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20 z-50 text-white"
                title="Chat con Fluza AI"
            >
                {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-24 right-6 w-[400px] h-[600px] glass-panel rounded-2xl flex flex-col overflow-hidden z-50 border border-white/10 shadow-2xl"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 flex items-center justify-between border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                                    <MessageSquare size={20} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-white leading-none">Fluza AI</h3>
                                    <p className="text-xs text-cyan-400 mt-1 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        En línea
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-slate-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
                            {messages.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={cn(
                                        "max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed",
                                        m.role === 'user'
                                            ? "ml-auto bg-cyan-500/20 border border-cyan-500/30 text-white"
                                            : "bg-white/5 border border-white/10 text-slate-200"
                                    )}
                                >
                                    {m.content}
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl w-14 flex items-center justify-center">
                                    <Loader2 size={20} className="animate-spin text-cyan-400" />
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Footer */}
                        <div className="p-4 bg-white/5 border-t border-white/10">
                            <div className="flex items-center gap-2 mb-3">
                                <button
                                    onClick={shareToWhatsApp}
                                    className="flex-1 flex items-center justify-center gap-2 bg-green-600/20 hover:bg-green-600/30 border border-green-600/30 text-green-400 py-2 rounded-xl text-xs font-medium transition-all"
                                >
                                    <WhatsAppIcon />
                                    Enviar a WhatsApp
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Escribe tu mensaje..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white disabled:opacity-50 transition-all hover:bg-cyan-600"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
