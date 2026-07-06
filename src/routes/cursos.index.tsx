import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Shell } from "@/components/site/Shell";
import { Reveal } from "@/hooks/use-reveal";
import { courses } from "@/lib/courses";

export const Route = createFileRoute("/cursos/")({
  head: () => ({
    meta: [
      { title: "Cursos — Núbia Costa" },
      { name: "description", content: "Todos os cursos de fotografia autoral, editorial e casamento." },
      { property: "og:title", content: "Cursos — Núbia Costa" },
      { property: "og:description", content: "Uma coleção de métodos pensados com cuidado, para fotógrafos que buscam uma linguagem própria." },
    ],
  }),
  component: CursosIndex,
});

function CursosIndex() {
  return (
    <Shell>
      <section className="container-editorial pt-16 md:pt-24 pb-16">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-6">Cursos</div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-5xl md:text-7xl tracking-tight leading-[1.02] max-w-4xl">
            Métodos para construir <span className="italic text-accent">seu olhar.</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Cada curso é uma trilha completa — do fundamento à autoria. Escolha por
            onde começar.
          </p>
        </Reveal>
      </section>

      <section className="container-editorial pb-32">
        <div className="grid gap-x-8 gap-y-20 md:grid-cols-2">
          {courses.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 80}>
              <Link to="/cursos/$slug" params={{ slug: c.slug }} className="group block">
                <div className="overflow-hidden rounded-xl bg-muted aspect-[4/5]">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.duration}</div>
                  <h2 className="font-display text-3xl mt-2">{c.title}</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed max-w-md">{c.tagline}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm link-underline">
                    Saiba mais <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </Shell>
  );
}
