import { portfolioData } from "@/lib/portfolio-data";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-card">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {year} {portfolioData.hero.name}. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {portfolioData.hero.links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name === "GitHub" && <Github className="h-5 w-5" />}
              {link.name === "LinkedIn" && <Linkedin className="h-5 w-5" />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
