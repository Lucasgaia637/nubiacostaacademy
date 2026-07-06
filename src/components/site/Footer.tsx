export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
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
