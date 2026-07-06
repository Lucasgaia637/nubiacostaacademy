import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock,
  Download,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "@/hooks/use-reveal";
import ebookCover from "@/assets/ebook-cover.jpg";
import author from "@/assets/author.jpg";

const HOTMART_URL =
  "https://pay.hotmart.com/N106484108G?sck=HOTMART_PRODUCT_PAGE&off=e26e0fm3&hotfeature=32&bid=1783361673153";

const PRICE = "R$ 47";
const PRICE_INSTALLMENTS = "ou 5x de R$ 9,90";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WhatsApp que Fecha — Ebook para fotógrafos que querem vender mais" },
      {
        name: "description",
        content:
          "40 mensagens prontas para responder clientes, recuperar conversas paradas e fechar mais ensaios pelo WhatsApp. O roteiro definitivo para fotógrafos.",
      },
      { property: "og:title", content: "WhatsApp que Fecha — Ebook para fotógrafos" },
      {
        property: "og:description",
        content:
          "O roteiro de atendimento que leva o cliente do primeiro contato ao contrato assinado. Sem parecer vendedor insistente.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const benefits = [
  { icon: Sparkles, title: "Mais confiança", body: "Para negociar e enviar orçamentos sem travar." },
  { icon: Clock, title: "Menos tempo perdido", body: "Nunca mais pensando no que responder." },
  { icon: Zap, title: "Fim das conversas paradas", body: "Reative clientes que sumiram sem parecer chato." },
  { icon: ShieldCheck, title: "Postura profissional", body: "Que valoriza o preço do seu trabalho." },
];

const forWhom = [
  "Fotógrafos iniciantes querendo fechar os primeiros ensaios com segurança.",
  "Profissionais avançados buscando otimizar o atendimento e aumentar o faturamento.",
  "Quem perde vendas por não saber como continuar a conversa.",
  "Quem quer parar de dar desconto por medo de perder o cliente.",
];

const insideEbook = [
  "40 mensagens reais, prontas para copiar, colar e adaptar.",
  "Roteiro completo: da primeira resposta ao pós-venda.",
  "Scripts para recuperar clientes que sumiram no meio da conversa.",
  "Como apresentar preço sem medo — e sem descontos desnecessários.",
  "Respostas para as objeções mais comuns (‘tá caro’, ‘vou pensar’, ‘me manda depois’).",
  "Mensagens de pós-atendimento que geram indicações.",
];

const testimonials = [
  {
    quote:
      "Comecei a usar as mensagens no mesmo dia. Fechei três ensaios na primeira semana — clientes que estavam parados há meses.",
    author: "Marina R.",
    role: "Fotógrafa de família",
  },
  {
    quote:
      "Meu maior problema era o ‘vou pensar e te aviso’. Depois do ebook, parei de temer essa frase e aprendi a conduzir a conversa.",
    author: "Bruno A.",
    role: "Fotógrafo de casamento",
  },
  {
    quote:
      "Parece bobagem, mas ter um roteiro pronto me deu uma confiança absurda. Meu faturamento subiu no primeiro mês.",
    author: "Camila D.",
    role: "Fotógrafa de ensaios",
  },
];

