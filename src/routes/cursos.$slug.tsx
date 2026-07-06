import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check, ChevronDown, Play, Sparkles } from "lucide-react";
import { useState } from "react";
import { Shell } from "@/components/site/Shell";
import { Reveal } from "@/hooks/use-reveal";
import { getCourse } from "@/lib/courses";

export const Route = createFileRoute("/cursos/$slug")({
  loader: ({ params }) => {
    const course = getCourse(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Curso não encontrado" }, { name: "robots", content: "noindex" }] };
    }
    const { course } = loaderData;
    return {
      meta: [
        { title: `${course.title} — Núbia Costa` },
        { name: "description", content: course.tagline },
        { property: "og:title", content: `${course.title} — Núbia Costa` },
        { property: "og:description", content: course.tagline },
        { property: "og:image", content: course.image },
      ],
    };
  },
  notFoundComponent: () => (
    <Shell>
      <div className="container-editorial py-32 text-center">
        <div className="font-display text-5xl">Curso não encontrado</div>
        <Link to="/cursos" className="mt-8 inline-block link-underline">Ver todos os cursos</Link>
      </div>
    </Shell>
  ),
  errorComponent: ({ error }) => (
    <div className="container-editorial py-32 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: CoursePage,
});

function CoursePage() {
  const { course } = Route.useLoaderData();

  return (
    <Shell>
      {/* Hero */}
      <section className="container-editorial pt-12 md:pt-16">
        <Reveal>
          <Link to="/cursos" className="text-xs uppercase tracking-[0.28em] text-muted-foreground link-underline">
            ← Cursos
          </Link>
        </Reveal>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20 items-end mt-10">
          <div>
            <Reveal delay={60}>
              <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">{course.duration}</div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.02] tracking-tight">
                {course.title}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                {course.tagline}
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#comprar"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm hover:opacity-90"
                >
                  Quero este curso
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <Link to="/contato" className="inline-flex items-center rounded-full border border-border px-7 py-3.5 text-sm hover:bg-accent/5">
                  Tirar dúvidas
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="aspect-[4/5] overflow-hidden rounded-xl bg-muted">
              <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Video placeholder */}
      <section className="container-editorial mt-24 md:mt-32">
        <Reveal>
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink flex items-center justify-center group cursor-pointer">
            <img src={course.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:opacity-50 transition-opacity" />
            <div className="relative flex flex-col items-center gap-4 text-primary-foreground">
              <div className="h-16 w-16 rounded-full bg-background/95 text-foreground grid place-items-center shadow-lift transition-transform duration-500 group-hover:scale-105">
                <Play className="h-6 w-6 ml-1" fill="currentColor" />
              </div>
              <div className="text-xs uppercase tracking-[0.28em]">Vídeo de apresentação</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Description */}
      <section className="container-editorial py-28 md:py-36">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Sobre o curso</div>
          </Reveal>
          <Reveal delay={80}>
            <p className="font-display text-2xl md:text-3xl leading-[1.3] tracking-tight text-foreground max-w-3xl">
              {course.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Learnings + For whom */}
      <section className="border-y border-border bg-cream/60">
        <div className="container-editorial py-24 md:py-32 grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-6">O que você vai aprender</div>
              <ul className="space-y-5">
                {course.learnings.map((l) => (
                  <li key={l} className="flex gap-4 items-start">
                    <Check className="h-5 w-5 mt-0.5 shrink-0 text-accent" strokeWidth={1.5} />
                    <span className="text-lg leading-relaxed">{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-6">Para quem é</div>
              <ul className="space-y-5">
                {course.forWhom.map((l) => (
                  <li key={l} className="flex gap-4 items-start">
                    <Sparkles className="h-5 w-5 mt-0.5 shrink-0 text-accent" strokeWidth={1.5} />
                    <span className="text-lg leading-relaxed">{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Syllabus */}
      <section className="container-editorial py-28 md:py-36">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-6">Conteúdo programático</div>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight max-w-2xl">
            Uma trilha completa, do início ao seu portfólio.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {course.syllabus.map((mod, i) => (
            <Reveal key={mod.title} delay={i * 60}>
              <div className="rounded-xl border border-border bg-card p-8 shadow-soft h-full">
                <div className="text-xs uppercase tracking-[0.24em] text-accent">Módulo {String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-4 font-display text-2xl">{mod.title}</h3>
                <ul className="mt-6 space-y-3">
                  {mod.items.map((it) => (
                    <li key={it} className="text-muted-foreground flex gap-3">
                      <span className="text-accent">·</span> {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-t border-border">
        <div className="container-editorial py-28 md:py-36 max-w-4xl">
          <Reveal>
            <blockquote className="font-display text-3xl md:text-5xl leading-[1.15] tracking-tight">
              “{course.testimonial.quote}”
            </blockquote>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 pt-6 border-t border-border">
              <div className="text-sm">{course.testimonial.author}</div>
              <div className="text-xs text-muted-foreground mt-1">{course.testimonial.role}</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-cream/60">
        <div className="container-editorial py-28 md:py-36 grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-4">FAQ</div>
              <h2 className="font-display text-4xl md:text-5xl">Perguntas frequentes.</h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="divide-y divide-border border-y border-border">
              {course.faqs.map((f) => (
                <FaqItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Buy CTA */}
      <section id="comprar" className="bg-primary text-primary-foreground">
        <div className="container-editorial py-32 md:py-40 text-center">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[1.05] max-w-3xl mx-auto">
              Comece <span className="italic text-accent">{course.title}</span> hoje.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 text-primary-foreground/70 max-w-lg mx-auto">
              Acesso vitalício, atualizações constantes e uma comunidade generosa
              te esperando.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <a
              href="#"
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-4 text-sm hover:opacity-90"
            >
              Quero fazer minha inscrição <ArrowUpRight className="h-4 w-4" />
            </a>
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
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between gap-6 py-6 text-left">
        <span className="font-display text-lg md:text-xl">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-500 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-500 ${open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="text-muted-foreground leading-relaxed max-w-2xl">{a}</p>
        </div>
      </div>
    </div>
  );
}
