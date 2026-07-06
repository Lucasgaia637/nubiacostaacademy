import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/site/Shell";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Núbia Costa" },
      { name: "description", content: "Como tratamos seus dados." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <Shell>
      <section className="container-editorial pt-16 pb-32 max-w-3xl">
        <h1 className="font-display text-5xl">Política de Privacidade</h1>
        <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
          <p>Esta página é mantida por Núbia Costa e descreve, de forma geral, como tratamos os dados coletados por este site.</p>
          <p>Coletamos apenas as informações necessárias para responder aos seus contatos e disponibilizar acesso aos cursos adquiridos.</p>
          <p>Você pode solicitar a exclusão dos seus dados a qualquer momento pelo e-mail <a href="mailto:ola@nubiacosta.com" className="link-underline text-foreground">ola@nubiacosta.com</a>.</p>
          <p className="text-xs mt-12">Esta é uma versão preliminar. Substitua pelo texto jurídico oficial antes de publicar.</p>
        </div>
      </section>
    </Shell>
  ),
});
