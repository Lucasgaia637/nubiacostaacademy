import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Camera, Clock, Infinity as InfinityIcon, Layers, RefreshCw, Sparkles, BookOpen, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Shell } from "@/components/site/Shell";
import { Reveal } from "@/hooks/use-reveal";
import { courses } from "@/lib/courses";
import heroDevices from "@/assets/hero-devices.jpg";
import author from "@/assets/author.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const differentials = [
  { icon: Camera, title: "Conteúdo prático", body: "Aulas objetivas com exercícios reais, aplicáveis desde o primeiro dia." },
  { icon: Layers, title: "Método organizado", body: "Uma sequência pensada para levar você do fundamento à autoria." },
  { icon: InfinityIcon, title: "Acesso vitalício", body: "Estude no seu tempo — sem prazos, sem pressão." },
  { icon: RefreshCw, title: "Atualizações constantes", body: "Novos módulos e revisões incluídas em todos os cursos." },
  { icon: Clock, title: "Aprendizado no seu ritmo", body: "Um formato que respeita sua rotina e seu processo criativo." },
  { icon: BookOpen, title: "Material complementar", body: "PDFs, presets e referências para aprofundar o estudo." },
];

const testimonials = [
  { quote: "Reencontrei meu olhar. O curso mudou completamente a forma como eu enxergo a luz.", author: "Marina Ribeiro", role: "Fotógrafa autoral" },
  { quote: "Uma experiência de aprendizado diferente de tudo que fiz. Sensível, precisa, sem enrolação.", author: "Camila Duarte", role: "Fotógrafa editorial" },
  { quote: "Finalmente entendi como construir uma edição coerente. Meu trabalho ganhou identidade.", author: "Bruno Alencar", role: "Fotógrafo" },
];

const faqs = [
  { q: "Como funciona o acesso aos cursos?", a: "Após a inscrição, você recebe acesso imediato e vitalício à plataforma, com todas as aulas, materiais e atualizações futuras." },
  { q: "Preciso de equipamento profissional?", a: "Não. Os cursos priorizam o desenvolvimento do olhar. Qualquer câmera com controles manuais é suficiente para acompanhar." },
  { q: "As aulas são ao vivo ou gravadas?", a: "As aulas são gravadas, para que você estude no seu ritmo. Há encontros mensais opcionais para tira-dúvidas ao vivo." },
  { q: "Existe algum suporte durante o curso?", a: "Sim. Há uma comunidade privada de alunos e acompanhamento direto para dúvidas técnicas e criativas." },
  { q: "Posso cancelar se não gostar?", a: "Sim. Oferecemos 7 dias de garantia incondicional. Se não for para você, devolvemos o valor integralmente." },
];

function Home() {
  return (
    <Shell>
      {/* HERO */}
      <section className="relative">
        <div className="container-editorial pt-16 md:pt-24 pb-24 md:pb-32">
          <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-20 items-center">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted-foreground mb-8">
                  <span className="h-px w-8 bg-foreground/40" /> Estúdio de fotografia autoral
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-[4.5rem] leading-[1.02] tracking-tight">
                  Um olhar<br />
                  <span className="italic text-accent">seu.</span> Uma linguagem<br />
                  que ninguém mais<br />tem.
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Cursos online de fotografia sensível, autoral e editorial —
                  para fotógrafos que buscam desenvolver uma linguagem visual própria.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    to="/cursos"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm hover:opacity-90 transition-all"
                  >
                    Conhecer os cursos
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <Link
                    to="/contato"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm hover:bg-accent/5 transition-colors"
                  >
                    Falar comigo
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200} className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-cream shadow-lift">
                <img
                  src={heroDevices}
                  alt="Plataforma de cursos exibida em notebook, tablet e celular"
                  width={1600}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-6 hidden sm:block bg-background border border-border rounded-xl px-5 py-4 shadow-soft">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Alunos ativos</div>
                <div className="font-display text-3xl mt-1">2.400+</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-y border-border bg-cream/60">
        <div className="container-editorial py-28 md:py-40">
          <div className="max-w-4xl">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-8">
                Filosofia
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
                Aprender pode ser <span className="italic text-accent">simples.</span>
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Acreditamos que a boa fotografia nasce da atenção — não do excesso.
                Nossos cursos são feitos com poucas palavras e muita clareza,
                para que você aprenda com calma e transforme sua prática com propósito.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="cursos">
        <div className="container-editorial py-28 md:py-36">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <Reveal>
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-4">Cursos</div>
                <h2 className="font-display text-4xl md:text-5xl tracking-tight">
                  Uma coleção de métodos<br /> pensados com cuidado.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <Link to="/cursos" className="link-underline text-sm inline-flex items-center gap-1">
                Ver todos os cursos <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-2">
            {courses.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <Link
                  to="/cursos/$slug"
                  params={{ slug: c.slug }}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-xl bg-muted aspect-[4/5]">
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.duration}</div>
                      <h3 className="font-display text-2xl md:text-3xl mt-2">{c.title}</h3>
                      <p className="mt-3 text-muted-foreground leading-relaxed max-w-md">{c.tagline}</p>
                    </div>
                    <div className="mt-2 shrink-0 inline-flex items-center gap-1.5 text-sm link-underline">
                      Saiba mais <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIALS */}
      <section className="border-t border-border">
        <div className="container-editorial py-28 md:py-36">
          <Reveal>
            <div className="max-w-2xl mb-20">
              <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-4">Diferenciais</div>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight">
                Um cuidado com cada detalhe da sua experiência.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-x-14 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {differentials.map((d, i) => (
              <Reveal key={d.title} delay={i * 60}>
                <div>
                  <d.icon className="h-6 w-6 text-accent" strokeWidth={1.25} />
                  <h3 className="mt-6 font-display text-xl">{d.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-cream/60 border-y border-border">
        <div className="container-editorial py-28 md:py-40">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24 items-center">
            <Reveal>
              <div className="aspect-[4/5] overflow-hidden rounded-xl">
                <img
                  src={author}
                  alt="Núbia Costa, fotógrafa"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-6">Sobre</div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
                  Fotografar, para mim, sempre foi um jeito de <span className="italic text-accent">olhar devagar.</span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Sou Núbia Costa. Há mais de quinze anos me dedico à fotografia
                    autoral e editorial, com trabalhos publicados em revistas
                    brasileiras e internacionais.
                  </p>
                  <p>
                    Meus cursos nasceram da vontade de compartilhar um método
                    sensível — feito de escuta, técnica e paciência. Ensino o que
                    aprendi na prática, com honestidade e clareza.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <Link to="/sobre" className="mt-10 inline-flex items-center gap-2 link-underline text-sm">
                  Conheça minha trajetória <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
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
                O que dizem quem já passou por aqui.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 100}>
                <figure className="h-full rounded-xl border border-border bg-card p-8 shadow-soft flex flex-col">
                  <Sparkles className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  <blockquote className="mt-6 font-display text-xl leading-snug tracking-tight">
                    “{t.quote}”
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

      {/* FINAL CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-editorial py-32 md:py-48 text-center">
          <Reveal>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[1.02] max-w-4xl mx-auto">
              O próximo passo do seu olhar <span className="italic text-accent">começa aqui.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Um método sensível, uma comunidade generosa e todo o tempo do mundo
              para você desenvolver o que só você pode fotografar.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-12">
              <Link
                to="/cursos"
                className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-4 text-sm hover:opacity-90 transition-opacity"
              >
                Conhecer os Cursos <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Shell>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
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
