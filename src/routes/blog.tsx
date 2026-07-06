import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/site/Shell";
import { Reveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Núbia Costa" },
      { name: "description", content: "Ensaios, reflexões e bastidores sobre fotografia autoral." },
      { property: "og:title", content: "Journal — Núbia Costa" },
      { property: "og:description", content: "Ensaios e reflexões sobre fotografia autoral." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <Shell>
      <section className="container-editorial pt-16 md:pt-24 pb-32">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-6">Journal</div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-5xl md:text-7xl tracking-tight leading-[1.02] max-w-3xl">
            Ensaios sobre <span className="italic text-accent">olhar.</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Em breve, textos, bastidores e reflexões sobre fotografia autoral,
            processo criativo e o dia a dia do estúdio.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-20 border border-dashed border-border rounded-xl py-24 text-center">
            <div className="font-display text-2xl">Em preparo.</div>
            <p className="mt-3 text-muted-foreground text-sm">
              O primeiro ensaio chega em breve.
            </p>
          </div>
        </Reveal>
      </section>
    </Shell>
  );
}
