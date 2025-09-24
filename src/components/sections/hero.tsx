import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { HeroData } from "@/lib/types";

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section id="home" className="container min-h-[calc(100vh-3.5rem)] flex flex-col justify-center items-start py-20">
      <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
        {data.name}
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
        {data.title} &middot; {data.location}
      </p>
      <div className="mt-8 flex gap-4">
        {data.links.map((link) => (
          <Button key={link.name} variant="outline" size="icon" asChild>
            <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
              {link.name === "GitHub" && <Github />}
              {link.name === "LinkedIn" && <Linkedin />}
            </a>
          </Button>
        ))}
      </div>
    </section>
  );
}
