'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
    const phoneNumber = '18094789071';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hola!%20Estoy%20interesado%20en%20el%20ecosistema%20de%20Fluza.`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/20 group"
        >
            <div className="absolute -top-12 right-0 bg-white text-black text-[10px] font-black px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-gray-100 uppercase tracking-tighter pointer-events-none">
                Chatea con nosotros
            </div>
            <MessageCircle size={32} fill="currentColor" />
        </motion.a>
    );
}