const faqs = [
  {
    q: "Como recebo o ebook depois da compra?",
    a: "Assim que o pagamento é aprovado, você recebe o acesso por e-mail e também dentro da sua conta na Hotmart. É digital, disponível para leitura no celular, tablet ou computador.",
  },
  {
    q: "As mensagens servem para qualquer tipo de fotografia?",
    a: "Sim. Os scripts foram pensados para o atendimento de qualquer nicho — família, casamento, ensaios, gestante, corporativo. Você adapta o tom e o preço para a sua realidade.",
  },
  {
    q: "Preciso ter experiência com vendas?",
    a: "Não. O ebook foi feito justamente para fotógrafos que não gostam ou não sabem vender. As mensagens conduzem a conversa naturalmente, sem soar agressivo.",
  },
  {
    q: "Quanto tempo leva para aplicar?",
    a: "Você pode começar hoje mesmo. A leitura é rápida e as mensagens já vêm prontas para copiar e usar no próximo atendimento.",
  },
  {
    q: "E se eu não gostar?",
    a: "A Hotmart oferece 7 dias de garantia incondicional. Se por qualquer motivo o ebook não for para você, é só solicitar o reembolso e receber 100% do valor de volta.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <main className="flex-1 pt-20">
        {/* HERO */}
        <section className="relative">
          <div className="container-editorial pt-8 md:pt-16 pb-24 md:pb-32">
            <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20 items-center">
              <div>
                <Reveal>
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted-foreground mb-8">
                    <span className="h-px w-8 bg-foreground/40" /> Ebook para fotógrafos
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <h1 className="font-display text-[2.5rem] sm:text-5xl lg:text-[4.25rem] leading-[1.02] tracking-tight">
                    Transforme conversas <br />
                    do WhatsApp em <br />
                    <span className="italic text-accent">contratos assinados.</span>
                  </h1>
                </Reveal>
                <Reveal delay={180}>
                  <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
                    <strong className="text-foreground font-normal">40 mensagens reais</strong> para responder clientes,
                    recuperar conversas paradas e fechar mais ensaios — sem parecer um vendedor insistente.
                  </p>
                </Reveal>
                <Reveal delay={260}>
                  <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                    <a
                      href={HOTMART_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm hover:opacity-90 transition-all"
                    >
                      Quero meu ebook por {PRICE}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <div className="text-xs text-muted-foreground">
                      {PRICE_INSTALLMENTS} · Acesso imediato
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={340}>
                  <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-accent" strokeWidth={1.5} /> 7 dias de garantia
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Download className="h-4 w-4 text-accent" strokeWidth={1.5} /> Acesso imediato
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-accent" strokeWidth={1.5} /> Copie e cole
                    </span>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={200} className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-cream shadow-lift">
                  <img
                    src={ebookCover}
                    alt="Ebook WhatsApp que Fecha ao lado de um celular exibindo uma conversa"
                    width={1600}
                    height={1200}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PROBLEM / EMPATHY */}
        <section className="border-y border-border bg-cream/60">
          <div className="container-editorial py-24 md:py-32">
            <div className="max-w-3xl">
              <Reveal>
                <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-8">
                  Se você é fotógrafo, isto vai soar familiar
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight">
                  O cliente chama, você responde, envia o orçamento… e <span className="italic text-accent">some.</span>
                </h2>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-10 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Você trava na hora de passar o preço. Fica horas pensando no que responder.
                  Dá desconto por medo de perder o ensaio. E, mesmo assim, boa parte das conversas
                  morre em um &ldquo;vou pensar e te aviso&rdquo;.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <p className="mt-6 text-lg leading-relaxed max-w-2xl">
                  O problema quase nunca é o seu trabalho. É o <strong className="font-normal italic">atendimento</strong>.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section>
          <div className="container-editorial py-28 md:py-36">
            <Reveal>
              <div className="max-w-2xl mb-20">
                <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-4">
                  O que muda no seu negócio
                </div>
                <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
                  Mais do que mensagens prontas — uma nova postura no atendimento.
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-x-14 gap-y-14 md:grid-cols-2">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 60}>
                  <div>
                    <b.icon className="h-6 w-6 text-accent" strokeWidth={1.25} />
                    <h3 className="mt-6 font-display text-2xl">{b.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed max-w-md">{b.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT'S INSIDE */}
        <section className="border-y border-border bg-cream/60">
          <div className="container-editorial py-28 md:py-36 grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-6">O que está dentro</div>
                <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
                  Um guia prático, direto ao ponto.
                </h2>
                <p className="mt-8 text-muted-foreground leading-relaxed">
                  Nada de teoria vazia. Cada página é feita para você abrir o WhatsApp
                  e usar hoje mesmo, no próximo cliente que chegar.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ul className="space-y-6">
                {insideEbook.map((item) => (
                  <li key={item} className="flex gap-4 items-start pb-6 border-b border-border last:border-0">
                    <Check className="h-5 w-5 mt-1 shrink-0 text-accent" strokeWidth={1.5} />
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* FOR WHOM */}
        <section>
          <div className="container-editorial py-28 md:py-36 grid gap-16 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-4">Para quem é</div>
                <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
                  Feito para o fotógrafo que quer <span className="italic text-accent">vender melhor</span> — sem se sentir vendedor.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ul className="space-y-5">
                {forWhom.map((item) => (
                  <li key={item} className="flex gap-4 items-start">
                    <Sparkles className="h-5 w-5 mt-1 shrink-0 text-accent" strokeWidth={1.5} />
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* AUTHOR */}
        <section className="border-y border-border bg-cream/60">
          <div className="container-editorial py-28 md:py-36 grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20 items-center">
            <Reveal>
              <div className="aspect-[4/5] overflow-hidden rounded-xl">
                <img
                  src={author}
                  alt="Núbia Costa, fotógrafa e autora do ebook"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-6">Quem escreveu</div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
                  Escrito por quem <span className="italic text-accent">vive</span> do WhatsApp.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed max-w-xl">
                  <p>
                    Sou Núbia Costa, fotógrafa há mais de uma década. Passei anos perdendo clientes
                    por não saber conduzir uma conversa no WhatsApp — até desenvolver um roteiro próprio,
                    testado em milhares de atendimentos.
                  </p>
                  <p>
                    Este ebook é o mesmo método que uso todos os dias no meu estúdio. As mesmas mensagens,
                    a mesma postura, os mesmos gatilhos de decisão. Nada foi inventado — tudo foi validado
                    na prática.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section>
          <div className="container-editorial py-28 md:py-36">
            <Reveal>
              <div className="max-w-2xl mb-20">
                <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-4">Depoimentos</div>
                <h2 className="font-display text-4xl md:text-5xl tracking-tight">
                  Fotógrafos que já <span className="italic">aplicaram.</span>
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal key={t.author} delay={i * 100}>
                  <figure className="h-full rounded-xl border border-border bg-card p-8 shadow-soft flex flex-col">
                    <Sparkles className="h-4 w-4 text-accent" strokeWidth={1.5} />
                    <blockquote className="mt-6 font-display text-xl leading-snug tracking-tight">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-8 pt-6 border-t border-border">
                      <div className="text-sm">{t.author}</div>
                      <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING / OFFER */}
        <section id="comprar" className="bg-primary text-primary-foreground">
          <div className="container-editorial py-28 md:py-36">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal>
                <div className="text-xs uppercase tracking-[0.28em] text-primary-foreground/60 mb-6">
                  Sua oferta
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05]">
                  WhatsApp que <span className="italic text-accent">Fecha.</span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 text-primary-foreground/70 text-lg leading-relaxed max-w-xl mx-auto">
                  O ebook completo + as 40 mensagens prontas para você aplicar hoje.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-14 inline-flex flex-col items-center gap-6 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.04] px-10 md:px-16 py-12">
                  <div className="text-xs uppercase tracking-[0.28em] text-primary-foreground/60">
                    Investimento único
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-6xl md:text-7xl tracking-tight">{PRICE}</span>
                  </div>
                  <div className="text-sm text-primary-foreground/60">{PRICE_INSTALLMENTS}</div>

                  <a
                    href={HOTMART_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-4 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-4 text-sm hover:opacity-90 transition-opacity"
                  >
                    Quero meu acesso agora
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <div className="pt-6 mt-2 border-t border-primary-foreground/15 w-full text-xs text-primary-foreground/60 flex flex-wrap gap-x-6 gap-y-2 justify-center">
                    <span className="inline-flex items-center gap-2">
                      <ShieldCheck className="h-3.5 w-3.5" /> 7 dias de garantia
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Download className="h-3.5 w-3.5" /> Acesso imediato
                    </span>
                    <span>Pagamento seguro via Hotmart</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border">
          <div className="container-editorial py-28 md:py-36">
            <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
              <Reveal>
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-4">FAQ</div>
                  <h2 className="font-display text-4xl md:text-5xl tracking-tight">
                    Perguntas <span className="italic">frequentes.</span>
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="divide-y divide-border border-y border-border">
                  {faqs.map((f) => (
                    <FaqItem key={f.q} q={f.q} a={f.a} />
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <MinimalFooter />
    </div>
  );
}

function MinimalHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div
        className={`container-editorial flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-14" : "h-20"
        }`}
      >
        <a href="#" className="font-display text-xl tracking-tight">
          Núbia<span className="text-accent"> · </span>Costa
        </a>
        <a
          href="#comprar"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm hover:opacity-90 transition-opacity"
        >
          Quero o ebook
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function MinimalFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container-editorial py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Núbia Costa · WhatsApp que Fecha</div>
        <div className="flex gap-6">
          <a href="/privacidade" className="link-underline">Privacidade</a>
          <a href="/termos" className="link-underline">Termos</a>
        </div>
      </div>
    </footer>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-lg md:text-xl">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-500 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-muted-foreground leading-relaxed max-w-2xl">{a}</p>
        </div>
      </div>
    </div>
  );
}
