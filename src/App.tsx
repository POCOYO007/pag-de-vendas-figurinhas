/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from 'react';
import { ChevronDown, ChevronUp, ChevronRight, CheckCircle2, ShieldCheck, Zap, TrendingUp, Smartphone, Trophy, Package, Clock, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CHECKOUT_LINK = "https://checkoutkupfy.com/checkout/cmosrxfj300cg1rpfdn8drh19?offer=5XNB0K8";

const IMAGES = {
  BENEFICIOS: "https://i.imgur.com/wFvEusW.png",
  CARDS: "https://i.imgur.com/qAPoI0Q.png",
  APP: "https://i.imgur.com/KJgBknS.png",
  DISCLAIMER: "https://i.imgur.com/BEL1WIJ.png",
  METODO_OFERTA: "https://i.imgur.com/AkTDxJr.png", // Nota do Dev: Este link foi enviado duplicado para Método e Oferta.
  BONUS: "https://i.imgur.com/2i7mr0a.png",
  PLANO: "https://i.imgur.com/xHZBUYf.png"
};

export default function App() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const animatedItems = document.querySelectorAll('.reveal-up, .reveal-zoom, .reveal-left, .reveal-right, .reveal-float, .reveal-glow, .fade-in');
    animatedItems.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#040d0a] selection:bg-verde-neon selection:text-preto-noite stadium-bg">
      {/* 1. Urgency Bar */}
      <div className="sticky top-0 z-50 w-full bg-vermelho-urgencia text-white py-2 px-4 text-center font-bold text-sm sm:text-base border-b-2 border-amarelo-ouro shadow-xl">
        <div className="flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 animate-pulse" />
          <span>APROVEITE O HYPE DE 2026: OFERTA EXPIRA EM:</span>
          <span className="font-mono text-xl ml-1 tracking-tighter">{formatTime(timeLeft)}</span>
        </div>
      </div>

      {/* 2. NEW HERO SECTION (Based on Image x1qAh2H) */}
      <section className="relative w-full pt-16 pb-12 px-4 flex flex-col items-center text-center overflow-hidden">
        <div className="max-w-5xl mx-auto z-10">
          <div className="mb-4 reveal-up">
            <h1 className="text-4xl md:text-7xl font-anton italic leading-[0.9] text-white mb-8 drop-shadow-[0_5px_15px_rgba(0,0,0,1)] uppercase">
              HOJE POR <span className="text-amarelo-ouro">MENOS QUE</span> ALGUNS <span className="text-amarelo-ouro">PACOTINHOS</span> DE FIGURINHA!
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-12">
            {/* Price Box Neon */}
            <div className="price-box-neon w-full max-w-lg reveal-left">
              <div className="mb-1">
                 <p className="text-lg md:text-xl line-through text-white/50 font-bold">DE R$ 299,99</p>
              </div>
              <div className="flex items-center justify-center gap-1">
                 <span className="text-4xl md:text-6xl font-anton text-amarelo-ouro leading-none mt-4">R$</span>
                 <p className="text-8xl md:text-[10rem] font-anton text-white leading-none tracking-tighter">26<span className="text-4xl md:text-6xl text-amarelo-ouro">,99</span></p>
              </div>
              <div className="mt-4 border-t border-verde-neon/30 pt-4">
                 <p className="text-verde-neon font-black text-sm md:text-base tracking-widest">
                    PAGUE UMA VEZ E TENHA ACESSO <span className="text-amarelo-ouro">PARA SEMPRE!</span>
                 </p>
              </div>
            </div>

            {/* Product Mockup Image */}
            <div className="relative reveal-right">
               <div className="badge-91 absolute -top-10 -left-10 z-20 hidden md:flex scale-110">
                  <span className="text-3xl text-inherit">91%</span>
                  <span className="text-xl text-inherit">OFF</span>
               </div>
               <img 
                 src={IMAGES.METODO_OFERTA} 
                 alt="Guia Mestre e App Offline" 
                 className="w-full max-w-md drop-shadow-[0_0_50px_rgba(45,254,84,0.3)]"
                 loading="eager" 
                 fetchPriority="high"
               />
               {/* Lightning Promo Badge */}
               <div className="mt-4 md:absolute md:-bottom-5 md:-right-10 flex gap-2 items-center bg-black/80 border-2 border-vermelho-urgencia p-4 rounded-xl shadow-2xl reveal-zoom">
                   <Zap className="text-amarelo-ouro fill-amarelo-ouro w-10 h-10 animate-pulse" />
                   <div className="text-left">
                      <p className="text-white font-anton text-2xl leading-none">DESCONTO</p>
                      <p className="text-vermelho-urgencia font-anton text-xl leading-none">LIBERADO AGORA!</p>
                   </div>
               </div>
            </div>
          </div>

          {/* Bônus Icons Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 bg-black/40 border border-verde-neon/20 p-4 rounded-2xl reveal-up backdrop-blur-sm">
             <div className="flex items-center gap-3 justify-center"><CheckCircle2 className="text-verde-neon w-5 h-5" /><span className="text-[10px] font-bold">PLANILHA DE CONTROLE</span></div>
             <div className="flex items-center gap-3 justify-center"><Zap className="text-amarelo-ouro w-5 h-5" /><span className="text-[10px] font-bold">MENSAGENS PRONTAS</span></div>
             <div className="flex items-center gap-3 justify-center"><TrendingUp className="text-verde-neon w-5 h-5" /><span className="text-[10px] font-bold">TABELA DE PREÇOS</span></div>
             <div className="flex items-center gap-3 justify-center"><Package className="text-amarelo-ouro w-5 h-5" /><span className="text-[10px] font-bold">CHECKLIST COMPLETO</span></div>
          </div>

          <div className="flex flex-col items-center gap-4 mb-12">
            <a href={CHECKOUT_LINK} className="btn-mega-glow w-full sm:w-auto py-6 px-12 text-2xl md:text-4xl flex items-center justify-center gap-4 uppercase">
              QUERO MEU ACESSO AGORA! <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
            </a>
            <p className="text-amarelo-ouro font-black text-xs flex items-center gap-2">
               <ShieldCheck className="w-4 h-4" /> GARANTIA DE 7 DIAS: SE NÃO GOSTAR, DEVOLVEMOS 100% DO SEU DINHEIRO!
            </p>
          </div>

          {/* Bottom Features Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full max-w-4xl mx-auto opacity-80 reveal-up">
              {[
                  { icon: <Zap />, text: "ACESSO IMEDIATO" },
                  { icon: <ShieldCheck />, text: "PAGAMENTO SEGURO" },
                  { icon: <Package />, text: "CONTEÚDO PRÁTICO" },
                  { icon: <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}><Smartphone /></motion.div>, text: "PARA INICIANTES" }
              ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 justify-center border border-white/10 p-3 rounded-lg text-[10px] font-black tracking-widest bg-black/20">
                      <div className="text-verde-neon w-4 h-4">{item.icon}</div>
                      {item.text}
                  </div>
              ))}
          </div>
        </div>
      </section>

      {/* 3. Este guia é para você se... */}
      <section className="w-full py-20 px-4 bg-[#061a12] text-white border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl mb-12 text-amarelo-ouro">ESTE GUIA É PARA VOCÊ SE...</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
            {[
              "Busca uma renda extra de R$200 a R$500/semana sem sair de casa.",
              "Tem pouco tempo e quer algo prático que funciona no celular.",
              "Quer aproveitar o hype da Copa para capitalizar no mercado esportivo.",
              "Deseja um método passo a passo mesmo começando do zero absoluto.",
              "Já gosta de futebol e quer transformar o hobby em dinheiro no bolso."
            ].map((text, i) => (
              <div key={i} className="flex gap-4 bg-black/40 p-6 rounded-2xl border border-verde-neon/20 reveal-up hover:border-verde-neon transition-colors">
                <CheckCircle2 className="w-6 h-6 text-verde-neon shrink-0" />
                <p className="font-bold text-white/90">{text}</p>
              </div>
            ))}
          </div>

          <div className="section-image wide reveal-up border-amarelo-ouro/30">
            <img src={IMAGES.BENEFICIOS} alt="Benefícios do guia Renda Extra com Figurinhas da Copa" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* 4. Problema/Demanda */}
      <section className="w-full py-20 px-4 bg-[#040d0a] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl mb-6 text-white leading-tight">A COPA CRIA UMA DEMANDA QUE <span className="text-amarelo-ouro">A MAIORIA VAI IGNORAR</span></h2>
          <p className="text-white/70 mb-12 max-w-2xl mx-auto text-lg">
             Milhões de pessoas vão colecionar. Uma elite de 1% vai faturar alto com a organização e revenda estratégica no mercado cinza de figurinhas.
          </p>

          <div className="section-image medium reveal-zoom mb-12 border-verde-neon/40 shadow-[0_0_40px_rgba(45,254,84,0.1)]">
             <img src={IMAGES.CARDS} alt="Tipos de figurinhas e cards usados na estratégia" loading="lazy" decoding="async" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#061a12] rounded-3xl border-2 border-verde-neon/30 reveal-up hover:scale-105 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-verde-neon mb-4 mx-auto" />
                <h3 className="text-xl mb-2 text-amarelo-ouro">MERCADO EXPLOSIVO</h3>
                <p className="text-white/60 text-sm">A procura aumenta 2.000% no pré-copa. Se antecipe ao mercado.</p>
            </div>
            <div className="p-8 bg-[#061a12] rounded-3xl border-2 border-amarelo-ouro/30 reveal-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>
                <Zap className="w-10 h-10 text-amarelo-ouro mb-4 mx-auto" />
                <h3 className="text-xl mb-2 text-verde-neon">ALTA LIQUIDEZ</h3>
                <p className="text-white/60 text-sm">Figurinhas raras são vendidas em minutos se você souber onde anunciar.</p>
            </div>
            <div className="p-8 bg-[#061a12] rounded-3xl border-2 border-verde-neon/30 reveal-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
                <Trophy className="w-10 h-10 text-verde-neon mb-4 mx-auto" />
                <h3 className="text-xl mb-2 text-amarelo-ouro">ZERO ESTOQUE</h3>
                <p className="text-white/60 text-sm">Aprenda a operar com capital mínimo e giro extremamente rápido.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mercado/Autoridade Section */}
      <section className="w-full py-20 px-4 bg-[#061a12] text-white items-center">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl mb-12 italic text-white/90">O MERCADO DE FIGURINHAS <span className="text-verde-neon">NÃO É PEQUENO</span></h2>
            <div className="bg-black/60 rounded-[2rem] p-8 md:p-12 mb-12 text-white border-2 border-amarelo-ouro/20 reveal-zoom shadow-2xl relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 right-0 p-4 opacity-5"><TrendingUp size={120} /></div>
                <p className="text-2xl md:text-4xl font-anton italic mb-6 leading-tight">"O segredo não é ter sorte no pacotinho, é ter o <span className="text-amarelo-ouro">controle do inventário.</span>"</p>
                <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 bg-verde-neon rounded-full flex items-center justify-center border-4 border-white/20 shadow-[0_0_20px_rgba(45,254,84,0.5)]">
                         <span className="font-anton text-2xl text-preto-noite">RE</span>
                    </div>
                    <div className="text-left">
                        <p className="font-black text-xl mb-0">GUIA MESTRE</p>
                        <p className="text-amarelo-ouro text-sm uppercase tracking-widest font-bold">Autoridade Validada</p>
                    </div>
                </div>
            </div>
            <div className="section-image wide reveal-up">
                <img src={IMAGES.BENEFICIOS} alt="Reforço visual do mercado de figurinhas" loading="lazy" decoding="async" />
            </div>
        </div>
      </section>

      {/* 6. 4 Razões / Oportunidade */}
      <section className="w-full py-20 px-4 bg-[#040d0a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl mb-12 text-amarelo-ouro italic">4 RAZÕES PARA ENTRAR ANTES QUE O MERCADO LOTE</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black/40 p-8 rounded-3xl border-2 border-verde-neon/20 reveal-left text-left hover:border-verde-neon transition-all">
              <h3 className="text-2xl text-verde-neon mb-4 italic">1. PRIMEIRA ONDA</h3>
              <p className="text-white/70">O lucro maior fica com quem entra no início da demanda. A Copa de 2026 não espera.</p>
            </div>
            <div className="bg-black/40 p-8 rounded-3xl border-2 border-verde-neon/20 reveal-right text-left hover:border-verde-neon transition-all">
              <h3 className="text-2xl text-verde-neon mb-4 italic">2. ESCALABILIDADE</h3>
              <p className="text-white/70">O método serve tanto para quem quer R$50 extras ou quem quer profissionalizar o faturamento.</p>
            </div>
            <div className="bg-black/40 p-8 rounded-3xl border-2 border-verde-neon/20 reveal-left text-left hover:border-verde-neon transition-all">
              <h3 className="text-2xl text-verde-neon mb-4 italic">3. SEM CONCORRÊNCIA</h3>
              <p className="text-white/70">99% das pessoas são colecionadores amadores que perdem dinheiro. Você será o vendedor estratégico.</p>
            </div>
            <div className="bg-black/40 p-8 rounded-3xl border-2 border-verde-neon/20 reveal-right text-left hover:border-verde-neon transition-all">
              <h3 className="text-2xl text-verde-neon mb-4 italic">4. ATUALIZADO</h3>
              <p className="text-white/70">Estratégias validadas para as tendências de 2026 e o novo comportamento digital pós-redes sociais.</p>
            </div>
          </div>

          <div className="section-image wide reveal-up mb-12 border-amarelo-ouro/40">
            <img src={IMAGES.BENEFICIOS} alt="Benefícios do mercado de figurinhas" loading="lazy" decoding="async" />
          </div>

          <a href={CHECKOUT_LINK} className="btn-mega-glow w-full sm:w-auto py-5 px-12 text-2xl">
            QUERO ENTRAR ANTES QUE O MERCADO LOTE 🚀
          </a>
        </div>
      </section>

      {/* 7. Mecanismo 5 passos */}
      <section className="w-full py-20 px-4 bg-[#061a12] text-white border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl mb-4 text-amarelo-ouro italic">COMPRAR PACOTINHO À TOA NÃO É MÉTODO. <span className="text-white">ISSO É.</span></h2>
          <p className="mb-12 font-bold text-verde-neon uppercase tracking-widest text-sm italic">O MECANISMO DE 5 PASSOS DO SUCESSO</p>
          
          <div className="space-y-4 mb-16 max-w-2xl mx-auto">
             {[
                { step: "01", title: "IDENTIFICAÇÃO", desc: "Aprenda a mapear as cartas que realmente valem no mercado de repasses." },
                { step: "02", title: "AQUISIÇÃO", desc: "Onde comprar por lotes fechados abaixo do valor de mercado de varejo." },
                { step: "03", title: "ORGANIZAÇÃO", desc: "Use o App Offline para saber exatamente o que você tem e o que precisa." },
                { step: "04", title: "MARKETING", desc: "Anuncie nos canais digitais certos que o guia vai te revelar passo a passo." },
                { step: "05", title: "REVENDA", desc: "Recupere o investimento e escale com lucro de até 400% por operação." }
             ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-black/40 rounded-2xl border-2 border-verde-neon/10 reveal-left hover:border-verde-neon transition-all">
                   <span className="font-anton text-4xl text-amarelo-ouro opacity-80 italic">{item.step}</span>
                   <div className="text-left">
                      <h4 className="text-xl mb-1 text-white">{item.title}</h4>
                      <p className="text-sm font-medium opacity-70 text-white/80">{item.desc}</p>
                   </div>
                </div>
             ))}
          </div>

          <div className="section-image wide reveal-zoom border-verde-neon/50">
             <img src={IMAGES.PLANO} alt="Método prático testado e validado para vender figurinhas" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* 8. App Offline Section */}
      <section className="w-full py-20 px-4 bg-[#040d0a] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 reveal-left text-left">
            <div className="bg-verde-neon text-preto-noite px-4 py-1 rounded-full text-xs font-black inline-block mb-4 italic">TECNOLOGIA EXCLUSIVA E OFFLINE</div>
            <h2 className="text-3xl md:text-6xl mb-6 leading-[0.9] italic">SEM O APP, VOCÊ ESTÁ <span className="text-amarelo-ouro">VENDENDO NO ESCURO.</span></h2>
            <p className="text-white/80 mb-8 text-lg">
                Esqueça anotações em papel que se perdem. Nosso WebApp funciona diretamente no seu celular, mesmo sem sinal de internet em estádios ou aglomerações.
            </p>
            <ul className="space-y-4">
                {[
                    "Controle Total de Entradas e Saídas",
                    "Calculadora de Projeção de Lucro Físico",
                    "Listagem Digital das Figurinhas Mais Raras",
                    "Histórico Blindado de Todas as Negociações"
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-verde-neon flex items-center justify-center shrink-0">
                           <CheckCircle2 className="w-4 h-4 text-black" />
                        </div>
                        <span className="font-bold text-white/90">{item}</span>
                    </li>
                ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2 reveal-float">
             <div className="section-image app-image mx-0 border-amarelo-ouro/40 glow-green">
                <img src={IMAGES.APP} alt="Mockup do app offline de gestão para figurinhas da Copa" loading="lazy" decoding="async" />
             </div>
          </div>
        </div>
        <div className="text-center mt-12 reveal-up">
            <a href={CHECKOUT_LINK} className="btn-mega-glow w-full sm:w-auto py-5 px-10 text-2xl">
                QUERO CONTROLAR MINHA OPERAÇÃO AGORA ⚽
            </a>
        </div>
      </section>

      {/* 9. O que muda na prática */}
      <section className="w-full py-20 px-4 bg-[#061a12] text-white">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl mb-12 italic"><span className="text-amarelo-ouro">O QUE MUDA</span> NA PRÁTICA</h2>
            <div className="section-image wide reveal-up mb-12 border-verde-neon/30">
                <img src={IMAGES.BENEFICIOS} alt="O que muda na prática com o guia" loading="lazy" decoding="async" />
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="p-8 border-2 border-vermelho-urgencia/40 rounded-3xl bg-black/40">
                   <h3 className="text-vermelho-urgencia mb-4 italic">SITUAÇÃO ATUAL</h3>
                   <p className="font-medium opacity-70 text-white/80">Gasta dinheiro com pacotinhos, tem repetidas guardadas pegando pó e não faz ideia de como capitalizar no hype da Copa.</p>
                </div>
                <div className="p-8 border-2 border-verde-neon/40 rounded-3xl bg-black/40">
                   <h3 className="text-verde-neon mb-4 italic">COM O MÉTODO</h3>
                   <p className="font-medium opacity-70 text-white/80">Sabe exatamente o que comprar, quanto cobrar e tem um app que cuida de toda a contabilidade do seu novo negócio lucrativo.</p>
                </div>
            </div>
         </div>
      </section>

      {/* 10. O Caminho dos R$200 aos R$10 mil */}
      <section className="w-full py-20 px-4 bg-[#040d0a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl mb-6 text-amarelo-ouro italic">O CAMINHO DOS R$200 AOS R$10 MIL — FASE A FASE</h2>
          <p className="text-white/60 mb-12 text-sm uppercase tracking-widest italic font-bold">Simulação de Potencial • Resultados Dependem da Execução Individual</p>
          
          <div className="section-image plan-image reveal-zoom mb-12 border-amarelo-ouro/40 glow-green">
            <img src={IMAGES.PLANO} alt="Plano dos R$200 aos R$10 mil até a Copa" loading="lazy" decoding="async" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
             {[
               { fase: "FASE 01", meta: "R$500", desc: "Início das operações. Foco em figurinhas comuns e giro rápido de caixa." },
               { fase: "FASE 02", meta: "R$2.500", desc: "Escala para lotes fechados e nichos de álbuns clássicos de 2026." },
               { fase: "FASE 03", meta: "R$10.000", desc: "Domínio regional e revenda de itens raros e edições especiais." }
             ].map((f, i) => (
                <div key={i} className="bg-black/60 p-8 rounded-3xl border-2 border-amarelo-ouro/20 reveal-up hover:border-amarelo-ouro transition-all">
                   <p className="text-verde-neon font-black mb-2 italic tracking-widest">{f.fase}</p>
                   <h3 className="text-4xl text-white mb-2 italic">{f.meta}</h3>
                   <p className="text-white/50 text-sm font-medium leading-relaxed">{f.desc}</p>
                </div>
             ))}
          </div>
          <p className="mt-8 text-xs text-white/30 italic">A simulação de valores é baseada no potencial do mercado de 2026. Seus resultados dependem exclusivamente da sua execução.</p>
        </div>
      </section>

      {/* 11 & 12. O que recebe + BÔNUS */}
      <section className="w-full py-20 px-4 bg-[#061a12] text-white border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl mb-12 text-amarelo-ouro italic">TUDO ISSO POR APENAS <span className="text-white">R$26,99</span></h2>
          
          <div className="section-image bonus-image reveal-up mb-12 border-verde-neon/30">
            <img src={IMAGES.BONUS} alt="Pack de bônus do Renda Extra com Figurinhas da Copa" loading="lazy" decoding="async" />
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-left mb-16">
            {[
              "Guia Mestre Estratégico (PDF HD)",
              "Acesso Vitalício ao WebApp Offline",
              "Planilha Inteligente de Gestão",
              "Checklist de Verificação de Cards",
              "Atualizações Automáticas para 2026"
            ].map((t, i) => (
               <div key={i} className="flex items-center gap-3 p-5 bg-black/40 rounded-2xl border border-verde-neon/10 hover:border-verde-neon transition-all">
                 <Package className="w-5 h-5 text-verde-neon" />
                 <span className="font-bold text-white/90">{t}</span>
               </div>
            ))}
          </div>

          <h3 className="text-3xl md:text-5xl mb-12 text-white italic tracking-tighter italic">+ MAIS 5 BÔNUS <span className="text-amarelo-ouro underline">QUE ESTARÃO LÁ DENTRO</span></h3>
          <div className="section-image bonus-image reveal-zoom mb-12 border-amarelo-ouro/30">
             <img src={IMAGES.BONUS} alt="Pack de bônus adicional" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* 13. Seção de Oferta (FINAL) */}
      <section id="oferta" className="w-full py-24 px-4 bg-[#040d0a] text-white border-y-[10px] border-amarelo-ouro">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl mb-8 text-white italic leading-[1] uppercase tracking-tighter">
            GUIA <span className="text-amarelo-ouro">+</span> APP OFFLINE <span className="text-amarelo-ouro">+</span> 5 BÔNUS
          </h2>
          
          {/* Price Box Neon (Again for emphasis) */}
          <div className="price-box-neon w-full max-w-2xl mx-auto mb-12 border-[#ffc72c] reveal-glow">
              <div className="mb-1">
                 <p className="text-xl md:text-2xl line-through text-white/50 font-bold italic">DE R$ 299,99</p>
              </div>
              <div className="flex items-center justify-center gap-1">
                 <span className="text-5xl md:text-7xl font-anton text-amarelo-ouro leading-none mt-6">R$</span>
                 <p className="text-9xl md:text-[12rem] font-anton text-white leading-none tracking-tighter">26<span className="text-5xl md:text-7xl text-amarelo-ouro">,99</span></p>
              </div>
              <p className="mt-8 bg-verde-neon text-black font-black py-3 px-8 rounded-full inline-block text-lg italic uppercase tracking-widest shadow-[0_0_30px_rgba(45,254,84,0.4)]">
                  91% DE DESCONTO — ECONOMIZE R$ 273,00
              </p>
          </div>

          <a href={CHECKOUT_LINK} className="btn-mega-glow w-full py-8 text-2xl lg:text-4xl flex items-center justify-center gap-4 italic mb-10">
            QUERO MEU ACESSO AGORA! <ChevronRight className="w-10 h-10" />
          </a>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-black text-white/40 uppercase tracking-[0.2em] italic">
            <span className="flex items-center gap-2"><Zap size={14} className="text-verde-neon"/> PIX</span>
            <span className="flex items-center gap-2"><Zap size={14} className="text-verde-neon"/> CARTÃO</span>
            <span className="flex items-center gap-2"><Zap size={14} className="text-verde-neon"/> ACESSO IMEDIATO</span>
          </div>
        </div>
      </section>

      {/* 14. Seção de Escassez */}
      <section className="w-full py-24 px-4 bg-vermelho-urgencia relative overflow-hidden">
        {/* Flame Background Accents */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Zap className="absolute top-0 right-0 w-96 h-96 -translate-y-1/2 translate-x-1/2 rotate-12" />
        </div>
        
        <div className="max-w-xl mx-auto text-center reveal-zoom relative z-10">
           <div className="scarcity-badge border-black/20 text-white shadow-2xl">
              ⚠️ JANELA DE ENTRADA ABERTA AGORA
           </div>
           
           <h2 className="text-3xl md:text-5xl mb-8 text-white italic font-anton leading-tight drop-shadow-lg">
             O PRÓXIMO LOTE JÁ ESTÁ <span className="text-black">SENDO CALCULADO</span> COM O VALOR DE R$ 97,00.
           </h2>
           <p className="text-white/90 mb-12 font-bold text-lg md:text-xl leading-relaxed">
               A demanda cresce a cada minuto e não podemos manter este preço por muito tempo. Garanta sua vaga agora ou pague mais caro depois.
           </p>

           <a href={CHECKOUT_LINK} className="btn-mega-glow w-full bg-black text-white py-6 px-8 text-2xl border-amarelo-ouro shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4">
              ENTRAR AGORA — R$ 26,99 🚀
           </a>
        </div>
      </section>

      {/* 15. FAQ */}
      <section className="w-full py-24 px-4 bg-[#061a12] text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-6xl mb-16 text-center text-white italic">DÚVIDAS <span className="text-amarelo-ouro">FREQUENTES</span></h2>
          <div className="space-y-6">
             {[
               { q: "O acesso é imediato?", a: "Sim! Na mesma hora que o pagamento é aprovado, você recebe um e-mail com as instruções e o link direto para o guia e para o WebApp Offline." },
               { q: "Funciona se eu não entender nada de futebol?", a: "Sim, 100%. O futebol é o tema, mas o método é pura estratégia de mercado, demanda e organização tecnológica. Você não precisa saber quem é o artilheiro para ganhar dinheiro." },
               { q: "Quanto preciso investir pra começar?", a: "O guia ensina estratégias para começar com quase zero, girando pacotinhos comuns, até subir para lotes fechados. O investimento é proporcional ao quanto você quer girar." },
               { q: "O App Offline funciona em qualquer celular?", a: "Sim. Ele é um WebApp otimizado para navegadores de celular. Você salva o link na sua tela inicial e ele funciona como um app nativo, mesmo sem internet no estádio." },
               { q: "E se o método não servir pra mim?", a: "Fique tranquilo. Oferecemos uma garantia de satisfação de 7 dias. Se você ler o guia e achar que não é pra você, devolvemos seu dinheiro sem burocracia." }
             ].map((faq, i) => (
                <FaqItem key={i} question={faq.q} answer={faq.a} />
             ))}
          </div>
        </div>
      </section>

      {/* 16. Final */}
      <section className="w-full py-24 px-4 bg-[#040d0a] text-white text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="section-image disclaimer-image reveal-up mb-12 border-verde-neon/30">
             <img src={IMAGES.DISCLAIMER} alt="Aviso de segurança e disclaimer do produto" loading="lazy" decoding="async" />
          </div>

          <h2 className="text-4xl md:text-7xl mb-12 italic leading-[1] uppercase tracking-tighter">
            QUERO SER O <span className="text-amarelo-ouro">VENDEDOR</span>, NÃO SÓ O <span className="text-verde-neon">COLECIONADOR!</span> ⚽
          </h2>
          
          <a href={CHECKOUT_LINK} className="btn-mega-glow w-full sm:w-auto py-8 px-16 text-2xl md:text-4xl italic shadow-[0_0_60px_rgba(45,254,84,0.4)]">
             QUERO APLICAR NA PRÁTICA AGORA! 🚀
          </a>
        </div>
      </section>

      {/* 17. Footer */}
      <footer className="w-full py-16 px-4 bg-black text-white/40 text-center text-xs border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-8">
            <p className="font-black uppercase tracking-[0.3em] text-white/70 italic text-sm">Controle • Escala • Resultados 2026</p>
            <p className="leading-relaxed opacity-40 px-4">
                Este produto é um guia independente focado em estratégias de compras, organização e logística de mercado secundário. Não temos qualquer vínculo, parceria ou afiliação oficial com a FIFA, Panini ou marcas patrocinadoras. Todos os ganhos mencionados são projeções baseadas no mercado colecionável e dependem inteiramente da execução, tempo e esforço do usuário final.
            </p>
            <div className="flex flex-wrap justify-center gap-12 py-8 border-y border-white/5 opacity-20 filter grayscale">
               <span className="flex items-center gap-2"><ShieldCheck size={16}/> PAGAMENTO 100% BLINDADO</span>
               <span className="flex items-center gap-2"><CheckCircle2 size={16}/> PRODUTO VERIFICADO</span>
            </div>
            <p className="font-bold tracking-widest">© 2026 RENDA EXTRA FIGURINHAS. TODOS OS DIREITOS RESERVADOS.</p>
        </div>
      </footer>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-verde-profundo/10 bg-cinza-claro/30 rounded-2xl overflow-hidden hover:bg-cinza-claro/50 transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 flex items-center justify-between text-left font-bold text-lg text-verde-profundo"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 shrink-0" /> : <ChevronDown className="w-5 h-5 shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-6 text-preto-noite/70 font-medium overflow-hidden"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
