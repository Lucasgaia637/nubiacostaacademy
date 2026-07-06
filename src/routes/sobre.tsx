import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/Shell";
import { Reveal } from "@/hooks/use-reveal";
import author from "@/assets/author.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Núbia Costa" },
      { name: "description", content: "Quem está por trás dos cursos: trajetória, filosofia e método." },
      { property: "og:title", content: "Sobre — Núbia Costa" },
      { property: "og:description", content: "Fotógrafa autoral com quinze anos de trajetória. Um método sensível, feito de escuta e paciência." },
      { property: "og:image", content: author },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <Shell>
      <section className="container-editorial pt-16 md:pt-24 pb-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24 items-start">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden rounded-xl sticky top-28">
              <img src={author} alt="Núbia Costa" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-6">Sobre</div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-5xl md:text-6xl tracking-tight leading-[1.02]">
                Um olhar construído <span className="italic text-accent">devagar.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-10 space-y-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  Sou Núbia Costa, fotógrafa autoral. Descobri a fotografia aos
                  dezenove, no quarto emprestado de uma tia, revelando filmes com
                  as luzes apagadas. Naquele pequeno ritual entendi que o que me
                  encantava não era o resultado — era o tempo.
                </p>
                <p>
                  Nos últimos quinze anos me dediquei ao retrato e ao editorial.
                  Publiquei em revistas brasileiras e internacionais, atendi
                  marcas, ensinei fotógrafos, e continuei fotografando com a
                  mesma vontade daquela primeira revelação.
                </p>
                <p>
                  Os cursos que crio hoje carregam esse jeito de trabalhar —
                  sensível, técnico e sem pressa. Um convite para você
                  reencontrar seu olhar.
                </p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
                <Stat n="15" label="anos de estrada" />
                <Stat n="2.4k" label="alunos formados" />
                <Stat n="40+" label="publicações" />
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-14">
                <Link to="/cursos" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm hover:opacity-90">
                  Conhecer os cursos
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Shell>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl">{n}</div>
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{label}</div>
    </div>
  );
}
