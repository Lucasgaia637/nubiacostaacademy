import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/site/Shell";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Núbia Costa" },
      { name: "description", content: "Termos de uso do site e dos cursos." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <Shell>
      <section className="container-editorial pt-16 pb-32 max-w-3xl">
        <h1 className="font-display text-5xl">Termos de Uso</h1>
        <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
          <p>Ao acessar este site e adquirir qualquer um dos cursos, você concorda com os termos descritos nesta página.</p>
          <p>Todo o conteúdo publicado — textos, imagens, vídeos e materiais didáticos — é de uso pessoal e não pode ser redistribuído sem autorização.</p>
          <p>Dúvidas: <a href="mailto:ola@nubiacosta.com" className="link-underline text-foreground">ola@nubiacosta.com</a>.</p>
          <p className="text-xs mt-12">Esta é uma versão preliminar. Substitua pelo texto jurídico oficial antes de publicar.</p>
        </div>
      </section>
    </Shell>
  ),
});
