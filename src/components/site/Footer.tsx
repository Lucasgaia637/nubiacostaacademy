import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="container-editorial py-20">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="font-display text-2xl">Núbia Costa</div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Um espaço dedicado a fotógrafos que buscam construir uma linguagem
              visual autoral, sensível e consistente.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Navegação
            </div>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/cursos" className="link-underline">Cursos</Link></li>
              <li><Link to="/sobre" className="link-underline">Sobre</Link></li>
              <li><Link to="/blog" className="link-underline">Blog</Link></li>
              <li><Link to="/contato" className="link-underline">Contato</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Contato
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 link-underline">
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 link-underline">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:ola@nubiacosta.com" className="inline-flex items-center gap-2 link-underline">
                  <Mail className="h-4 w-4" /> ola@nubiacosta.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Núbia Costa. Todos os direitos reservados.</div>
          <div className="flex gap-6">
            <Link to="/privacidade" className="link-underline">Política de Privacidade</Link>
            <Link to="/termos" className="link-underline">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
