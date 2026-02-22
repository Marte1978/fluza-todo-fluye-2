'use client';

import { motion } from 'framer-motion';
import {
  Rocket,
  ShieldCheck,
  Zap,
  Database,
  Calendar,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Users,
  Star,
  Hourglass,
  Quote
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

// Custom Sections
import Link from 'next/link';
import ChatSection from '@/components/ChatSection';
import FAQSection from '@/components/FAQSection';
import FlowDiagram from '@/components/FlowDiagram';
import LeadMagnet from '@/components/LeadMagnet';
import CountdownTimer from '@/components/CountdownTimer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar / Header */}
      <header className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center shadow-2xl shadow-cyan-500/20 group overflow-hidden">
            <Image
              src="https://gitlab.com/willymartetirado/blank-site-2026-01-23-n1blm/-/raw/main/imagen_2026-02-06_213237322.png"
              alt="Fluza Logo"
              width={64}
              height={64}
              className="object-contain relative z-10 p-2"
            />
          </div>
          <div>
            <h1 className="text-3xl font-heading font-black text-white tracking-tight">Fluza</h1>
            <p className="text-sm text-gray-400 font-medium tracking-wide">Tu Vendedor Digital 24/7</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block text-right"
        >
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">VENDE MÁS, TRABAJA MENOS</p>
          <p className="text-sm text-gradient font-heading font-bold">Con el Sistema Fluza</p>
        </motion.div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center relative">
        <motion.h1
          className="text-4xl md:text-7xl font-heading font-black leading-tight mb-8 text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          ¿Pierdes clientes por <br />
          <span className="text-red-500">NO responder a tiempo?</span>
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12 max-w-5xl mx-auto">
          {/* Problem Card */}
          <motion.div
            {...fadeInUp}
            className="glass-panel p-10 rounded-3xl border-l-4 border-red-500 text-left relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute -right-10 -top-10 bg-red-500/10 w-40 h-40 blur-3xl rounded-full group-hover:bg-red-500/20 transition-all"></div>
            <h3 className="text-red-400 font-bold text-2xl mb-4 flex items-center gap-3">
              <Zap className="text-red-500" /> <span>El Problema</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed relative z-10">
              Tu negocio pierde hasta el <strong className="text-white">80% de oportunidades</strong> simplemente por no responder en los primeros 5 minutos.
            </p>
            <div className="mt-8">
              <div className="flex justify-between mb-2">
                <span className="text-xs font-bold text-red-400 uppercase tracking-tighter">Oportunidades Perdidas</span>
                <span className="text-xs font-bold text-red-400">80%</span>
              </div>
              <div className="w-full bg-gray-700/50 h-3 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '80%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-red-500 h-full animate-pulse"
                />
              </div>
            </div>
          </motion.div>

          {/* Solution Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full z-0"></div>
            <div className="glass-panel w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full flex flex-col justify-center items-center border-2 border-cyan-500/30 shadow-[0_0_60px_rgba(6,182,212,0.3)] relative z-10">
              <span className="text-5xl md:text-7xl font-heading font-black text-white mb-2">3 seg</span>
              <span className="text-cyan-400 text-sm uppercase tracking-widest font-bold text-center">Tiempo Respuesta</span>
              <p className="text-gray-500 text-xs mt-4">Con Fluza AI</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flow Diagram (Before/After) */}
      <FlowDiagram />

      {/* The Solution */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          className="glass-panel rounded-[2rem] p-12 md:p-20 border border-cyan-500/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
              La Solución: <span className="text-gradient">El Vendedor 24/7</span>
            </h2>
            <p className="text-gray-400 text-lg">Un ecosistema de inteligencia artificial diseñado para capturar, atender y convertir leads automáticamente.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Rocket, label: 'Automatización 24/7', desc: 'Ventas sin interrupciones.', color: 'text-cyan-400' },
              { icon: ShieldCheck, label: 'Integración Total', desc: 'Web + WhatsApp + CRM.', color: 'text-purple-400' },
              { icon: Zap, label: 'Velocidad Extrema', desc: 'Respuestas en <3 segundos.', color: 'text-blue-400' },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-2xl text-center"
              >
                <div className={cn("w-16 h-16 mx-auto rounded-2xl bg-white/5 flex items-center justify-center mb-6", item.color)}>
                  <item.icon size={32} />
                </div>
                <h4 className="text-white font-bold text-xl mb-3">{item.label}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 divide-x divide-gray-800 mt-20 border-t border-gray-800 pt-12">
            {[
              { val: '+40%', label: 'Conversión' },
              { val: '<3s', label: 'Respuesta' },
              { val: '40h+', label: 'Ahorro' },
            ].map((m, i) => (
              <div key={i} className="text-center px-4">
                <span className="block text-3xl md:text-5xl font-bold text-white mb-2">{m.val}</span>
                <span className="text-xs text-gray-500 uppercase font-black tracking-widest">{m.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-16 text-center text-white">Ecosistema de Funcionalidades</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: MessageSquare,
              title: 'WhatsApp Autopilot',
              desc: 'Atiende mensajes 24/7 con tono humano. Califica leads y transfiere automáticamente.',
              theme: 'from-green-500 to-green-700'
            },
            {
              icon: Calendar,
              title: 'Agenda Automática',
              desc: 'Propone horarios libres, confirma citas y envía recordatorios preventivos.',
              theme: 'from-purple-500 to-purple-700'
            },
            {
              icon: Database,
              title: 'CRM Integrado',
              desc: 'Registro automático y scoring inteligente de clientes potenciales para tu equipo.',
              theme: 'from-orange-500 to-orange-700'
            },
            {
              icon: Zap,
              title: 'IA Conversacional',
              desc: 'Cierre de ventas guiado por objetivos y extracción de datos clave en tiempo real.',
              theme: 'from-cyan-500 to-blue-700'
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 rounded-3xl flex gap-8 items-start group"
            >
              <div className={cn("shrink-0 w-20 h-20 bg-gradient-to-br rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform", f.theme)}>
                <f.icon size={36} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Chat Section */}
      <ChatSection />

      {/* Lead Magnet */}
      <LeadMagnet />

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h4 className="text-center text-gray-500 uppercase tracking-widest font-black mb-20 text-sm">Resultados Reales</h4>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              name: 'Leddeny Delmonte',
              role: 'CEO',
              company: 'Creativo Express',
              text: 'En el primer mes, la tasa de conversión subió un 38%. Nuestro equipo ahora solo habla con leads realmente interesados.',
              logo: 'https://gitlab.com/willymartetirado/blank-site-2025-12-23-g9duu/-/raw/main/WhatsApp_Image_2025-12-22_at_11.30.28_AM.jpeg'
            },
            {
              name: 'Ariel Calzado',
              role: 'Gerente',
              company: 'Darius Agency',
              text: 'Ahorramos más de 50 horas mensuales en gestión manual y nuestros procesos de cobro son un 65% más eficientes.',
              logo: 'https://gitlab.com/willymartetirado/blank-site-2025-12-23-g9duu/-/raw/main/Logo-Cobro-Rapido.png'
            }
          ].map((t, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.2 }}
              className="glass-panel p-12 rounded-[2.5rem] relative group"
            >
              <Quote className="absolute top-10 left-10 text-white/5 w-20 h-20" />
              <div className="absolute top-10 right-10 bg-green-500/20 text-green-400 text-xs font-bold px-4 py-2 rounded-full border border-green-500/30 flex items-center gap-2">
                <CheckCircle2 size={14} /> Cliente Verificado
              </div>
              <p className="text-xl italic text-gray-200 leading-relaxed mb-10 relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-6 border-t border-white/10 pt-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white p-2 flex items-center justify-center shadow-xl">
                  <Image src={t.logo} alt={t.company} width={64} height={64} className="object-contain" />
                </div>
                <div>
                  <h5 className="text-white font-bold text-lg">{t.name}</h5>
                  <p className="text-gray-400 text-sm">{t.role} en <span className="text-cyan-400 font-bold">{t.company}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Inversión y Planes</h2>
          <p className="text-gray-400 text-lg">Tecnología de punta a un precio accesible para tu crecimiento.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-end">
          {/* STARTER */}
          <motion.div {...fadeInUp} className="glass-card rounded-[2rem] p-10 relative">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 rounded-full bg-gray-800 text-gray-400 text-xs font-black tracking-widest mb-6 uppercase">Esencial</span>
              <h4 className="text-2xl font-bold text-white mb-2">Automatización</h4>
              <p className="text-4xl font-heading font-black text-white mt-4">RD$ 10,000</p>
              <p className="text-cyan-400 font-bold mt-2">+ RD$ 1,500/mes</p>
            </div>
            <ul className="space-y-4 text-gray-400 mb-10">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> Web + Chat IA</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> Agenda Automática</li>
            </ul>
            <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold transition-all">Seleccionar</button>
          </motion.div>

          {/* PRO */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
            className="relative z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500 rounded-[2rem] opacity-20 blur-2xl"></div>
            <div className="glass-panel rounded-[2rem] p-12 border-2 border-cyan-500/50 relative overflow-hidden bg-dark-900/40">
              <div className="absolute top-0 right-0 bg-cyan-500 text-black text-[10px] font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-tighter">MÁS POPULAR</div>
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-black tracking-widest mb-6 uppercase">Pro</span>
                <h4 className="text-3xl font-bold text-white mb-2">Ventas 24/7</h4>
                <p className="text-5xl font-heading font-black text-white mt-6">RD$ 15,000</p>
                <p className="text-cyan-400 text-xl font-bold mt-2">+ RD$ 3,000/mes</p>
              </div>
              <ul className="space-y-4 text-gray-200 mb-12">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-cyan-500 shrink-0" size={20} /> Pagina Web + Chat IA</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-cyan-500 shrink-0" size={20} /> WhatsApp Autopilot</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-cyan-500 shrink-0" size={20} /> Agenda Automática</li>
              </ul>
              <a
                href="https://wa.me/18094789071?text=Hola!%20Quiero%20el%20Plan%20PRO%20Ventas%2024/7%20(RD$%2015,000%20+%20RD$%203,000/mes)."
                target="_blank"
                className="block w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all text-black font-black uppercase tracking-widest shadow-xl shadow-cyan-500/20 text-center"
              >
                Elegir PRO
              </a>
            </div>
          </motion.div>

          {/* ELITE */}
          <motion.div {...fadeInUp} className="glass-card rounded-[2rem] p-10">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 rounded-full bg-gray-800 text-gray-400 text-xs font-black tracking-widest mb-6 uppercase">Enterprise</span>
              <h4 className="text-2xl font-bold text-white mb-2">Ecosistema</h4>
              <p className="text-4xl font-heading font-black text-white mt-4">RD$ 20,000</p>
              <p className="text-cyan-400 font-bold mt-2">+ RD$ 4,000/mes</p>
            </div>
            <ul className="space-y-4 text-gray-400 mb-10">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> Todo el plan PRO</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> CRM Inteligente</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> Mentoría Directa</li>
            </ul>
            <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold transition-all">Seleccionar</button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          className="glass-panel rounded-[2rem] p-8 md:p-12 border-2 border-cyan-500/50 bg-dark-900/60 relative overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Top Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-black tracking-widest border border-cyan-500/30 uppercase">
              <Star size={12} fill="currentColor" /> Oferta Especial Limitada
            </span>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-4">
              Ecosistema Completo por <span className="text-cyan-400 font-black">US$ 30/mes</span>
            </h2>
            <p className="text-gray-400 font-medium">Todo lo que necesitas para automatizar tu negocio</p>
          </div>

          {/* Timer */}
          <div className="flex justify-center items-center gap-3 text-red-500 font-black mb-12">
            <Hourglass className="animate-bounce" />
            <CountdownTimer />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center bg-white/5 rounded-3xl p-8 border border-white/5 mb-8">
            {/* Left side: List */}
            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg mb-4">Incluye:</h4>
              <ul className="space-y-4">
                {[
                  'WhatsApp Autopilot con IA',
                  'Agenda Automática',
                  'CRM Inteligente'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 font-medium">
                    <CheckCircle2 className="text-cyan-500" size={18} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side: Box */}
            <div className="glass-panel p-8 rounded-2xl border border-white/10 bg-white/5 text-center">
              <span className="text-gray-500 text-[10px] font-black tracking-widest uppercase block mb-2">IMPLEMENTACIÓN</span>
              <p className="text-3xl font-heading font-black text-white mb-6">US$ 100</p>

              <span className="text-gray-500 text-[10px] font-black tracking-widest uppercase block mb-2">DESPUÉS</span>
              <p className="text-3xl font-heading font-black text-cyan-400 mb-2">US$ 30/mes</p>
              <p className="text-gray-600 text-[10px] italic">*Primer mes promocional</p>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4 flex items-center justify-center gap-3 text-yellow-500/80 text-xs font-bold mb-8">
            <ShieldCheck size={16} /> Esta oferta no incluye anuncios en Meta Ads
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="https://wa.me/18094789071?text=Hola!%20Me%20interesa%20la%20Oferta%20Especial%20de%20US$%2030/mes%20con%20implementación."
              target="_blank"
              className="block px-12 py-4 rounded-full bg-[#fbbc05] hover:bg-[#ffcd38] text-black font-black text-lg transition-all shadow-xl shadow-yellow-500/20 uppercase tracking-widest text-center"
            >
              Subscribe
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <Image src="https://gitlab.com/willymartetirado/blank-site-2026-01-23-n1blm/-/raw/main/imagen_2026-02-06_213237322.png" alt="Fluza" width={32} height={32} />
          </div>
          <span className="text-2xl font-heading font-black text-white">Fluza</span>
        </div>

        <div className="flex gap-12 text-sm font-bold text-gray-500">
          <Link href="/privacidad" className="hover:text-cyan-400 transition-colors">Privacidad</Link>
          <Link href="/terminos" className="hover:text-cyan-400 transition-colors">Términos</Link>
          <Link href="/contacto" className="hover:text-cyan-400 transition-colors">Contacto</Link>
        </div>

        <p className="text-sm text-gray-600">© 2026 Fluza. Todos los derechos reservados.</p>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
}
