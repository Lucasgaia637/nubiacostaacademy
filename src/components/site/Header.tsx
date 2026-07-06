import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div
        className={`container-editorial flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-14" : "h-20"
        }`}
      >
        <a href="/" className="font-display text-xl tracking-tight">
          Núbia<span className="text-accent"> · </span>Costa
        </a>
        <a
          href="/#comprar"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm hover:opacity-90 transition-opacity"
        >
          Quero o ebook
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}
