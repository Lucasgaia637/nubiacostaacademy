import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { Shell } from "@/components/site/Shell";
import { Reveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Núbia Costa" },
      { name: "description", content: "Fale comigo por e-mail, Instagram ou WhatsApp." },
      { property: "og:title", content: "Contato — Núbia Costa" },
      { property: "og:description", content: "Fale comigo por e-mail, Instagram ou WhatsApp." },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <Shell>
      <section className="container-editorial pt-16 md:pt-24 pb-32">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-6">Contato</div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-5xl md:text-7xl tracking-tight leading-[1.02] max-w-3xl">
            Vamos <span className="italic text-accent">conversar.</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Escolha o canal que preferir. Costumo responder em até 24 horas úteis.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <Reveal delay={80}>
            <Contact icon={Mail} label="E-mail" value="ola@nubiacosta.com" href="mailto:ola@nubiacosta.com" />
          </Reveal>
          <Reveal delay={160}>
            <Contact icon={MessageCircle} label="WhatsApp" value="+55 00 00000-0000" href="https://wa.me/5500000000000" />
          </Reveal>
          <Reveal delay={240}>
            <Contact icon={Instagram} label="Instagram" value="@nubiacosta" href="https://instagram.com" />
          </Reveal>
        </div>
      </section>
    </Shell>
  );
}

function Contact({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group block rounded-xl border border-border bg-card p-8 shadow-soft transition-shadow hover:shadow-lift"
    >
      <Icon className="h-6 w-6 text-accent" strokeWidth={1.25} />
      <div className="mt-8 text-xs uppercase tracking-[0.24em] text-muted-foreground">{label}</div>
      <div className="mt-2 font-display text-2xl group-hover:text-accent transition-colors">{value}</div>
    </a>
  );
}
